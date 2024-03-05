 import styled from "styled-components"

export const HomeStyles = styled.main`
  height: fit-content;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  padding: 2rem;
  margin-bottom: 1rem;
  /* position: relative; */



  @media (max-width: 768px) {
    padding: 1rem;
    height: fit-content;
  }

  .e-card {
    height: 100%;
    width: 100%;
    background: transparent;
    overflow: hidden;
    display: flex;
    align-items: center;
  }

  .wave {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    left: 0;
    top: 0;
    
    margin-left: -23%;
      margin-top: -58%;
    background: linear-gradient(744deg,#af40ff,#5b42f3 60%, #00ddeb);
    z-index: -5;
    
    @media (max-width: 568px) {
      margin-left: -32%;
      width: 475px;
      height: 477px;
    }
  
    @media (min-width: 958px) {
      margin-left: -23%;
      margin-top: -58%;
      height: 1000px;
    }
  }

  /* .icon { */
    /* width: 3em; */
    /* margin-top: -1em; */
    /* padding-bottom: 1em; */
  /* } */

  .infotop {
    text-align: center;
    font-size: 20px;
    color: rgb(255, 255, 255);
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 0 3rem;

    h2{
      font-size: 2rem;
    }
    @media (max-width: 768px) {
      padding: 1rem;
      top: 5.25rem;
    }
  }

  .name {
    font-size: 14px;
    font-weight: 100;
    position: relative;
    top: 1em;
    text-transform: lowercase;
  }

  .wave:nth-child(2),
  .wave:nth-child(3) {
    top: 210px;
  }

  .playing .wave {
    border-radius: 40%;
    animation: wave 3000ms infinite linear;
  }

  .wave {
    border-radius: 40%;
    animation: wave 55s infinite linear;
  }

  .playing .wave:nth-child(2) {
    animation-duration: 4000ms;
  }

  .wave:nth-child(2) {
    animation-duration: 50s;
  }

  .playing .wave:nth-child(3) {
    animation-duration: 5000ms;
  }

  .wave:nth-child(3) {
    animation-duration: 45s;
  }

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }


/* Text styles */
  .home--header {
    font-family: 'Viga',sans-serif;
    font-size: 6rem;
    margin-top: 3rem;
    color: #f9f9f9;

    .dot{
      margin-left: 10px;
      color: #1c1c25;
    }

    @media (max-width: 768px) {
      font-size: 4rem;
    }
  }
  .home--body {
    margin: 3rem 0;
    font-size: 2.5rem;
    color: #dedede;
    text-align: start;

    @media (max-width: 768px) {
      font-size: 26px;
      text-align: center;
    }
    @media (max-width: 468px) {
      font-size: 20px;
    }
  }
  .buttons{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media (max-width: 768px) {
      flex-wrap: wrap-reverse;
    }
  }
`