import { useState } from "react";
import { styled } from "styled-components";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import Heading from "./Heading";
import emailjs from '@emailjs/browser'

export default function EmailForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const serviceId = import.meta.env.VITE_SERVICE;
        const templateId = import.meta.env.VITE_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_PUBLIC_Key;

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Wajd',
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then(response => {
                console.log('Email sent success', response);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch(error => {
                console.error('Error sending email: ', error)
            })
    }
    return (
        <Contact className="container">
        <Heading title="Let's talk!" id="contact" />
        <form>
            <div className="center">
                <input value={name} type="text" placeholder="Your Name" onChange={(e) => setName(e.target.value)}/>
                <input value={email} type="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type a message, send us a feedback, or let's work"></textarea>
        </form>
        <div className="flex-end">
            <div className="social">
                <a href="https://wa.me/966530245376?text=Hello 👋, How can i help you?" target="_blank" className="whatsapp"><FaWhatsapp /></a>
                <a href="https://www.linkedin.com/in/wajd-wael-345465230/" className="linkedin">
                    <FaLinkedinIn />
                </a>
                <a href="https://github.com/WajdWael" className="github">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/dev.wajd_wael/" className="instagram"><FaInstagram/></a>
            </div>
            <button onClick={handleSubmit}>Send</button>
        </div>
        </Contact>
    )
}

const Contact = styled.section`
  margin: 5rem 0;

  .center{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    margin: 2rem 0;
    }

  input{
    color: #ededed;
    padding: 1rem;
    outline: none;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    width: 100%;
    border: 1px solid #565151;
    font-size: 1.5rem;
    background: #2e2e2f;
    border-radius: 11px;
    box-shadow: 0 20px 30px -6px rgb(37 37 37 / 50%);

    &::placeholder {
      color: #f9f9f9;
      font-size: 1.5rem;
    }
  }

  textarea {
    color: #ededed;
    border: 1px solid #565151;
    background: #2e2e2f;
    box-shadow: 0 20px 30px -6px rgb(37 37 37 / 50%);
    margin-bottom: 2rem;
    padding: 1rem;
    width: 100%;
    height: 5rem;
    border-radius: 1rem;
    outline: none;
    overflow: hidden;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-size: 1rem;

    &::placeholder {
      color: #f9f9f9;
      font-size: 1rem;
    }
  }
  .social{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-size: 2rem;
    flex-wrap: wrap;

    a {
      color: #f9f9f9;
      display: flex;
      padding: 1rem;
      justify-content: center;
      align-items: center;
      border-radius: 1rem;
      transition: 0.3s;
      &:hover{
        box-shadow: 0 15px 20px -15px #6e6d6d;
      }
    }

    .instagram{
      background-color: #b11be9;
    }
    .whatsapp{
      background-color: #25D366;
    }
    .linkedin {
      background-color: #0077b5;
    }
    .github {
      background-color: #171515;
    }
  }

  .flex-end{
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      font-size: 1.25rem;
      border: none;
      color: #565151;
      background: #28e6fb;
      font-weight: 700;
      padding: 1rem;
      border-radius: 0.75rem;
      text-decoration: none;
      transition: 0.3s;
      font-weight: 600;
      box-shadow: 0 20px 30px -6px rgb(37 37 37 / 50%);
      cursor: pointer;

      &:hover{
        color: #0c0c0c;
      }
    }
  }

`