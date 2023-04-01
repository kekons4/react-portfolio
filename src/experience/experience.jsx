import react from 'react';

function Experience(props) {
    return(
        <section id='experience'>
            <span>Experience</span>
            <div class="experience">
                <div class="card">
                    <span>Olive AI</span>
                    <i>Production Support Engineer II</i>
                    <p> Columbus OH/Remote, July 2022 T0 Present</p>
                    <ul>
                        <li>
                            Lead a team of associate engineers in solving problems and maintaining automation scripts
                        </li>
                        <li>
                            Mentor and train new team members to improve their performance
                        </li>
                        <li>
                            Take point on major incidents and help resolve multiple automation failures simultaneously
                        </li>
                        <li>
                            Host team morning standup meetings when my manager was unavailable
                        </li>
                        <li>
                            Host weekly team meetings to share best practices and collaborate on automation issues
                        </li>
                        <li>
                            Implemented an improved support documentation system called “Gotchas”
                        </li>
                        <li>
                            <ul>
                            <li>
                                Provides step by step instructions to engineers on how to resolve common errors associated with an automation until a permanent fix is implemented
                            </li>
                            </ul>
                        </li>
                        <li>
                            Develop and share personal tools to improve team efficiency
                        </li>
                        <li>
                            <ul>
                            <li>
                                Programmed a PowerShell script to automate the process of setting up and installing required engineering coding environment
                            </li>
                            </ul>
                        </li>
                    </ul>

                    <div class="connector"></div>

                    <i>Production Support Engineer I</i>
                    <p> Columbus OH/Remote, July 2021 T0 July 2022</p>
                    <ul>
                    <li>
                        Resolved automation failures and errors, writing code fixes and publishing them to production CI/CD pipeline
                    </li>
                    <li>
                        Communicated with internal and external stakeholders about automation status and issues
                    </li>
                    <li>
                        Used JIRA ticketing system to manage and track tasks and inquiries
                    </li>
                    <li>
                        Utilized technical tools such as AWS workspaces, Postman, Selenium WebDriver, and Git to support automation processes
                    </li>
                    <li>
                        Fixed parallelized Web scraping RPA automations that run on 98 different Virtual Machines
                    </li>
                    <li>
                        <ul>
                        <li>
                            Lowered the total number of daily failures from all running automation by 26%
                        </li>
                        </ul>
                    </li>
                    <li>
                        Tools: AWS workspaces, AWS S3 Bucket, JIRA, Confluence, Postman, Node.js, TypeScript, JavaScript, Selenium WebDriver, Puppeteer, Robot.js, Git, Gitlab, PowerShell, JSON, CSV, PSV, Virtual Machines, Citrix Viewer 
                    </li>
                    </ul>
                </div>

                <div class="connector"></div>

                <div class="card">
                    <span>American Airlines</span>
                    <i>Software Developer</i>
                    <p> Fort Worth TX, March 2020 T0 June 2020</p>
                    <ul>
                    <li>
                        Apart of the Baggage Service Operations team, monitor splunk logs, soti logs, xMatters logs, update and
                        maintain
                        Databases
                    </li>
                    <li>Splunk
                        <ul>
                        <li>Created Dashboards</li>
                        <li>Setup Alerts</li>
                        <li>Defined custom Field Extractions</li>
                        </ul>
                    </li>
                    <li>Developed Angular Ionic Cordova Android mobile applications for baggage services.</li>
                    <ul>
                        <li>This application scanned and onloaded/offloaded checked bags and cargo into the aircraft</li>
                        <li>All scanned bags and cargo were logged to a java backend service via RESTFul API technology.</li>
                    </ul>
                    <li>Tools: Ionic Framework, Angular 2+, Typescript, HTML, CSS, Bootstrap, Splunk, Soti, xMatters</li>
                    </ul>
                </div>

                <div class="connector"></div>

                <div class="card">
                    <span>Neiman Marcus Project</span>
                    <i>Associate Software Engineer</i>
                    <p> Irving TX, September 2019 T0 March 2020</p>
                    <ul>
                    <li>Apart of the mobile apps support team.</li>
                    <li>Deploy Neiman Marcus Customer Facing app (CFA) on the App Store</li>
                    <li>Update SSL/TLS certificates for CFA app</li>
                    <li>Test/Validate client incidents on services on Neiman Marcus mobile apps</li>
                    <li>Maintained java backend Database services which controlled services on different mobile apps</li>
                    <li>Troubleshooting cloud-based services like Amazon Web Services (AWS), Filemaker for the ecommerce
                        website.
                    </li>
                    <li>Monitored traffic on all owned Neiman Marcus websites</li>
                    <li>Tools: Splunk, Dynatrace, Quantum Metric for detailed analysis</li>
                    </ul>
                </div>

                <div class="connector"></div>

                <div class="card">
                    <span>Infosys Ltd.</span>
                    <i>Associate Software Engineer</i>
                    <p>Richardson TX, July 2019 T0 March 2020</p>
                    <ul>
                    <li>Trained two Months in Raliegh NC training center on FullStack Technologies</li>
                    <ul>
                        <li>Frontend:</li>
                        <ul>
                        <li>HTML 5</li>
                        <li>CSS</li>
                        <li>Typescript</li>
                        <li>Angular 7+</li>
                        </ul>
                        <li>Backend:</li>
                        <ul>
                        <li>SQL, OracleDB</li>
                        <li>Python</li>
                        <li>Java 8</li>
                        <li>SpringBoot</li>
                        </ul>
                    </ul>
                    <li>Internal Project</li>
                    <ul>
                        <li>On a team which developed the Richardson Hub main portal webpage</li>
                        <li>Developed in Angular using HTML5, CSS, Bootstrap, and typescript</li>
                    </ul>
                    <li>External Projects</li>
                    <ul>
                        <li>After the two months of train completed was then assigned to the Neiman Marcus Project</li>
                    </ul>
                    </ul>
                </div>
            </div>
        </section>
    );
} 

export default Experience;