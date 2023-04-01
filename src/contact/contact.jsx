import react from 'react';

function Contact(props) {
    return(
        <section id="contact">
            <span>Contact</span>
            <div className="contact">
            <form action="https://formspree.io/f/xgepprlv" method="POST">
                <label>Your Email: </label>
                <input type="text" placeholder="email..." name="_replyto"/>
                <label>Message: </label>
                <textarea placeholder="message..." name="message"></textarea>
                <button type="submit">Send</button>
            </form>
            </div>
        </section>
    );
}

export default Contact;