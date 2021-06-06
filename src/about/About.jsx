import React from "react";
import about1 from'../img/about1.jpg';
import about2 from'../img/about2.jpg';
import me from'../img/me.jpg';

const About = () => {
    return(
        <div class="row">
            <div class="row">
                <div class="col">
                <div class="card bg-dark text-white" >
                    <img class="card-img" src={about1} alt="Card image"   />
                    <div class="container valign">
                        <div class="card-img-overlay" >
                            <h5>
                            <blockquote class="blockquote text-center">
                            <cite title="Source Title">- A bad day with coffee is better than a good day without it -</cite>
                            </blockquote>
                            </h5>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <p></p>

                <div class="row" >
                    <div class="col-5">
                        <img class="card-img" src={about2} alt="Card image"/>
                        </div>
                    <div class="col-6">
                        <div className="about-name">
                            <h2>
                                    <cite title="Source Title">- Tunas Coffee Shop -</cite>
                            </h2>  
                        </div>
                        <div className="about-text">
                            <h6>
                            Tunas Coffee Shop opened its first store in Soekarno Hatta Street, Malang, EastJava, Indonesia, 02 November 1950. As of December 2018, Tunas Coffee Shop is now in 3461 different locations all around major cities (22 cities), connecting to Indonesians one cup at a time.
                            </h6>
                        </div>
                    </div>
                </div>

            <p></p><p></p>
            <div class="row">
                <div class="col">
                    <div className="about-myname">
                                <h2>
                                        <cite title="Source Title">- Subhan Indra Prayoga -</cite>
                                </h2>  
                            </div>
                    </div>
                <div class="col-2">
                    <img class="card-img" src={me} alt="Card image"/>
                </div>
                <div class="col">
                        <div className="about-me">
                            <h5>
                            - I'm a human
                            </h5>
                            <h5>
                            - I'm God's sexiest creature
                            </h5>
                            <h5>
                            - I'm the only one
                            </h5>
                            <h5>
                            - I'm not single, I'm just Solo Player
                            </h5>
                            <h5>
                            - I'm a SadBoy and I'll be a PlayBoy maybe
                            </h5>
                            <h5>
                            - I can sleep, i love sleep, and it's my favorite
                            </h5>
                            <h5>
                            - I don't believe in you, I only believe in God
                            </h5>
                            <h5>
                            - My goal is i can't stop loving you
                            </h5>
                            <h5>
                            - I wish i was cute and funny
                            </h5>
                        </div>
                </div>
            </div>
        </div>
    );
};
export default About;