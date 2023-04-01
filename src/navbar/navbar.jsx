import react from 'react';

function Navbar() {
    return(
        <nav className=" " id="topNav">
            <div className="container">
            {/* <a href="javascript:void(0);" className="icon" onclick="myFunction()"> */}
                {/* <i className="fa fa-bars"></i> */}
            {/* </a> */}
            <span>Keon Pourboghrat</span>
            </div>
            <div className="container-two">
            <a href="#about" className="active" id="">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact" className="end">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;