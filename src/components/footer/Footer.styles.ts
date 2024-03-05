import styled from "styled-components"

export const Mainfooter = styled.footer`
  border-top: 1px solid rgb(70 70 70 / 39%);
`

export const FooterStyles = styled.section`
  display: flex;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
  }

  .footer--header{
    font-size: 1.5rem;
    color: #eeeeee;
  }
  .footer--col1{
    width: 33%;
    @media (max-width: 768px) {
      width: 100%;
    }
    .footer--col1-body{
      font-size: .93rem;
      color: #cecece;
      margin: 1rem 0;
    }
  }

  .footer--col2{
    width: 33%;
    border-style: solid;
    border-color: rgb(70 70 70 / 39%);
    border-radius: 2px;
    @media (max-width: 768px) {
      width: 100%; 
      border-right: 1px;
      border-left: 1px;
      padding: 3rem 0;
    }
    @media (min-width: 768px) {
      padding: 0 3rem;
      border-bottom: 1px;
      border-top: 1px;
    }

    .footer--col2-links{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
  }
  
  .footer--col3{
    width: 33%;
    @media (max-width: 768px) {
      width: 100%;
    }
    .footer--link{
      color: #cecece;
      text-decoration: none;
    }
    .footer--col3-details{
      display: flex;
      justify-content: start;
      align-items: start;
      gap: 0.5rem;
      flex-wrap: wrap;

      .footer--col3-details-header{
        font: 100;
      }
      .box{
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }
      .green-ws{
        color: #25D366;
      }
      .yellow-contact{
        color: #7cb7e5;
      }
      .white{
        color: white;
      }
    }
  }
`

export const CopyRightStyles = styled.section`
  border-top: 1px solid rgb(70 70 70 / 39%);
  border-radius: 2px;
  padding: 1.25rem;
  display: flex;
  justify-content: center;
  color: #cecece;
`