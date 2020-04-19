import React from 'react'
import "../assets/css/main.css"
import "../assets/sass/main.scss"

const Form = () => {
    return (
        <div id="wrapper">
<footer id="footer">
          <section>
            <form method="post" action="https://formspree.io/xaydzorw">
              <div className="fields">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name"  required/>
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="_replyto" id="email" required />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" rows="3"></textarea>
                </div>
              </div>
              <ul className="actions">
                <li>
                  <input type="submit" value="Send Message" />
                </li>
              </ul>
            </form>
          </section>
          
        </footer>
        </div>
    )
}

export default Form
