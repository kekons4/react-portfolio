import react from 'react';

function About(props) {
    return(
        <section id={props.props} className='bg-color-one'>
            <div className="content">
                <img src="./assets/images/me3.png" alt="picture of me" />
                <span className="title">Keon Pourboghrat</span>
                <span className="degree">BA in Philosophy</span>
                <span className="school">The Ohio State University</span>
                <div className="content-icon-cont">
                    <a target="_blank" href="https://www.github.com/kekons4"><i className="fa fa-github fa-sm"></i></a>
                    <a target="_blank" href="https://www.linkedin.com/in/keon-pourboghrat-15142a98/"><i
                        className="fa fa-linkedin fa-sm"></i></a>
                    <a target="_blank" href="./assets/misc/Keon-Resume.pdf"><i className="fa fa-file fa-sm"></i></a>
                </div>
                <span>Phone: (+1)517-648-4382</span>
                </div>
                <div className="content-two">
                <span>About me</span>
                <p>
                    I am a Software Engineer trained FullStack from various frontend and backend technologies. I Graduated from
                    The
                    Ohio State University with a BA in Philosophy. Then decided to pursue my interest in development and somehow
                    ended
                    up
                    in it. I have many repsoitories on Github ranging from frontend webapps to backend API's.
                </p>
                <div className="edu-int-cont">
                    <div className="interests">
                    <span>Interests</span>
                    <ul>
                        <li>ES6+ Javascript</li>
                        <li>TypeScript</li>
                        <li>DevOPS</li>
                        <li>Microservices</li>
                        <li>UI/UX Development</li>
                        <li>Automation</li>
                        <li>Columbus Crew Fan!</li>
                    </ul>
                    </div>
                    <div className="education">
                    <span>Education</span>
                    <ul>
                        <li><i className="fa fa-graduation-cap"></i> BA in Philosophy, 2019</li>
                        <li><i className="fa fa-graduation-cap"></i> Ohio State Coding Boot Camp Spring 2021</li>
                    </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;