import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { projectType } from "../../utils/projectType"
import Heading from "../../components/Heading"
import { FaGithub } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";
import { WorkBtn, WorkDetail } from './WorkDetails.styled'

export default function WorkDetails() {
  const params = useParams();
  const [project, setProject] = useState<projectType | null>(null);

  useEffect(() => {
    fetch(`/api/projects/${params.id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProject(data.project);
      })
      .catch(error => {
        console.log(error);
      });
  }, [params.id]);
  return (
    <div className="container">
      <WorkBtn>
        <Link className="btn" to="/work">
          <FaBackward />
        </Link>
      </WorkBtn>
      {project ? (
        <WorkDetail className="van-detail">
          <Heading title={project.title} id="Projects" />
          <img src={project.image} alt={project.title} />
          <div className="details">
            <h2>Description</h2>
            <p>{project.description}</p>
            <a href={project.readmore}>
              <span>Read More</span>
            </a>
          </div>

          <h2>Skills</h2>
          <ul>
            {project.skills && project.skills.map((skill: string) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>

          <h2>Reach</h2>
          <div className="buttons">
            <a className="work-btn" href={project.repoLink}>
              <FaGithub /> GitHub Repo
            </a>
            <a className="work-btn" href={project.demoLink}>
              🌐 Show website
            </a>
          </div>
        </WorkDetail>
      ) : (
        <h1>Loading ...</h1>
      )}
    </div>
  );
}

