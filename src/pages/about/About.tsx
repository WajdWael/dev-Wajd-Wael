import Heading from '../../components/Heading';
import {
    Main,
    MainContent,
    SkillStyle,
    Article,
    IconsSection,
    Ocean
} from './About.styled';
import { TfiWorld } from "react-icons/tfi";
import { GiMagickTrick } from "react-icons/gi";
import { MdOutlineWeb } from "react-icons/md";
import { DocTitle } from '../../utils/DocTitle'

export default function About() {
    DocTitle('About - dev.Wajd')
    return <Main>
        <header className='container'>
            <Heading title='About' id="" />
        </header>
        <MainContent className="container">
            <div className="homepage">
                <p className="homepage__content">
                    We started from <a className="about__link" href="https://wajdwael.github.io/PortfolioWeb/" target="_blank">here</a>! This is the story of my journey of hard work, self-learning, and dedication.
                </p>
                <p className="homepage__content">
                    My name is Wajd, <strong style={{'fontWeight': 900}}>A skilled web developer</strong> with over three years of experience in coding and managing repositories on GitHub.
                </p>
                <p className="homepage__content">
                    I ran a successful front-end developer internship on June 26th, 2022. My expertise in user experience and creating user-friendly websites is unparalleled with extensive knowledge in backend development. <strong style={{'fontWeight': 900}}>I believe my skills and experience will be an asset to your team.</strong>
                </p>
            </div>
            <div className="stats">
                <a className="single__box" href="https://github.com/WajdWael">
                    <div className="text__container">
                        <span>+66</span>
                        <h5>Projects</h5>
                    </div>
                </a>
                <a className="single__box" href="https://www.linkedin.com/in/wajd-wael-345465230/recent-activity/articles/">
                    <div className="text__container">
                        <span>+11</span>
                        <h5>Articles</h5>
                    </div>
                </a>
                <a className="single__box" href="https://www.linkedin.com/in/wajd-wael-345465230/details/certifications/">
                    <div className="text__container">
                        <span>+12</span>
                        <h5>Courses</h5>
                    </div>
                </a>
            </div>
        </MainContent>
        <SkillStyle className='container'>
            <Heading title="Skills" id="Skills" />
            <div className="skills-box">
                <img src="/public/imgs-logos/react-2.svg" alt="React Logo" />
                <img src="/public/imgs-logos/styled-components-logo.png" alt="Styled-components Logo" />
                <img className="rounded" src="/public/imgs-logos/logo-javascript.svg" alt="JavaScript logo" />
                <img className="rounded" src="/public/imgs-logos/typescript.svg" alt="TypeScript logo" />
                <img className="update-width" src="/public/imgs-logos/firebase-1.svg" alt="Firebase google-database logo" />
                <img className="update-width" src="/public/imgs-logos/html-1.svg" alt="Html logo" />
                <img className="update-width" src="/public/imgs-logos/css-3.svg" alt="Css logo" />
                <img src="/public/imgs-logos/tailwindcss.svg" alt="TailwindCSS logo" />
                <img src="/public/imgs-logos/npm.svg" alt="npm logo" />
            </div>
        </SkillStyle>
        <Article>
            <div className="content container">
                <h1>How can a frontend developer benefit you?</h1>
                <p>
                A frontend developer can help you represent yourself, your company, or your institution in a professional manner. With their expertise, you can go global and reach potential customers from all over the world. Even as an individual, a frontend developer can help you create a website that showcases your skills and abilities, giving you a competitive edge in the job market. If you're looking to sell products or services online, a frontend developer can design a user-friendly interface that encourages users to make purchases or provide feedback.
                </p>
                <IconsSection>
                    {/* <Heading title="Start Your exprenci"></Heading> */}
                    <div className="icon-container">
                        <TfiWorld/>
                        <h3>Show the world.</h3>
                    </div>
                    <div className="icon-container">
                        <GiMagickTrick />
                        <h3>Represent your projects.</h3>
                    </div>
                    <div className="icon-container">
                        <MdOutlineWeb/>
                        <h3>Start your bussines</h3>
                    </div>
                </IconsSection>
                
                <h2>In summary, a frontend developer can help you with the following:</h2>
                <ul>
                    <li>Designing a user-friendly interface for your website.</li>
                    <li>Creating a portfolio website for individuals.</li>
                    <li>Developing a strong company identity.</li>
                    <li>Enhancing your website with visually appealing effects and fonts.</li>
                    <li>Ensuring that your website is responsive and accessible on all devices.</li>
                </ul>
            </div>
        </Article>
        <Ocean>
            <div className="waveOcean"></div>
            <div className="waveOcean"></div>
        </Ocean>
    </Main>
}