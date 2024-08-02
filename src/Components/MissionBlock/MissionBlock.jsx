import React from "react";
import livingRoom from "/images/img_living_room.png"

const MissionBlock = () => {
    return (
        <>

            <section className="mission_sec">

                <div className="msn_block">

                    <div className="msn_image">

                        <img src={livingRoom} alt="" />

                    </div>

                    <div className="msn_texts">

                        <h3>Our mission is to deliver aesthetic visual for your home</h3>

                        <p>By applying bacis psychology principles, we are going to explain how perception works and how we can use this understanding to maximise the space that we occupy in our homes.</p>

                    </div>

                </div>

            </section>

        </>
    )
}

export default MissionBlock