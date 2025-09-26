const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable source maps completely to avoid 404 errors
  productionBrowserSourceMaps: false,
  // Disable source maps in development as well
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        pathname: '**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  webpack: (config, { isServer, dev }) => {
    // Disable source maps completely
    config.devtool = false;
    
    // Optimisation pour les fichiers JSON
    config.module.rules.push({
      test: /\.json$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/json/[hash][ext]'
      }
    });

    // Optimisation pour les SVG
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    // Configure webpack to ignore source map requests for React Toastify
    config.ignoreWarnings = [
      {
        module: /node_modules\/react-toastify/,
        message: /source map/,
      },
    ];

    // Additional configuration to prevent source map requests
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-toastify/dist/ReactToastify.css.map': false,
      'react-toastify/dist/react-toastify.esm.mjs.map': false,
    };

    // Add plugin to remove source map comments from React Toastify
    config.plugins.push(
      new (require('webpack')).DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      })
    );

    // Configure module rules to handle React Toastify specifically
    config.module.rules.push({
      test: /node_modules\/react-toastify/,
      use: {
        loader: 'string-replace-loader',
        options: {
          search: '//# sourceMappingURL=',
          replace: '//# sourceMappingURL=disabled',
          flags: 'g'
        }
      }
    });

    return config;
  },
}