import React from "react"
import "./About.css"
import ReverseHero from "../HomeHero/ReverseHero"
import heroillustration from "../../Assets/svg/hero-illustration-two.svg"
import nsrcel from "../../Assets/images/nsrcellogo.png"
import edstart from "../../Assets/images/awsedstartlogo.png"
import ContactForm from "../ContactForm/ContactForm"
import support from "../../Assets/svg/support.svg"
import collab from "../../Assets/svg/collab.svg"
import teacherr from "../../Assets/images/teacherr.png"



function About () {
    return (
        <>
        <ReverseHero ReverseHeroImage= {heroillustration} ReverseHeroTitle="We put our soul in what we do" ReverseHeroText="Note that the development build is not optimized.
                            To create a production build, use npm run build.Note that the development build is not optimized.
                            To create a production build, use npm run build."/>
        {/* About us part */}
            <div className="cards-howitworks">
                {/* First column */}
                <div className="cards-firstcolumn">
                    <div className="cards-firstcolumn-title">
                        A few things about us
                    </div>
                    <div className="cards-firstcolumn-header">
                        at the core of our business, impact is what drives us!!!
                    </div>
                    <div className="cards-firstcolumn-text"> 
                        Note that the development build is not optimized.
                        To create a production build, use npm run build.
                        Note that the development build is not optimized.
                        To create a production build, use npm run build.
                    </div>
                </div>
                {/* Second column */}
                <div className="cards-secondcolumn">
                    <div className="cards-cardscontainer">
                    <div className="cards-container">
                    <i className="far fa-clipboard cards-cardicon"></i>
                        <div className="cards-cardtitle">
                            1 Profiling
                        </div>
                        <div className="cards-cardtext">
                            Note that the development build is not optimized.
                            To create a production build, use npm run build.
                        </div>
                    </div>
                    </div>
                    <div className="cards-cardscontainer">
                    <div className="cards-container">
                    <i className="far fa-clipboard cards-cardicon"></i>
                        <div className="cards-cardtitle">
                            1 Profiling
                        </div>
                        <div className="cards-cardtext">
                            Note that the development build is not optimized.
                            To create a production build, use npm run build.
                        </div>
                    </div>
                    </div>
                </div>
                {/* Third column */}
                <div className="cards-thirdcolumn">
                    <div className="cards-cardscontainer">
                    <div className="cards-container">
                    <i className="far fa-clipboard cards-cardicon"></i>
                        <div className="cards-cardtitle">
                            1 Profiling
                        </div>
                        <div className="cards-cardtext">
                            Note that the development build is not optimized.
                            To create a production build, use npm run build.
                        </div>
                    </div>
                    </div>
                    <div className="cards-cardscontainer">
                    <div className="cards-container">
                    <i className="far fa-clipboard cards-cardicon"></i>
                        <div className="cards-cardtitle">
                            1 Profiling
                        </div>
                        <div className="cards-cardtext">
                            Note that the development build is not optimized.
                            To create a production build, use npm run build.
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        {/* Some of our backers  */}
        <div className="support">
        <div className="supportpic">
            <img src={support} alt="supporters" className="supportimgone"/>
        </div>
        <div className="oursupports">
            <div className="oursupportstitle"> Our Supporters </div>
            <div className="oursupportslogos">
                <div className="oursupportslogo">
                    <img src={nsrcel} alt="nsrcel logo" className="supportimg"/>
                    <h6> NSRCEL (IIMB Accelerator)</h6>
                </div>
                <div className="oursupportslogo">
                    <img src={edstart} alt="AWS Edtech Startups" className="supportimg"/>
                    <h6> AWS Edtech Startups</h6>
                </div>
            </div>
        </div>
        </div>

        {/* In collaboration */}

        <div className="collab">
        <div className="collabtwo">
            <div className="collabtitle"> In Collaboration with </div>
            <div className="collablogo">
                    <img src={teacherr} alt="nsrcel logo" className="collabteacherrlogo"/>
                    <h6><a href="www.teacherr.in" className="teacherr"> Teacherr </a></h6>
            </div>
        </div>
        <div className="collabpic">
            <img src={collab} alt="collaboration" className="collabimgone" />
        </div>
        </div>

        {/* Contact us form here */}
        <ContactForm />
        </> 
    )
}

export default About