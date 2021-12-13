import React from 'react';

function About() {
    return (
        <div className="w-full h-auto flex justify-center items-center align-text-bottom text-nice-grey">
            <div className="w-min min-w-max">
                <div className="underline font-semibold text-lg pb-2">
                    About Me
                </div>
                <div className="text-md">
                    My name is Sebastian Blackley and I am a freelance full-stack developer.<br></br>
                    I enjoy exploring new tech and building web applications in my free time. <br></br>
                    My most recent application being <a className="font-semibold text-chill-red" href="https://github.com/seabass118/Coinraf" target="_blank" rel="noreferrer">Coinraf</a>,
                    a cryptocurrency data platform <br></br> 
                    to track crypto prices and discover new tokens.
                </div>
            </div>
        </div>
    )
}

export default About;
