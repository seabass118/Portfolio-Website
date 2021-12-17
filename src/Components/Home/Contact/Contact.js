import React from 'react';
import Twitter from '../../../Icons/twitter.png';
import Linkedin from '../../../Icons/linkedin.png';
import Medium from '../../../Icons/medium.png';
import Github from '../../../Icons/github.png';

function Contact() {
    return (
        <div className="w-full h-auto flex justify-center text-nice-grey flex-col">
            <div className="text-lg text-nice-grey font-semibold underline pb-2">
                Contact
            </div>
            <div className="flex flex-row">
                <a href="https://twitter.com/seabass1x" target="_blank" rel="noreferrer">
                    <img className="w-social-icon h-social-icon" src={Twitter} alt="Twitter Icon"></img>
                </a>
                <a href="https://www.linkedin.com/in/sebastian-blackley-8090b7217/" target="_blank" rel="noreferrer">
                    <img className="w-social-icon h-social-icon ml-1.5" src={Linkedin} alt="Linkedin Icon"></img>
                </a>
                <a href="https://medium.com/" target="_blank" rel="noreferrer">
                    <img className="w-social-icon h-social-icon ml-1.5" src={Medium} alt="Medium Blog Icon"></img>
                </a>
                <a href="https://github.com/seabass118" target="_blank" rel="noreferrer">
                    <img className="w-social-icon h-social-icon ml-1.5" src={Github} alt="Github Icon"></img>
                </a>
            </div>
        </div>
    )
}

export default Contact;
