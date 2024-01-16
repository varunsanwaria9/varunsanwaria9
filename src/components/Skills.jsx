import React from "react";

import '../styles/Skills.css';

export default function Skills() {
    return (
        <div className="main-body">
            <div className="skills-main-body">
                <div className="skills-subsection">
                    <div className="">
                        <h1 className="skills-subheader">Languages & Tools</h1>
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="skills-badge-img" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="skills-badge-img" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" className="skills-badge-img" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" className="skills-badge-img" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg" className="skills-badge-img" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" className="skills-badge-img" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" className="skills-badge-img" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" className="skills-badge-img" />
                    </div>
                </div>
                <div className="skills-subsection">
                    <div>
                        <h1 className="skills-subheader">Certifications</h1>
                    </div>
                    <div>
                        <ol className="skills-subtext">
                            <li>Oracle Certified Java Associate</li>
                            <li>Certified System Administrator</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}