import styled from 'styled-components';

const ImageStyles = styled.img`
    border-radius: 2rem;
    margin: 2rem auto;
    box-shadow: 0 20px 30px -6px rgb(37 37 37 / 50%);
    display: flex;
    width: 100%;
    height: 673px;
    object-fit: cover
`
const MainContent = styled.section`
    .m-0{
        margin: 0;
        p {
        @media (max-width: 568px) {
            font-size: 1rem;
        }
        }
    }
`
const ButtonsReadmore = styled.section`
    margin: 3rem 0;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        padding: 0.5rem 1.5rem;
        color: #aeaeae;
        border-radius: 1rem;
        transition: .3s;
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: 700;
        background: #212127;
        box-shadow: 0 20px 30px -6px rgb(37 37 37 / 50%);

        &:hover{
            color: #ddd;
        }
    }
`
const SectionLogo = styled.section`
    color: #d4d4d4;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem 0;
    flex-direction: column;
    position: relative;

    .line{
        border: 1px solid #3e3e3e;
        border-radius: 9rem;
        width: 100%;
        position: absolute;
        z-index: -9;
        top: 40px;
    }
    img{
        width: 5.5rem;
    }
    .content{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h5 {
            font-weight: 500;
        }
    }
`
const SectionArticles = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0 5rem 0;

    .articles-card{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2.5rem;

        .single-card{
            display: flex;
            max-width: 350px;
            align-items: center;
            gap: 1rem;
            color: #ddd;
            text-decoration: none;
            border-radius: 1rem;
            padding-right: 1rem;
            border: 1px solid #ffffff22;
            background: linear-gradient(0deg, rgba(40,44,52,1) 0%, rgba(17,0,32,.5) 100%);
            backdrop-filter: blur(7px);
            overflow: hidden;
            transition: .5s all;
            box-shadow: 1px 3px 13px 3px #00000088;
            img{
                width: 6rem;
                height: 5rem;
                object-fit: cover;
                border-radius: 1rem;
            }
            h4{
                font-weight: 400;
                font-size: 1.3rem;
            }
            &:before{
                position: fixed;
                content: "";
                box-shadow: 0 0 100px 40px #ffffff08;
                top: -10%;
                left: -100%;
                transform: rotate(-45deg);
                height: 60rem;
                transition: .7s all;
            }

            &:hover{
                border: 1px solid #ffffff44;
                box-shadow: 0 7px 50px 10px #000000aa;
                transform: scale(1.015);
                filter: brightness(1.3);
                &:before{
                    filter: brightness(.5);
                    top: -100%;
                    left: 200%;
                }
            }
        }
    }
`
const SectionArticlesButtons = styled.section`
    position: fixed;
    bottom: 50%;
    top: 0;
    right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 43px;
    gap: 1rem;
    height: 100%;
    z-index: 9999;

    .single-btn-link{
        transition: .3s;
        color: #e4e4e4;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 20px 30px -6px rgb(37 37 37 / 50%);
        transition: 0.3s;
        &:hover{
            box-shadow: 0 7px 50px 10px #000000aa;
            transform: scale(1.015);
        }
    }
    .linkedin {
        background-color: #0077b5;
    }
    .github {
        background-color: #171515;
    }
` 

export {
    ImageStyles,
    MainContent,
    ButtonsReadmore,
    SectionLogo,
    SectionArticles,
    SectionArticlesButtons
};