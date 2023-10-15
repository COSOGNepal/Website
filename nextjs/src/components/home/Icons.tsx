"use client";

import React from "react";

import {
  Html,
  Bash,
  BashM,
  Css,
  Golang,
  Java,
  Js,
  Kotlin,
  Python,
  Rails,
  ReactIcon,
  Ruby,
  Rust,
} from "@/components/global/LangIcon";
import { getRandomOpacity } from "@/utils/randomizer";

const Icons = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0 pointer-events-none -z-5 overflow-hidden">
      <div className="relative w-full h-full  pointer-events-none ">
        <Html
          style={`opacity-${getRandomOpacity()} absolute animate-move-random-1`}
        />
        <Bash
          style={`opacity-${getRandomOpacity()} absolute animate-move-random-2`}
        />
        <BashM
          style={`opacity-${getRandomOpacity()} absolute animate-move-random-3`}
        />
        <Css
          style={`opacity-${getRandomOpacity()} absolute animate-move-random-4`}
        />
        <Golang
          style={`opacity-${getRandomOpacity()} absolute animate-move-random-5`}
        />
        <Html
          style={`opacity-${getRandomOpacity()} absolute animate-move-random-6`}
        />
        <Java
          style={`opacity-${getRandomOpacity()} absolute animate-move-random-7`}
        />
        <Js
          style={`opacity-${getRandomOpacity()} absolute animate-move-random-8`}
        />
        <Kotlin
          style={`opacity-${getRandomOpacity()} absolute animate-move-random-9`}
        />
        <Python
          style={`opacity-${getRandomOpacity()} absolute animate-move-random-10`}
        />
        <Rails
          style={`opacity-${getRandomOpacity()} absolute animate-move-random-11`}
        />
        <ReactIcon
          style={`opacity-${getRandomOpacity()} absolute animate-move-random-12`}
        />
        <Ruby
          style={`opacity-${getRandomOpacity()} absolute animate-move-random-13`}
        />
        <Rust
          style={`opacity-${getRandomOpacity()} absolute animate-move-random-14`}
        />
      </div>
    </div>
  );
};

export default Icons;
