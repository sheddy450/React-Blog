import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library, Library } from "@fortawesome/fontawesome-svg-core";
import {faFacebook, faHashnode, faLinkedin, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import '@fortawesome/fontawesome-svg-core/styles.css'
// import './styles.css'

const Contact = () => {

library.add(faHashnode);
    return ( 
      <div className="all-contacts">
        <div className='contact'>
                <h2>Contact</h2>
                <p>You can check out some of my articles published on hashnode. you can aswell contact me
                  via any of the social media below. Just click on any of the link and you'd connect with me.
                </p>
            </div>
           <Container>
            <div className="contact-list">
                <a href="https://www.linkedin.com/in/shedrach-musa-a6b182231">
                    <FontAwesomeIcon icon={faLinkedin} />
                    <p>Linkedin</p>
                </a>
            
                <a href="https://hashnode.com/@Shedranifico">
                    <FontAwesomeIcon icon={faHashnode}  className="my-icon" />
                    <p>Hashnode</p>
                </a>
            
                <a href="https://twitter.com/kungfu_sheddy?t=J4_If_1O7myF67cCSiTDPQ&s=09">
                    <FontAwesomeIcon icon={faTwitter} />
                    <p>Twitter</p>
                </a>
            
                <a href="https://wa.me/qr/3LQINEVYSNPPB1">
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <p>whatsApp</p>
                </a>
            </div>
           </Container>
      </div>
     );
}
 
export default Contact;