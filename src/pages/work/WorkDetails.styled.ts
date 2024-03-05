import styled from "styled-components";
export const WorkDetail = styled.section`
  margin: 3rem 0;

  h2{
    font-size: 38px;
    font-family: 'Viga', sans-serif;
    color: #00ddeb;

    @media (max-width: 460px) {
      font-size: 30px;
    }
  }

  img{
    width: 100%;
    border-radius: 2rem;
    margin: 2rem auto;
    box-shadow: 0 20px 30px -6px rgb(37 37 37 / 50%);
    display: flex;
    object-fit: cover;
  }
  ul{
    list-style: none;
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-wrap: wrap;
    margin: 1rem;
    margin-bottom: 5rem;

    li{
      box-shadow: 0 20px 30px -6px rgb(37 37 37 / 50%);
      font-size: 22px;
      font-weight: 600;
      background: #353541;
      padding: 1rem;
      color: #f1f1f1;
      border-radius: 1rem;

      @media (max-width: 460px) {
        font-size: 18px;
      }
    }
  }
  .details{
    p{
      font-size: 1.5rem;
      color: #d5d5d5;
      font-weight: 600; 
      line-height: 1.5;
      margin: 1rem 0;
      @media (max-width: 460px) {
        font-size: 18px;
      }
    }
    a{
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;

      span{
        display: flex;
        width: 100%;
        justify-content: end;
        align-items: end;
        font-size: 19px;
        color: #00ddeb;
        text-decoration: none;
        font-weight: 400;
        letter-spacing: 1px;
        padding: 1rem;
      }
    }
  }
  .buttons{
    display: flex;
    gap: 1rem;
    margin: 2rem;

    .work-btn{
      text-decoration: none;
      box-shadow: 0 20px 30px -6px rgb(37 37 37 / 50%);
      font-size: 22px;
      font-weight: 600;
      background: #212127;
      padding: 1rem;
      color: #f1f1f1;
      border-radius: 1rem;

      @media (max-width: 460px) {
        font-size: 18px;
      }
    }
  }
`
export const WorkBtn = styled.section`
  display: flex;
  justify-content: start;
  margin-top: 3rem;

  .btn{
    text-decoration: none;
    box-shadow: 0 20px 30px -6px rgb(37 37 37 / 50%);
    font-size: 22px;
    font-weight: 600;
    padding: 1rem;
    color: #f1f1f1;
    background: #353541;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  
    @media (max-width: 460px) {
      font-size: 18px;
    }
  }
`