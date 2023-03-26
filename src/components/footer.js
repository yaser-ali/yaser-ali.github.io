import pdf from "../Yaser.pdf";
import "../App.css";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";
import { FileDownload } from '@styled-icons/remix-line/FileDownload';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';
import styled from 'styled-components';

const Git = styled(Github)`
  width: 100%;
`;
const Link = styled(Linkedin)`
  width: 100%;
`;
const Download = styled(FileDownload)`
  width: 100%;
`
const Insta = styled(Instagram)`
width: 100%;
`
const Footer = () => {
  const Year = new Date();
  return (
    <>
      <footer>
        <div className="rowFooter">
          <div className="col-25">
            <h3>@Copyright Yaser {Year.getFullYear()}</h3>
          </div>
          <div className="col-25"><h3>About me</h3>
            <p>
              I'm Yaser and I am a Software developer who enjoys
              developing and coding in his spare time and as a hobby.
            </p>
          </div>
          <div className="col-25">
            <h3>CV</h3>
            <p>
              Want a copy of my up to date resume? click on the download button icon.

            </p>
            <a target="_blank" rel='noreferrer' href={pdf}><Download className="footerSM" /></a>

          </div>
          <div className="col-25">
            <h3>Follow Me</h3>
            <a href="https://github.com/yaser-ali"><Git className="footerSM" /></a>
            <a href="https://www.linkedin.com/in/yaser-al-thahab-17654a241/"><Link className="footerSM" /></a>
            <a href="https://www.instagram.com/ya.al__/"><Insta className="footerSM" /></a>
            
          </div>

        </div>

      </footer>

    </>
  )
};
export default Footer;
