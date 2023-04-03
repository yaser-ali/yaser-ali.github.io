import { useState } from "react";
// import pdf from "../Yaser.pdf";
import Contact from "./Contact";
import { DownArrow } from "@styled-icons/boxicons-solid/DownArrow";
import styled from 'styled-components';
import ScrollToTop from "react-scroll-to-top";
import calc from "../img/calc.png";
import cart from "../img/cart.png"
import screen from "../img/screenshare.png"

const ArrowD = styled(DownArrow)`
  width: 15%;
  color: black;
  padding: 10px;
  background-color: white;
  border-radius: 50%;
`;

const Content = () => {
    const [Bgcolor, setBgcolor] = useState(false);

    const HandleClick = () => {
        setBgcolor(!Bgcolor);
    }

    return (
        <>
            <a href="#home"><ScrollToTop smooth /></a>
            <div className={Bgcolor === true ? 'white' : 'black'}>
                <section id="Home">
                    <div className='Center-Home'>
                        <button className="changecolor" onClick={HandleClick}>{Bgcolor ? 'Off' : 'On'}</button>
                        <h1 className="headingHome">Hi! I am Yaser Ali</h1>
                        {/* <a className='btnCV' target="_blank" rel='noreferrer' href={pdf}>Download My Resume</a> */}
                        {/* <br />
                         */}
                        <a className="bounceDownArrow" href="#About"> <ArrowD /></a>
                    </div>
                </section>

                <section id="About">
                    <div className="container reveal">
                        <h2>About</h2>
                        <div className="text-container">
                            <div className="text-box">
                                <h3>Summary</h3>
                                <p>
                                    A well-presented, friendly, hardworking, and highly technical individual with a passion for technology, programming and of course, development. I am a graduate who graduated with a strong upper second in software development at the Manchester Metropolitan University. I am currently specializing, working, and developing applications for companies and organizations.
                                    As a developer, I enjoy solving problems and developing substantial, quantitative, and readable code. But also, the way an application is developed such as its design, UI (User Interface), and functionality. I am comfortable working with an agile software development team and giving ideas for development practices.
                                    Proficient knowledge in PHP and Java, especially in many different programming languages and technologies such as node.js, Java, HTML5, React.js, vue.js, Python and C#. I do make extensive use of GIT and among other favourable software frameworks. I have been working on web applications during my adolescent years, but I also worked on a couple of software applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="Skills">
                    <div className="container reveal">
                        <h2>Skills</h2>
                        <div className="text-container">
                            <div className="text-box">
                                {/* <h3>Summary</h3> */}
                                {/* <p>
                            A well-presented, friendly, hardworking, and highly technical individual with a passion for technology, programming and of course, development. I am a graduate who graduated with a strong upper second in software development at the Manchester Metropolitan University. I am currently specializing, working, and developing applications for companies and organizations.
                            As a developer, I enjoy solving problems and developing substantial, quantitative, and readable code. But also, the way an application is developed such as its design, UI (User Interface), and functionality. I am comfortable working with an agile software development team and giving ideas for development practices.
                            Proficient knowledge in PHP and Java, especially in many different programming languages and technologies such as node.js, Java, HTML5, React.js, vue.js, Python and C#. I do make extensive use of GIT and among other favourable software frameworks. I have been working on web applications during my adolescent years, but I also worked on a couple of software applications.
                        </p> */}
                                <div className="skills-bar">
                                    <div className="bar">
                                        <div className="info">
                                            <span>HTML</span>
                                        </div>
                                        <div className="progress-line html">
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="bar">
                                        <div className="info">
                                            <span>CSS</span>
                                        </div>
                                        <div className="progress-line css">
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="bar">
                                        <div className="info">
                                            <span>JavaScript</span>
                                        </div>
                                        <div className="progress-line javascript">
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="bar">
                                        <div className="info">
                                            <span>MySQL</span>
                                        </div>
                                        <div className="progress-line mysql">
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="bar">
                                        <div className="info">
                                            <span>PHP</span>
                                        </div>
                                        <div className="progress-line php">
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="Education">
                    <div className="container reveal">
                        <h2>Education</h2>
                        <div className="text-container">
                            <div className="text-box">
                                <h3>UCEN Manchester</h3>
                                <p>
                                    HNC/HND
                                    2017 - 2019
                                </p>
                            </div>
                            <div className="text-box">
                                <h3>Manchester Metropolitan University</h3>
                                <p>
                                    Software Development BSc Top Up
                                    2019 - 2020
                                </p>
                            </div>
                            <div className="text-box">
                                <h3>LTE group</h3>
                                <p>
                                    Computer science with mobile app development
                                    2015 - 2017
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="Projects">
                    <div className="container reveal">
                        <h2>Projects</h2>
                        <div className="text-container">
                            <div className="text-box">
                                <h3>Simple JS Calculator</h3>
                                <p>
                                    <img src={calc} alt="calculator" width="100%"></img>
                                </p>
                                <div className="project-box">
                                    <a href="https://simple-js-calculator-ten.vercel.app/" className="btnCV">Site</a>
                                </div>
                                <div className="project-box">
                                <a href="https://github.com/yaser-ali/SimpleJSCalculator" className="btnCV">Code</a>
                                </div>
                            </div>
                            <div className="text-box">
                                <h3>Cart</h3>
                                <p>
                                    <img src={cart} alt="cart" width="100%"></img>
                                </p>
                                <div className="project-box">
                                    <a href="https://kata-ashen.vercel.app/" className="btnCV">Site</a>
                                </div>
                                <div className="project-box">
                                <a href="https://github.com/yaser-ali/Kata" className="btnCV">Code</a>
                                </div>
                            </div>
                            <div className="text-box">
                                <h3>Screenshare</h3>
                                <p>
                                    <img src={screen} alt="screenshare" width="100%"></img>
                                </p>
                                <div className="project-box">
                                    <a href="https://screenshareexample.vercel.app/" className="btnCV">Site</a>
                                </div>
                                <div className="project-box">
                                <a href="https://github.com/yaser-ali/screenshareexample" className="btnCV">Code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="Experience">
                    <div className="container reveal">
                        <h2>Experience</h2>
                        <div className="text-container">
                            <div className="text-box">
                                <h3>Portfolio Home</h3>
                                <p>Jan 2022 - July 2022</p>
                                <p>Developed APIs via the use of PHP, curl, JS and SQL.</p>
                                <p>Developed PHP web applications for other API like CDS (The range), Wayfair, Parcel2Go, etc.</p>
                                <p>Wrote SQL scripts which would be used for stock intake and info about a stock with the use of Case statements and CTE (Common Table Expression).</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className="text-box">
                                <h3>Go Earth Ltd</h3>
                                <p>Mar 2021 - Dec 2021</p>
                                <p>Developed a commercially viable database application with the use of MS Access and VBA.</p>
                                <p>WordPress to create a responsive, mobile-friendly, and interactive website for a given project. </p>
                                <p>Python to create a parsing tool to receive boat search details and information.</p>
                            </div>
                            <div className="text-box">
                                <h3>Lawbid</h3>
                                <p>Dec 2019 - Feb 2020 </p>
                                <b>Writing back-end scripting with the use of PHP and node.js to pre-register page as well as the other pages.</b>
                                <p>Adding features and specialties to the website in terms of design, interactivity, and functionality.</p>
                                <p>Implementing the sites functionality, interactivity, and style on each page such as profile page, dashboard, and other stylish pages with the use of react.js, angular.js, jQuery, Bootstrap as well as foundation for making the site 	responsive and agile.</p>
                                <p>Using React Native for mobile-friendly usages and allowing clients and solicitors to communicate more easily on their mobiles and smartphones.</p>
                                <p>Using git, bower and gulp.js for tracking changes in the site and code changes.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <Contact />
            </div>
        </>
    )
};
export default Content;