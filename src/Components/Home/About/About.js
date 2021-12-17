import React from 'react';

function About() {
    return (
        <div className="w-full h-auto flex justify-center align-text-bottom text-nice-grey flex-col">
            <div className="underline font-semibold text-lg pb-2">
                About Me
            </div>
            <div className="text-md">
                My name is Sebastian Blackley and I am a freelance full-stack developer. 
                I enjoy exploring new tech and building web applications in my free time. 
                My most recent application being <a className="font-semibold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600" href="https://github.com/seabass118/Coinraf" target="_blank" rel="noreferrer">Coinraf</a>,
                a cryptocurrency data platform. 
                to track crypto prices and discover new tokens.
            </div>
        </div>
    )
}

export default About;
