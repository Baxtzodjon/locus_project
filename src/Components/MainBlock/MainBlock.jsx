import React from "react";
import elimage from "/images/img1.png"

const MainBlock = () => {
    return (
        <>

            <section className="section_block" id="home">

                <div className="mng_block">

                    <div className="texts_block">

                        <h1>Get the inspiration of interior design here</h1>

                        <p>architecture not only about engineering, it even lands to art and aesthetics. With us, you will get a residentical design with an extraordinary touch of art.</p>

                        <button>Let's go</button>

                    </div>

                    <div className="image_elem">

                        <svg width="690" height="782" viewBox="0 0 834 782" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M51.5042 116.435C62.2459 77.2326 93.7169 47.77 133.431 39.1108C206.738 23.1267 330.218 0 431 0C529.384 0 651.849 22.0396 727.471 37.9584C771.054 47.1327 804.44 81.0992 811.62 125.054C819.577 173.769 828.848 244.881 833 330C837.955 431.572 823.347 580.709 811.507 679.531C804.438 738.54 754.017 782 694.586 782H147.319C100.236 782 57.6028 754.385 43.7153 709.398C26.5994 653.952 6.46966 570.456 0.999898 472C-5.82695 349.117 28.8254 199.202 51.5042 116.435Z" fill="#CCF0E6"/></svg>

                        <img src={elimage} alt="" />

                    </div>

                </div>

            </section>

        </>
    )
}

export default MainBlock