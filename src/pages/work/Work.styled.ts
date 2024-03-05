import styled from "styled-components";
export const SkillsHeader = styled.h4`
  text-align: center;
  font-size: 6rem;
  opacity: 0.3;
  letter-spacing: 9px;
`
export const Skills = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    
  img{
    width: 103px;
    object-fit: contain;
    filter: grayscale(1);
  }
  .htmlcss{
    width: 80px;
    margin-top: 10px;
  }
  .rounded{
    border-radius: 50%;
  }
`
export const HrStyles = styled.hr`
/* position: absolute; */
    width: 100%;
    right: 0;
    /* padding-top: 9rem; */
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-color: #585858;
`
export const Cards = styled.section`
  padding: 1rem 0;
  margin-bottom: 4rem;
  display: flex;
  gap: 1rem;
  overflow: scroll;
  overflow-y: hidden;

  .card-container {
    position: relative;
    cursor: pointer;

    &::before, &::after {
      content: "";
      background-color: #00ddeb3b;
      position: absolute;
    }
    &::before {
      border-radius: 50%;
      width: 4rem;
      height: 4rem;
      top: 30%;
      right: 7%;
    }
    &::after {
      content: "";
      position: absolute;
      height: 3rem;
      top: 8%;
      right: 5%;
      border: 1px solid;
    }
    .box {
      width: 20rem;
      height: 12rem;
      padding: 0.75rem;
      background-color: rgba(255, 255, 255, 0.074);
      border: 1px solid rgba(255, 255, 255, 0.222);
      backdrop-filter: blur(20px);
      border-radius: 0.7rem;
      transition: all ease 0.3s;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .title {
        font-size: 22px;
        font-weight: 500;
        color: #f6eeee;
      }

      .card-skills-list{
        margin: 1rem 0;
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        .skill-child{
          font-size: 13px;
          background: #28e6fb;
          padding: 0.25rem;
          border-radius: 4px;
          font-weight: 800;
          color: #232329;
        }
      }
      }
      .button-container{
        display: flex;
        width: 100%;
        text-decoration: none;
        align-items: center;

        .work--btn{
          text-decoration: none;
          font-size: 1rem;
          background: #232329;
          color: #eee;
          border: 0;
          padding: 0.75rem;
          border-radius: 1rem;
          display: flex;
          justify-content: center;
          gap: 4.2px;
          cursor: pointer;
        }
    }
  }
`
