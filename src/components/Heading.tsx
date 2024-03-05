import styled from 'styled-components'

export default function Heading({title, id}:{title:string, id:string}) {
  return <HeadingStyles>
    <a href={`#${id}`} id={id} className='heading'>{title}</a>
  </HeadingStyles>
}

const HeadingStyles = styled.header`
  .heading{
    font-size: 48px;
    font-family: 'Viga',sans-serif;
    color: #00ddeb;
    text-decoration: none;
    @media (min-width: 768px){
      font-size: 60px;
    }
  }
`

