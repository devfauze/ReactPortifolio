/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiBulma } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import {Tooltip} from 'react-tooltip';

export default function Badges(){
    return(
        <div className="flex flex-wrap justify-center mt-10">
             
            <a data-tooltip-id="my-tooltip" data-tooltip-content="Javascript">
                <RiJavascriptFill className="h-14 w-14 mx-2 hover:text-yellow-200 hover:scale-125 duration-200"/>
            </a>
            <a data-tooltip-id="my-tooltip" data-tooltip-content="Typescript">
            <BiLogoTypescript className="h-14 w-14 mx-2 hover:text-blue-400 hover:scale-125 duration-200"/>
            </a>
            <a data-tooltip-id="my-tooltip" data-tooltip-content="NodeJS">
             <FaNode className="h-14 w-14 mx-2 hover:text-green-600 hover:scale-125 duration-200"/>
            </a>
            
            <a data-tooltip-id="my-tooltip" data-tooltip-content="React">
             <FaReact className="h-14 w-14 mx-2 hover:text-cyan-400 hover:scale-125 duration-200"/>
            </a>
            
            <a data-tooltip-id="my-tooltip" data-tooltip-content="TailwindCSS">
             <SiTailwindcss className="h-14 w-14 mx-2 hover:text-cyan-300 hover:scale-125 duration-200"/>
            </a>
            
            <a data-tooltip-id="my-tooltip" data-tooltip-content="Bootstrap">
             <FaBootstrap className="h-14 w-14 mx-2 hover:text-purple-700 hover:scale-125 duration-200"/>
            </a>
            
            <a data-tooltip-id="my-tooltip" data-tooltip-content="Bulma">
             <SiBulma className="h-14 w-14 mx-2 hover:text-green-200 hover:scale-125 duration-200"/>
            </a>
            
            <a data-tooltip-id="my-tooltip" data-tooltip-content="Figma">
             <FaFigma className="h-14 w-14 mx-2 hover:text-rose-400 hover:scale-125 duration-200"/>
            </a>
            
            <a data-tooltip-id="my-tooltip" data-tooltip-content="MongoDB">
             <DiMongodb className="h-14 w-14 mx-2 hover:text-green-500 hover:scale-125 duration-200"/>
            </a>
            
            <a data-tooltip-id="my-tooltip" data-tooltip-content="MySQL">
             <SiMysql className="h-14 w-14 mx-2 hover:text-blue-500 hover:scale-125 duration-200"/>
            </a>
            <Tooltip id="my-tooltip"/>
        </div>
    )
}