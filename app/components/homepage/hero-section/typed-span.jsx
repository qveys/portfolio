"use client"

import React, { useRef, useEffect } from 'react';
import Typed from "typed.js";
import { typedStrings } from "@/utils/data/typedStrings";

const TypedSpan = React.memo(() => {
    const typedSpanElement = useRef(null);
    
    const initTypeAnimation = (typedSpanElement) => {
        return new Typed(typedSpanElement.current, {
          strings: typedStrings,
          typeSpeed: 50,
          backSpeed: 50,
          backDelay: 2000,
          loop: true,
        });
      };

    useEffect(() => {
        const typed = initTypeAnimation(typedSpanElement);
        return typed.destroy;
    }, [typedSpanElement]);

    return (
        <p>
            <span className={"seq"} ref={typedSpanElement}></span>
        </p>
    );
});

TypedSpan.displayName = 'TypedSpan';

export default TypedSpan;
