import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
    return <NavStyles>
        <ul className="nav--links">
            <NavLink className='nav--link' to='/'>Home</NavLink>
            <NavLink className='nav--link' to='About'>About</NavLink>
            <NavLink className='nav--link' to='Web?'>Web?</NavLink>
            <NavLink className='nav--link' to='work'>Work</NavLink>
        </ul>
    </NavStyles>
}

const NavStyles = styled.nav`
    padding: 1rem 1.5rem;
    background: #212127;
    border-radius: 2rem;
    margin: 1rem auto;
    position: sticky;
    top: 10px;
    z-index: 9999;
    @media (min-width: 468px) {
        margin: 1rem auto;
    }
    max-width: 358px;
    box-shadow: 0 20px 30px -6px rgb(37 37 37 / 50%);
    .nav--links{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        @media (max-width: 468px) {
            gap:1rem;
        }
    }
    .nav--link{
        text-decoration: none;
        font-weight: 800;
        font-size: 1rem;
        transition: .3s;
        @media (min-width: 468px) {
            font-size: 1.1rem;
        }
        color: #ecececd4;
        transition: .3s;
        &:hover{
            color: white;
        }
    }
    .nav--link.active{
        color: white;
        background: #353541;
        padding: 0.75rem 1rem;
        border-radius: 2rem;
    }
`