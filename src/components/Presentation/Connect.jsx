import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";

export default function Connect(){
    return(
        <section className="flex flex-row">
        <a href="https://linkedin.com/in/devfauze"
            target="blank"
        >
            <FaLinkedinIn className="h-7 w-7 mx-2 my-5 hover:text-blue-400 hover:scale-125 duration-200"/>
        </a>

        <a href="https://github.com/devfauze"
            target="blank"
            >
            <FaGithub className="h-7 w-7 mx-2 my-5 hover:text-zinc-600 hover:scale-125 duration-200"/>
        </a>

        
        <a href="https://github.com/devfauze/ReactPortifolio/files/14288616/cv.pdf" download>
            <FaFileDownload className="h-7 w-7 mx-2 my-5 hover:text-red-400 hover:scale-125 duration-200"/>
        </a>
        </section>
        )
}