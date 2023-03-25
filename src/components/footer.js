import pdf from "../Yaser.pdf";
import "../App.css";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";
import { FileDownload } from '@styled-icons/remix-line/FileDownload';
import styled from 'styled-components';

const Git = styled(Github)`
  width: 15%;
`;
const Link = styled(Linkedin)`
  width: 15%;
`;
const Download = styled(FileDownload)`
  width: 15%;
`
const Footer = () => {
  const Year = new Date();
  return (
    <>
      <footer>
        <div className="row">
        <div className="col-25"><h3>What I am currently doing</h3>
            <p>
              Freelancing atm.
            </p>
          </div>
          <div className="col-25"><h3>About me</h3>
            <p>
              I'm Yaser and I am a Software developer who enjoys
              developing and coding in his spare time and as a hobby.
            </p>
          </div>
          <div className="col-25">
            <h3>Download my CV:</h3>
            <p>
              <a target="_blank" rel='noreferrer' href={pdf}><Download /></a>
            </p>
          </div>
          <div className="col-25">
            <h3>Follow me</h3>
            <a className="footerSM" href="https://github.com/yaser-ali"><Git /></a>
            <a className="footerSM" href="https://www.linkedin.com/in/yaser-al-thahab-17654a241/"><Link /></a>

          </div>
          <div className="col-100">
            <h3>@Copyright Yaser Al-Thahab {Year.getFullYear()}</h3>
          </div>
        </div>

      </footer>

    </>
  )
};
export default Footer;
