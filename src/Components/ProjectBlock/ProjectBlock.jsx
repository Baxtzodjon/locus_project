import React from "react";
import firimage from "/images/house_room.png"
import secimage from "/images/round_img.png"
import thrimage from "/images/bookcase-library.png"

const ProjectBlock = () => {
    return (
        <>

            <section className="project_sec">

                <div className="prt_lns_texts">

                    <h1>Our project </h1>

                    <p>Introducing our first official project</p>

                </div>

                <div className="lines">

                    <div className="line"></div>

                    <div className="line"></div>

                </div>

                <div className="project_block">

                    <div className="project">

                        <div className="project_texts">

                            <h3>Project Livingroom</h3>

                            <p>A simple guide to create the perfect livingro-om for . Night Watc works beautifully in a wi-de gamut of arrangements.</p>

                        </div>

                        <img src={firimage} alt="" />

                    </div>

                    <div className="project">

                        <img src={secimage} alt="" />

                        <div className="project_texts">

                            <h3>Project workspace</h3>

                            <p>A simple guide to create the perfect livingro-om for . Night Watc works beautifully in a wi-de gamut of arrangements.</p>

                        </div>

                    </div>

                    <div className="project">

                        <div className="project_texts">

                            <h3>Library</h3>

                            <p>A simple guide to create the perfect livingro-om for . Night Watc works beautifully in a wi-de gamut of arrangements.</p>

                        </div>

                        <img src={thrimage} alt="" />

                    </div>

                </div>

            </section>

        </>
    )
}

export default ProjectBlock