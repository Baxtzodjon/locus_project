import React from "react";

const Contact = () => {
    return (
        <>

            <footer className="footer" id="contact">

                <div className="contact_form_block">

                    <div className="contact_block">

                        <h1>Contact Us</h1>

                        <p>Have any questions? Want help before getting started?</p>

                        <div className="lines_contact_bl">

                            <div className="line_bl"></div>

                            <div className="line_bl"></div>

                        </div>

                    </div>

                    <form action="" className="form_block">

                        <div className="inps">

                            <label htmlFor="name">Full name</label>

                            <input type="text" id="name" />

                        </div>

                        <div className="inps">

                            <label htmlFor="email">Email address</label>

                            <input type="email" id="email" />

                        </div>

                        <div className="inps">

                            <label htmlFor="t_description">Description</label>

                            <textarea name="" id="t_description"></textarea>

                        </div>

                        <div className="send_bl">

                            <button className="send_btn">Send now</button>

                        </div>

                    </form>

                </div>

            </footer>

        </>
    )
}

export default Contact