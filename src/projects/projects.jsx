import react from 'react';

function Projects(props) {
    return(
        <section id={props.props}>
            <span>Projects</span>
            <div className="projects">
                <div className="card">
                    <span>Backdoor-API</span>
                    <img src="./assets/images/LordKreios.jpg" alt="image of Backdoor-API"/>
                    <p>
                    Backdoor-API new spin on remotely controlling your devices. Using the power of RESTful API technology along with socket server technology I have created a user experience similar to Microsoft
                    Remote Desktop with a bunch of new features. Features like downloading and uploading file from the host computer, and remote code execution all from your prefered internet browser.
                    </p>
                    <div className="author">
                    Authors: Keon Pourboghrat
                    </div>
                    <div className="btn-cont">
                    <a target="_blank" href="https://github.com/kekons4/backdoor-api">
                        <div className="github">
                        <i className="fa fa-github"></i>
                        <span>Code</span>
                        </div>
                    </a>
                    <a target="_blank" href="">
                        <div className="github">
                        <i className="fa fa-file"></i>
                        <span>Site</span>
                        </div>
                    </a>
                </div>
                </div>
                <div className="card">
                    <span>Social-Social Media</span>
                    <img src="./assets/images/social-social-media.png" alt="image of social-social media"/>
                    <p>
                    This project is an MVC based social media website that allows users to create and account giving them access to post thoughts and ideas. The user can also like, dislike, and comment on other peoples posts.
                    </p>
                    <div className="author">
                    Authors: Keon Pourboghrat, Sean Fitzmartin, Tera Howell
                    </div>
                    <div className="btn-cont">
                    <a target="_blank" href="https://github.com/kekons4/social-social-media">
                        <div className="github">
                        <i className="fa fa-github"></i>
                        <span>Code</span>
                        </div>
                    </a>
                    <a target="_blank" href="https://still-fjord-88148.herokuapp.com/">
                        <div className="github">
                        <i className="fa fa-file"></i>
                        <span>Site</span>
                        </div>
                    </a>
                    </div>
                </div>
                <div className="card">
                    <span>Use it or lose it</span>
                    <img src="./assets/images/use-it-or-lose-it.png" alt="image of use it or lose it" />
                    <p>
                    In this project our team created a web application where the user enters in ingredients and is returned with a
                    list of
                    recipes. From the list of recipes the user can select up to five. After the user has selected their choice
                    they are
                    given the recipe instuctions and the entire ingredient list for it.
                    </p>
                    <div className="author">
                    Authors: Keon Pourboghrat, Janee' Mays, Corrinne Worden, Martha Potts
                    </div>
                    <div className="btn-cont">
                    <a target="_blank" href="https://github.com/kekons4/Use-it-or-lose-it">
                        <div className="github">
                        <i className="fa fa-github"></i>
                        <span>Code</span>
                        </div>
                    </a>
                    <a target="_blank" href="https://kekons4.github.io/Use-it-or-lose-it">
                        <div className="github">
                        <i className="fa fa-file"></i>
                        <span>Site</span>
                        </div>
                    </a>
                    </div>
                </div>

                <div className="card">
                    <span>Weather man</span>
                    <img src="./assets/images/weatherman.png" alt="image of weatherman web app"/>
                    <p>
                    In this project I created a working city weather search app. When the user searches for the city of their
                    choice they
                    are displayed with todays weather aswell as the 5 day forecast. It gives the user information like
                    tempurature,
                    humidity, wind speed, uv index, and what the skies are like.
                    </p>
                    <div className="author">
                    Author: Keon Pourboghrat
                    </div>
                    <div className="btn-cont">
                    <a target="_blank" href="https://github.com/kekons4/weatherman">
                        <div className="github">
                        <i className="fa fa-github"></i>
                        <span>Code</span>
                        </div>
                    </a>
                    <a target="_blank" href="https://kekons4.github.io/weatherman">
                        <div className="github">
                        <i className="fa fa-file"></i>
                        <span>Site</span>
                        </div>
                    </a>
                    </div>
                </div>

                <div className="card">
                    <span>Calendar Events</span>
                    <img src="./assets/images/calendarevents.png" alt="image of calendar events web app"/>
                    <p>
                    The project is a web event calendar. The user is show'n time slots in which they can type a description of the
                    event and
                    save it. Each time slot is color coded based on the current time of the day.
                    </p>
                    <div className="author">
                    Author: Keon Pourboghrat
                    </div>
                    <div className="btn-cont">
                    <a target="_blank" href="https://github.com/kekons4/calendarevents">
                        <div className="github">
                        <i className="fa fa-github"></i>
                        <span>Code</span>
                        </div>
                    </a>
                    <a target="_blank" href="https://kekons4.github.io/calendarevents">
                        <div className="github">
                        <i className="fa fa-file"></i>
                        <span>Site</span>
                        </div>
                    </a>
                    </div>
                </div>

                <div className="card">
                    <span>MTG-Counters</span>
                    <img src="https://mtg-counters.herokuapp.com/images/brand-image_3.png" alt="image of MTG-Counters" />
                    <p>This project was designed to help facilitate playing magic the gathering over the internet.
                    using socket.io for real-time data, it tracks the players or teams health poision counters
                    aswell as contain a built-in coin flipper.
                    </p>
                    <div className="author">
                    Author: Keon Pourboghrat, Tavon Pourboghrat
                    </div>
                    <div className="btn-cont">
                    <a target="_blank" href="https://github.com/kekons4/mtg-counter">
                        <div className="github">
                        <i className="fa fa-github"></i>
                        <span>Code</span>
                        </div>
                    </a>
                    <a target="_blank" href="https://mtg-counters.herokuapp.com">
                        <div className="github">
                        <i className="fa fa-file"></i>
                        <span>Site</span>
                        </div>
                    </a>
                    </div>
                </div>

                <div className="card">
                    <span>DnDbackend</span>
                    <img src="./assets/images/LordKreios.jpg" alt="image of dndbacked" />
                    <p>Is a RESTful API used to GET and POST data to a SQL database.
                    Specifically for Dungeons and Dragons player sheets aswell as items stats.
                    This backend enable dungeon masters to play the game remotely with their data
                    persistently saved!
                    </p>
                    <div className="author">
                    Author: Keon Pourboghrat
                    </div>

                    <div className="btn-cont">
                    <a target="_blank" href="https://github.com/kekons4/dndbacked">
                        <div className="github">
                        <i className="fa fa-github"></i>
                        <span>Code</span>
                        </div>
                    </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects