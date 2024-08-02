import React from "react";
import firsig from "/images/signature3.png"
import secsig from "/images/signature2.png"
import thrsig from "/images/signature1.png"
import fortsig from "/images/signature4.png"
import imageBlcHum from "/images/black_human.png"
import quote from "/images/quotes.png"

const Testimonial = () => {
    return (
        <>

            <section className="testimonial_sec" id="about">

                <h1 className="testi_text">Testimonial</h1>

                <div className="signatures">

                    <div className="signature">

                        <img src={firsig} alt="" />

                    </div>

                    <div className="signature">

                        <img src={secsig} alt="" />

                    </div>

                    <div className="signature">

                        <img src={thrsig} alt="" />

                    </div>

                    <div className="signature">

                        <img src={fortsig} alt="" />

                    </div>

                </div>

                <div className="testi_description">

                    <div className="image_bla_hum">

                        <img src={imageBlcHum} alt="" />

                    </div>

                    <div className="block_testi_texts">

                        <div className="achievements">

                            <div className="decs_text">

                                <span>105</span>

                                <h1>project done</h1>

                            </div>

                            <div className="decs_text">

                                <span>12</span>

                                <h1>years of experience</h1>

                            </div>

                            <div className="decs_text">

                                <span>10+</span>

                                <h1>big company partnership</h1>

                            </div>

                        </div>

                        <div className="quote_block">

                            <img src={quote} alt="" />

                        </div>

                        <div className="quotes">

                            <p>"Not able to tell you how happy I am with interior design. Interior design has completely surpassed our expectations. Interior design saved my business. Interior design is worth much more than I paid."</p>

                            <span>- Roscoe</span>

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Testimonial