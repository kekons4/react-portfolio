import react from 'react';

function Skills(props) {
    return(
        <section id="skills">
            <span>Skills</span>
            <div className="skills">
            <div className="skills-cont" onclick="skills('java')">
                <i className="fab fa-java fa-4x icon"></i>
                <span>Java 8</span>
                <p id="java">(SpringBoot, JUnit, Maven)</p>
            </div>
            <div className="skills-cont" onclick="skills('nodejs')">
                <i className="fab fa-node-js fa-4x icon"></i>
                <span>Node.js</span>
                <p id="nodejs">(Backend Development)</p>
            </div>
            <div className="skills-cont" onclick="skills('angular')">
                <i className="fab fa-angular fa-4x icon"></i>
                <span>Angular</span>
                <p id="angular">(Frontend Development)</p>
            </div>
            <div className="skills-cont" onclick="skills('react')">
                <i className="fab fa-react fa-4x icon"></i>
                <span>React.js</span>
                <p id="react">(More Frontend Dev)</p>
            </div>
            <div className="skills-cont" onclick="skills('python')">
                <i className="fab fa-python fa-4x icon"></i>
                <span>Python</span>
                <p id="python">(Why not?)</p>
            </div>
            <div className="skills-cont" onclick="skills('database')">
                <i className="fas fa-database fa-4x icon"></i>
                <span>Databases</span>
                <p id="database">(MySQL, MaraDB, MongoDB)</p>
            </div>
            </div>
        </section>
    );
}

export default Skills;