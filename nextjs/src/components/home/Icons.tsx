"use client"

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
	Rust
} from "@/components/global/LangIcon"
import { getRandomOpacity } from "@/utils/randomizer";


const Icons = () => {
	return <div className="w-full h-full absolute top-0 left-0 pointer-events-none">
		<Html style={`opacity-${getRandomOpacity()}`}/>
		<Bash style={`opacity-${getRandomOpacity()}`} />
		<BashM style={`opacity-${getRandomOpacity()}`} />
		<Css style={`opacity-${getRandomOpacity()}`} />
		<Golang style={`opacity-${getRandomOpacity()}`} />
		<Html style={`opacity-${getRandomOpacity()}`} />
		<Java style={`opacity-${getRandomOpacity()}`} />
		<Js style={`opacity-${getRandomOpacity()}`} />
		<Kotlin style={`opacity-${getRandomOpacity()}`} />
		<Python style={`opacity-${getRandomOpacity()}`} />
		<Rails style={`opacity-${getRandomOpacity()}`} />
		<ReactIcon style={`opacity-${getRandomOpacity()}`} />
		<Ruby style={`opacity-${getRandomOpacity()}`} />
		<Rust style={`opacity-${getRandomOpacity()}`} />
	</div>
}

export default Icons;
