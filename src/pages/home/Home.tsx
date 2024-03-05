import { Link } from 'react-router-dom'
import {HomeStyles} from './Home.styled'
import { DocTitle } from '../../utils/DocTitle'

export default function Home() {
  DocTitle('Home - dev.Wajd')
  return <HomeStyles>
    <div className="e-card playing">
      <div className="image"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>

      <div className="infotop">
        <h2>I'm Wajd Wael 👩‍💻</h2>
        <h1 className='home--header'>Frontend dev
        <span className='dot'>.</span>
        </h1>
        <p className='home--body'>
          Unleash your potential. Start a new business, Unravel your ideas, and Reach the world.
        </p>
        <div className="buttons">
          <Link to='web' className="box btn">Start</Link>
          <a href='/assets/dev-wajd-wael-cv.pdf' download="CV" className="box btn">Download CV</a>
        </div>
      </div>
    </div>
  </HomeStyles>
}
