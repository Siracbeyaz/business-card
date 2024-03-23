import Footer from "./Footer"
import React from "react";
import Image from "next/image";
import MainImage from "../../public/Rectangle 90.png";
import email from "../../public/Button.png";
import Linkedin from "../../public/Button (1).png";
import "./Main.css"

export default function Main() {
    return (
        <div className="maindiv">
    
        <main className="Main">
            <Image src={MainImage} alt="MAinlogo" className="MainImage" width={400} height={100} />
            <h1>Laura Smith</h1>
            <h6>Frontend Developer</h6>
            <h5>laurasmith.website</h5>
            <div className="mainbutton">
                <div>
                    <button className="email">
                        <Image src={email} alt="email"></Image>
                    </button>
                </div>
                <div>
                    <button className="linkedIn">
                        <Image src={Linkedin} alt="linkedin"></Image>
                    </button>
                </div>
            </div>
            
                <h2>About</h2>
                <div className="textfirst">
                <p>I am a frontend developer with a particular interest
                    in making things simple and automating daily tasks.
                    I try to keep up with security and best practices,
                    and am always looking for new things to learn.
                </p>
                </div>
            <div>
                <h2>Interests</h2>
                <div className="textsec">
                <p>Food expert. Music scholar. Reader. Internet fanatic.
                    Bacon buff. Entrepreneur. Travel geek.
                    Pop culture ninja. Coffee fanatic.
                </p>
                </div>
            </div>
            <Footer/>
        </main>
        </div>
    );
}
