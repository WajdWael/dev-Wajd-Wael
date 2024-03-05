import styled from 'styled-components';

const Main = styled.main`
    overflow:hidden;
    position: relative;
    
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.7;
    color: #dadada;

    @media (max-width: 468px) {
        li, p{
            font-size: 1rem;
        }
        h2{
            font-size: 1.5rem;
        }
        h5{
            font-size: 1.25rem;
        }
    }
`
const MainContent = styled.section`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6rem;
    margin-bottom: 5rem;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
        gap: 1rem;
        margin-top: 2rem;
    }

    .homepage{
        color: #ddd;
        .homepage__content{
            margin-bottom: 1.25rem;
            @media (max-width: 768px) {
                text-align: center;
            }
            .about__link{
                color: #f3faff;
                padding: 0 7px;
                text-transform: uppercase;
            }
        }
    }
    .stats{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        .single__box{
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            text-decoration: none;
            color: #ddd;
            border-radius: 50%;
            /* background: #2c2c33; */
            &:nth-child(1) {
                background: #1b1b24;
                }
                &:nth-child(2) {
                background: #1f1f29;
                }
                &:nth-child(3) {
                background: #22222e;
                }

            .text__container{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                padding: 2rem;
                font-size: 1.5rem;

                h5{
                    color: #00ddeb;
                }

            }
        }
    }
`
const SkillStyle = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    .skills-box{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.75rem;
        filter: grayscale(1);
        flex-wrap: wrap;
        padding: 1rem;
        img{
            width: 100px
        }
        .rounded{
            border-radius: 50%;
        }
        .update-width{
            width: 80px;
        }
    }
`
const Article = styled.section`
    margin: 7rem 0;
    color: #ddd;
    font-size: 1.35rem;
    line-height: 1.8;
    
    h1{
        font-size: 2.75rem;
        color: #00ddeb;
        margin-bottom: 0.5rem;
        @media (max-width: 468px) {
            font-size: 1.75rem;
        }
    }
    h2{
        /* font-size: 1.75rem; */
        color: #00ddeb;
        margin: 5rem 0 1rem 0;
    }
    ul{
        margin-left: 3rem;
        @media (max-width: 468px){
            margin: 1rem;
        }
    }
`
const IconsSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 4rem;
    flex-wrap: wrap;

    .icon-container{
        padding: 1rem 0.5rem;
        max-width: 180px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        line-height: 1;
        gap: 1rem;
        text-align: center;
        background: #212127;
        border-radius: 1rem;
        background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
        color: #313030;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        svg{
            font-size: 2.75rem;
            color: #fcfcfc;
        }
        h3{
            color: #212127;
        }
    }
`
const Ocean = styled.section` 
  height: 5%;
  width:100%;
  position:absolute;
  /* top: 549px; */
  bottom: 10px;
  left:0;
  background: #015871;
  z-index: -99;
  // @media (max-width: 768px) 

  .waveOcean {
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg) repeat-x; 
    position: absolute;
    top: -198px;
    width: 6400px;
    height: 198px;
    animation: waveOcean 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);
    &:nth-of-type(2) {
      top: -175px;
      animation: waveOcean 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
      opacity: 1;
    }
  }


  @keyframes waveOcean {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  }

  @keyframes swell {
    0%, 100% {
      transform: translate3d(0,-25px,0);
    }
    50% {
      transform: translate3d(0,5px,0);
    }
  }
`
export {
    Main,
    MainContent,
    SkillStyle,
    Article,
    IconsSection,
    Ocean
}