import Profile from "./components/Profile";


export default function App(){
  return(
      <main className="flex flex-col h-screen">
        <Profile 
          avatar = "https://github.com/devfauze/ReactPortifolio/assets/97612275/d22d97e1-83c6-4301-b20d-f9f2b37403e0"
          name = "/devfauze"
          role = "Front-End React Developer 👋🏻"
          bio = {`Desenvolvedor apaixonado por tecnologia, resolução criativa de problemas e aprendizado contínuo, buscando oportunidades para contribuir em projetos desafiadores neste vasto mercado. 📍 São Paulo, Brasil.`}
          email= "fauze@gmail.com"
          phone = "99999999"
          githubUrl = "https://github.com/devfauze"
          linkedInUrl = "https://www.linkedin.com/in/fauze-cavalari/"
          twitterUrl = "httpstwitter.com"
        />
      </main>

  )
}