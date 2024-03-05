import {
  ImageStyles,
  MainContent,
  ButtonsReadmore,
  SectionLogo,
  SectionArticles,
  SectionArticlesButtons
} from './Blog.styled';
import Heading from "../../components/Heading";
import { DocTitle } from "../../utils/DocTitle";
import { Article } from "../about/About.styled";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function Blog() {
  DocTitle('Web? - dev.Wajd')
  return (
    <main className="wrapper container">
      <Heading title='Web?' id="Blog"/>
      <ImageStyles src="/assets/imgs-logos/chess.jpg" alt="Chess" />
      <MainContent>
        <Article className="m-0">
          <h1>Is owning a website a desire or a need?</h1>
          <p>
            According to recent studies, around 84% of consumers believe that having a website makes a business more trustworthy and credible, rather than bussiness that have just or only social media plateformes.
          </p>
          <br/>

          <p>
            A website provides an excellent opportunity to create a positive first impression and assure people that your business is legitimate
          </p>
          <br />
          
          <p>
            On the other hand, without a website, your business is practically invisible to these potential customers. In The era of technology, the importance of having a website cannot be overstated.
          </p>
          <br/>

          <p>
            In the absence of a website, your business may become invisible to people interset in website and application, which highlights the critical need to invest in a website for your business.
          </p>
          <br/>
          
          <p>
            Having a website for your business is not just a luxury, it is a necessity. A website can help you reach a greater range of customers and interested parties, showcase your products or services, and establish credibility in your industry. If you were off-line, you're missing out on potential customers who are looking for your services like yours. Don't wait any longer to create a website for your business it could be the key to unlocking your true potential!
          </p>
        </Article>
      </MainContent>
      <ButtonsReadmore>
        <Link to='/about'>Read More</Link>
      </ButtonsReadmore>
      <SectionLogo>
        <div className="line"></div>
        <img src="/assets/3.png" alt="logo" />
        <div className="content">
          <h3>Wajd Wael</h3>
          <h5>Front-end developer</h5>
        </div>
      </SectionLogo>
      <Heading title="Find more topics" id="artilces" />
      <SectionArticlesButtons>
          <a href="https://www.linkedin.com/in/wajd-wael-345465230/ " className="single-btn-link linkedin">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/WajdWael" className="single-btn-link github">
            <FaGithub />
          </a>
      </SectionArticlesButtons>
      <SectionArticles>
        <article>
          <div className="articles-card">
            <a href="https://www.linkedin.com/pulse/how-have-successful-communication-wajd-wael-mmagf/?trackingId=7g4UFJbnTC%2Bbmr10pAtC5g%3D%3D" className="single-card">
              <img src="https://media.licdn.com/dms/image/D4D12AQH4T64ZdpfPbw/article-cover_image-shrink_720_1280/0/1708013572786?e=1714003200&v=beta&t=K06PG9n_y2DrQQZM-uCPcQtIm19iALlvLV8Srr4LIE4" alt="" />
              <h4>How to have successful communication?</h4>
            </a>
            <a href="https://www.linkedin.com/pulse/while-without-coding-what-do-wajd-wael-zrlnf/?trackingId=7g4UFJbnTC%2Bbmr10pAtC5g%3D%3D" className="single-card">
              <img src="https://media.licdn.com/dms/image/D4D12AQF21rqnGo5gxA/article-cover_image-shrink_720_1280/0/1708240861592?e=1714003200&v=beta&t=940QFO8b9NyJzX1zv9rv-0U1PA5Wn7roFQ_ZTnDOnhY" alt="" />
              <h4>Tips to stop struggling with coding</h4>
            </a>
            <a href="https://www.linkedin.com/pulse/what-react-components-wajd-wael-gv0xf/?trackingId=7g4UFJbnTC%2Bbmr10pAtC5g%3D%3D" className="single-card">
              <img src="https://media.licdn.com/dms/image/D4D12AQFOp-NQyjNhJQ/article-cover_image-shrink_720_1280/0/1703414261179?e=1714003200&v=beta&t=3hfun17detpcNpjCHvbG-PR50P11mmZnrUMSDdgVf1E" alt="" />
              <h4>What Are React Components?</h4>
            </a>
            <a href="https://www.linkedin.com/pulse/what-styled-components-wajd-wael-b9ouf/" className="single-card">
              <img src="https://media.licdn.com/dms/image/D4D12AQHQ9NwjKA_4bw/article-cover_image-shrink_720_1280/0/1709628546468?e=1715212800&v=beta&t=f1N_y2LyhbXtABXd_DgpKeTTr1bgLLc15KIZevIVAzk" alt="" />
              <h4>How to get inputs from the user? Using Java.</h4>
            </a>
            <a href="https://www.linkedin.com/pulse/how-does-internet-work-wajd-wael-sya5f/?trackingId=7g4UFJbnTC%2Bbmr10pAtC5g%3D%3D" className="single-card">
              <img src="https://media.licdn.com/dms/image/D4D12AQEZ4UZp4SUbDQ/article-cover_image-shrink_423_752/0/1705092690665?e=1714003200&v=beta&t=q03CyyU1QvZ7xSZaZQA5hMyIeU9vk9irRWjzx12yJXM" alt="" />
              <h4>How does the Internet work? 🌐</h4>
            </a>
          </div>
        </article>
      </SectionArticles>
    </main>
  )
}