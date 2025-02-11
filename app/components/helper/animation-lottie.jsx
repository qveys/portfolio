'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-100 animate-pulse" />
});

const AnimationLottie = ({ animationData, ...props }) => {
  if (!animationData) {
    return <div className="w-full h-full bg-gray-100 animate-pulse" />;
  }

  return (
    <Suspense fallback={<div className="w-full h-full bg-gray-100 animate-pulse" />}>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: '95%' }}
        {...props}
      />
    </Suspense>
  );
};

export default AnimationLottie;