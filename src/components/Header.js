import React from 'react';
import image from '../img/profile-pic.jpg';

  
export const Header = () => {
    return (
        <div id='backgroundColor'>
            <div id="about">
                <div class="b-example-divider"></div>

                <div className="container col-xxl-8 p-4">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src = {image} className=  "d-block mx-lg-auto img-fluid" alt="heroimage" width="600" height="300"/>
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-4 fw-bold lh-1 mb-3">Hello, I'm Kyle. I look forward to working with you!</h1>
                            <p className="lead">I'm a creative problem solver currently undertaking a coding bootcamp provided by The Ohio Sate University learning to put my passion for coding into skills that I can apply in a new career! I began my coding journey with videogame moddifcation and Excel Visual Basic automations, now I have learned JavaScript, CSS, APIs, and responsive web design.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <a type="button" className="btn btn-outline-light btn-lg px-4" href="" download="">Download Resume</a>
                                <a target ="_blank" rel="noreferrer"type="button" className="btn btn-outline-light btn-lg px-4" href="https://github.com/Risingphoenix86" >View GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;