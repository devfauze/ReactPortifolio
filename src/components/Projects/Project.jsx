import { FaGithub } from "react-icons/fa";

/* eslint-disable react/prop-types */
export default function Project(props){
    return(
        
        <section className="bg-[#fff] w-10/12 rounded-lg hover:scale-95 duration-300 max-[425px]:mx-10 m-5">

            <div className="flex max-[425px]:justify-center max-[425px]:items-center max-[425px]:flex-col my-10 mx-10 max-[425px]:my-10 max-[425px]:mx-0">
                <img className="rounded-full h-1/4 w-1/4 hover:scale-105 duration-200 max-[425px]:h-3/4 max-[425px]:w-3/4 " src={props.image} alt="project image"/>
                
                <div className="flex flex-col mx-16">
                    <p className="text-black font-bold text-xl max-[425px]:mt-10">{props.nameProject}</p>
                    <p className="text-black font-light text-xl">{props.desc}</p>
                    <p className="text-black font-normal text-xl mt-20">{props.tools}</p>
                    <a className="text-black mt-20" href={props.link} target="blank">

                    <a href="https://github.com/devfauze" target="blank">
                        <FaGithub className="h-7 w-7 mx-2 my-5 hover:text-zinc-600 hover:scale-125 duration-200"/>
                    </a>

                    </a>
                </div>

            </div>

        </section>

    )
}