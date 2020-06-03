import React from 'react'
import './footer.component.styles.scss'


const Footer = () =>
    (
        <div className="footer">
            <div className="footer_section">
                <h3>Abouts Us</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptas voluptates odit amet. Perspiciatis doloribus nesciunt blanditiis ducimus impedit, modi dicta vero unde voluptates reiciendis expedita, aliquam temporibus adipisci facilis.

                </p>
            </div>
            <div className="footer_section">
                <h3>Contact us</h3>
                <ul class="contact-list">
                    <li class="list-item">
                        <i class="fa fa-map-marker fa-1x">

                        </i>
                        <span class="contact-text place">399 Marlon Road , Atlanta | GA, 37087</span>
                    </li>

                    <li class="list-item">
                        <i class="fa fa-phone fa-1x">

                        </i>
                        <span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212)-555-2368</a>
                        </span>
                    </li>



                </ul>
            </div>
            <div className="footer_section">
                <h3>Special Links</h3>
            </div>
            <div className="footer_section social-network">
                <h3>Social</h3>
                <ul>
                    <li><a><i class="fab fa-linkedin"></i></a></li>
                    <li><i class="fab fa-facebook"></i></li>
                    <li><i class="fab fa-twitter"></i></li>
                    <li><i class="fab fa-instagram"></i></li>
                </ul>
            </div>
        </div>
    )


export default Footer;