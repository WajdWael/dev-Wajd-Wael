import { Link } from "react-router-dom"
import {FooterStyles, Mainfooter, CopyRightStyles} from "./Footer.styles.js"
import { SiMaildotru } from "react-icons/si";
import { ImWhatsapp } from "react-icons/im";
import { FcWorkflow } from "react-icons/fc";

export default function Footer() {
  return <Mainfooter>
    <FooterStyles>
      <section className="footer--col1">
        <h4 className="footer--header">What does a frontend dev do?</h4>
        <p className="footer--col1-body">
          Frontend developers create the look and feel of a website, ensuring it looks good, works smoothly, and is easy to navigate.
        </p>
        <Link className="link" to="/web">
          Does my business need a website?
        </Link>
      </section>
      <section className="footer--col2">
        <h4 className="footer--header mb">Navigate easily...</h4>
        <ul className="footer--col2-links">
          <Link className="box link" to='/'>Home</Link>
          <Link className="box link" to='about'>About</Link>
          {/* <Link className="box link" to='about#Skills'>Skills</Link> */}
          <a className="box link" href="about/#Skills">Skills</a>
          <Link className="box link" to='Work'>Work</Link>
          <Link className="box link" to='work#Reach'>Reach</Link>
          <Link className="box link" to='web'>Web?</Link>
        </ul>
      </section>
      <section className="footer--col3">
        <h4 className="footer--header mb">Reach out!</h4>
        <article className="footer--col3-details">
          <span className="box white">
            <SiMaildotru className="icon-size white" />
            <a className='footer--link white' href='mailto:wajdabdelhai@gmail.com?Subject=Hello World' target='_top'>wajdabdelhai@gmail.com</a>
          </span>
          <span className="green-ws box">
            <ImWhatsapp className="icon-size" />
            <a href="https://wa.me/966530245376?text=Hello 👋, How can i help you?" target="_blank" className="footer--link green-ws">
              Send a Message
            </a>
          </span>
          <span className="yellow-contact box">
            <FcWorkflow className="icon-size" />
            <Link className="footer--link yellow-contact" to='work'>Let's work togather</Link>
          </span>
        </article>
      </section>
    </FooterStyles>
    <CopyRightStyles>
      &#169; All rights are reserved. <br/>
      developed, designed, and content managed by Wajd Wael.
    </CopyRightStyles>
  </Mainfooter>
}