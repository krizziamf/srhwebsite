import React, { Component } from 'react'
import '../styles/footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row section">
                        <div className="col-sm-12 col-md-6 col-xl-5">
                            <h3 className="small-title">About Us</h3>
                            <p>Sto. Rosario Hospital(SRH) is a community hospital dedicated to providing quality, value driven health care to all it serves.</p>
                            <div className="footer-div"><i class="fa fa-map-marker"></i> 130 Escano St. Rosario, Batangas 4225</div>
                            <div className="footer-div"><i class="fa fa-phone"></i>  043 321 3988</div>
                            <div className="footer-div"><i class="fa fa-envelope"></i>  sntrosario@yahoo.com</div>

                        </div>
                        <div className="col-links col-sm-6 col-md-3 col-xl-2">
                            <h3 className="link-text small-title">
                                Links
                                </h3>
                            <ul className="menu">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Find a Doctor</a></li>
                                <li><a href="#">Patient Guide</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Latest Events</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-2 col-xl-2">
                            <div className="social-footer">
                                <h3 className="small-title">Connect with us </h3>
                                <a href="https://www.facebook.com/OfficialSRH1987/?ref=br_rs" target="_blank"><i className="fa fa-facebook icon-round"></i></a>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-2 col-xl-3">
                            <img src="images/logo1.jpg" className="footer-logo" />

                        </div>

                    </div>
                </div>

                <div class="mini-footer">
                    <div class="container">
                        <div class="row">
                            <div className="col-md-12">
                                <div class="copyright-text">
                                    <p>© 2020 Sto. Rosario Hospital. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        )
    }
}

export default Footer
