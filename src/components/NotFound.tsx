import { Link } from "react-router-dom"
import styled from "styled-components"

export default function NotFound() {
  return (
    <Wrapper className='wrapper'>
      <h1>404</h1>
      <h2>Not found page, You might lost the way 😂!</h2>
      <Link className="link" to='/'>Go Home</Link>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  height: 88vh;

  h1 {
    font-size: 5rem;
    color: #f9f9f9;
  }

  h2{
    font-size: 3rem;
    max-width: 585px;
    text-align: center;
  }

  .link{
    color: #4343f4;
    font-size: 2rem;
  }
`
