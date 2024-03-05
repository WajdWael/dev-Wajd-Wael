import { styled } from "styled-components"

function Waves() {
    return <WaveContainer className="playing">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
        </WaveContainer>
}


const WaveContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    left: 0;
    top: 0;
    margin-left: -23%;
    margin-top: -58%;
    background: linear-gradient(744deg,#af40ff,#5b42f3 60%,#00ddeb);
    z-index: -5;

    @media (max-width: 568px) {
        margin-left: -32%;
        width: 315px;
        height: 450px;
    }

    @media (min-width: 958px) {
        margin-left: -23%;
        margin-top: -58%;
        height: 1000px;
    }
    .playing .wave {
        border-radius: 40%;
        animation: waveanimation 3000ms infinite linear;
    }

    .icon {
        width: 3em;
        margin-top: -1em;
        padding-bottom: 1em;
    }

    .infotop {
        text-align: center;
        font-size: 20px;
        color: rgb(255, 255, 255);
        font-weight: 600;
        display: flex;
        flex-direction: column;
        align-items: start;
        padding: 0 3rem;

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

    &:nth-child(2),
    &:nth-child(3) {
        top: 210px;
    }

    .wave {
        border-radius: 40%;
        animation: waveanimation 55s infinite linear;
    }

    &:nth-child(2) {
        animation-duration: 4000ms;
    }

    &:nth-child(2) {
        animation-duration: 50s;
    }

    &:nth-child(3) {
        animation-duration: 5000ms;
    }

    &:nth-child(3) {
        animation-duration: 45s;
    }

    @keyframes waveanimation {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`

export default Waves
