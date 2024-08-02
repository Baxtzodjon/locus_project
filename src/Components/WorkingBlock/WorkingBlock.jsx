import React from "react";
import homeimage from "/images/house_img.png"
import iconPlay from "/icons/vector.svg"

const WorkingBlock = () => {
    return (
        <>

            <section className="working_section" id="location">

                <div className="texts_wk_sec">

                    <h1>How it works</h1>

                    <p>Spice up your space even simpler than you think</p>

                </div>

                <div className="vdo_block">

                    <div className="home_image">

                        <img src={homeimage} alt="" />

                    </div>

                    <div className="vd_play">

                        <div className="play">

                            <div className="bd_block">

                                <img src={iconPlay} alt="" />

                            </div>

                        </div>

                    </div>

                    <div className="description_home">

                        <p>We provide design and build for commercial building, interior and furniture to improve the better life.</p>

                        <span>S E E V I D E O</span>

                    </div>

                </div>

            </section>

        </>
    )
}

export default WorkingBlock