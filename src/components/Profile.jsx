/* eslint-disable react/prop-types */
{/*Importações*/}
import Name from "./Presentation/Name";
import Badges from "./Badges/Bagdes";
import Connect from "./Presentation/Connect";
import Project from "./Projects/Project";
import { FaArrowDown } from "react-icons/fa";


export default function Profile(props){
    return(
        <section className="grow flex flex-col">

            {/* [✅]Nome, area e foto */}
            <div className="flex justify-center items-center h-screen max-md:flex-col-reverse md:justify-center md:items-center">
                
                {/*Nome*/}
                <div className="bg-[#0D0D0D] flex flex-col h-screen justify-center items-center flex-1 p-10 max-[768px]:w-screen  hover: hover:scale-110 duration-200">
                    <Name />                
                    <Connect /> 
                    <FaArrowDown 
                    className="animate-bounce mt-24"
                    />
                </div>

                {/*Foto perfil*/}
                <div className="bg-[#191919] flex justify-center items-center h-screen flex-1 w-full ">
                    <img className="h-2/6 max-[425px]:h-4/6 hover: hover:scale-110 duration-200" src={props.avatar} alt="profile pic" />
                </div>

            </div>

            {/* [✅]Bio, Conecte-se, projetos */}
            <div className="flex flex-col justify-center items-center h-screen">

                {/*Bio*/}
                <div className="mt-5 mx-3">
                    <p className="text-2xl text-center font-normal mx-10 max-[425px]:text-lg">
                        {props.bio}
                    </p>
                </div>

                {/*Ferramentas*/}
                <div className="flex flex-row mt-10 ">
                    <Badges/>
                </div>
            </div>

            <div className="flex flex-col items-center h-screen">
                {/*Projetos*/}
                <div className="flex flex-col justify-center items-center">
                    <p className="text-xl font-bold my-5">Projetos</p>
                    <Project
                    image= "https://github.com/devfauze/ReactPortifolio/assets/97612275/a5d693de-9eca-40f3-a34d-e8b15150f5dd"
                    nameProject= "Calc.js"
                    desc= {`Calculadora simples, projeto desenvolvido com o intuito de treinar os aprendizados de DOM (Document Object Model) para fazer manipulações para interagir e fazer cálculos.`}
                    tools= "HTML-CSS-Javascript"
                    link= "https://calc-js-six.vercel.app/"
                    />

                    <Project
                    image= "https://github.com/devfauze/ReactPortifolio/assets/97612275/36062a7d-c025-4c36-957c-16e1d702a8e7"
                    nameProject= "Auth com Node"
                    desc= {`Projeto de autenticação com token em JWT, desenvolvido cadastro de usuário com criptografia de senha e adição de hash, login e validação com check de token para liberar rota privada, mongoDB para armazenamento dos cadastros e testes pelo Insomnia.`}
                    tools= "JAVASCRIPT-NODE-EXPRESS-MONGOOSE-BCRYPT-JWT"
                    link= "https://github.com/devfauze/authNode"
                    />

                    <Project
                    image= "https://github.com/devfauze/ReactPortifolio/assets/97612275/1caf2fa6-726d-4e78-a694-32e7a2ea7d3a"
                    nameProject= "API RESTful"
                    desc= {`API RESTful desenvolvida como CRUD (Create, Read, Update e Delete), utilizando metodos os GET, POST, PATCH & DELETE, mongoDB para armazenamento de dados e testes pelo Insomnia.`}
                    tools= "JAVASCRIPT-EXPRESS-MONGOOSE"
                    link= "https://github.com/devfauze/API-RESTful"
                    />

                    <Project
                    image= "https://github.com/devfauze/ReactPortifolio/assets/97612275/e97b3d4d-c360-4a2b-b72a-2233e18d5ffb"
                    nameProject= "whatIs.Project"
                    desc= {`Dizem que a melhor maneira de aprender é ensinar, encontro também prazer em ensinar o que sei, o whatIs é um projeto onde vou disponibilizar tudo que sei no mundo de programação de maneira simples e escrita, de forma gratuita também para quem quiser aprender sobre.`}
                    tools= "GITHUB"
                    link= ""
                    />
                </div>
            </div>
            
        </section>
    )
}