import Heading from "../../components/Heading";
import { DocTitle } from "../../utils/DocTitle";
import { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { projectType } from "../../utils/projectType";
import EmailForm from "../../components/EmailForm";
import { Cards, HrStyles, Skills } from "./Work.styled";

export default function Work() {
  DocTitle('Work - dev.Wajd')

  const [projects, setProjects] = useState([])
  useEffect(() => {
      fetch("/api/projects")
          .then(res => res.json())
          .then(data => setProjects(data.projects))
  }, [])

  const projectsElements = projects.map((project:projectType) => (
      <section key={project.id} className="card-container">
      <div className="box">
        <h5 className="title">{project.title}</h5>
        <div className="card-skills-list">
          {project.skills.map((skill:string) => (
            <div className="skill-child" key={skill}>{skill}</div>
          ))}
        </div>
          <div className="button-container">
            <Link to={`/work/${project.id}`} 
            className='work--btn'><FaCode/>Read More
            </Link>
          </div>
        </div>
    </section>
  ))


  return (
    <main className="wrapper container">
      <Heading title='Projects' id="Projects" />
      {projects ? (
      <Cards>
          {projectsElements}
      </Cards>
      ) : <h1>Loading ...</h1>}
      <Skills>
        <img src="/src/assets/imgs-logos/react-2.svg" alt="" />
        <img src="/src/assets/imgs-logos/styled-components-logo.png" alt="" />
        <img className="rounded" src="/src/assets/imgs-logos/logo-javascript.svg" alt="" />
        <img className="rounded" src="/src/assets/imgs-logos/typescript.svg" alt="" />
        <img className="htmlcss" src="/src/assets/imgs-logos/firebase-1.svg" alt="" />
        <img className="htmlcss" src="/src/assets/imgs-logos/html-1.svg" alt="" />
        <img className="htmlcss" src="/src/assets/imgs-logos/css-3.svg" alt="" />
        <img src="/src/assets/imgs-logos/tailwindcss.svg" alt="" />
        <img src="/src/assets/imgs-logos/npm.svg" alt="" />
      </Skills>
      <HrStyles />
      <EmailForm/>
    </main>
    )
}