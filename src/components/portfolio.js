import React from 'react'
import '../App.css';
import project1 from '../img/Groovy-movie.PNG';
import project2 from '../img/Project-picker-app.PNG';
import HW1 from '../img/Google-book-search.PNG';
import HW2 from '../img/Tech-blog.PNG';
import HW3 from '../img/Weather-dash.PNG';
import HW4 from '../img/Note-taker.PNG';

export const Portfolio = () => {
    return (
        <>
            <div className="container p-5" id="portfolio">
            <h1 className='text-center p-4'>Portfolio</h1>

                <div className="row g-3">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card text-center h-100">
                            <img src={project1} className="card-img-top" alt="Groovy Movie"/>
                            <div className="card-body">
                                <h5 className="card-title text-uppercase fw-bold">Groovy Movie</h5>
                                <p className="card-text">An application that allows you to randomly choose 5 movies to watched based on the genre and year that you are interested in.</p>
                                <a href="https://github.com/lydiawdesign/Movie-Picker-App" className="btn btn-outline-dark" target='_blank' rel="noreferrer">See GitHub Project</a>
                                <a href="https://lydiawdesign.github.io/Movie-Picker-App/" className="btn btn-outline-dark m-2" target='_blank' rel="noreferrer">Live Site</a>
                            </div>
                        </div>
                    </div>
                

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card text-center h-100">
                            <img src={project2} className="card-img-top" alt="Project Picker"/>
                            <div className="card-body">
                                <h5 className="card-title text-uppercase fw-bold">Project Picker</h5>
                                <p className="card-text">This application allows users to share and find ideas for their next coding project.</p>
                                <a href="https://github.com/Risingphoenix86/Project-Picker" className="btn btn-outline-dark" target='_blank' rel="noreferrer">See GitHub Project</a>
                                <a href="https://project-picker-project-2.herokuapp.com/" className="btn btn-outline-dark m-2" target='_blank' rel="noreferrer">Live Site</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card text-center h-100">
                            <img src={HW1} class="card-img-top" alt="Google Book Search Engine"/>
                            <div class="card-body">
                                <h5 class="card-title text-uppercase fw-bold">Book Search Engine</h5>
                                <p class="card-text">A webpage that allows a user to search Google for books, see photos of the covers, as well as add and remove them form the list</p>
                                <a href="https://github.com/Risingphoenix86/HW21-Book-Search-Engine" class="btn btn-outline-dark" target='_blank' rel="noreferrer">See GitHub Project</a>
                                <a href="https://hw21-book-search-engine.herokuapp.com/" class="btn btn-outline-dark m-2" target='_blank' rel="noreferrer">Live Site</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card text-center h-100">
                            <img src={HW2} class="card-img-top" alt="Tech Blog"/>
                            <div class="card-body">
                                <h5 class="card-title text-uppercase fw-bold">Tech Blog Wordpress site</h5>
                                <p class="card-text">A site that allows a user to create and comment on blog posts.</p>
                                <a href="https://github.com/Risingphoenix86/HW14_tech_blog" class="btn btn-outline-dark" target='_blank' rel="noreferrer">See GitHub Project</a>
                                <a href="https://homework14-tech-blog.herokuapp.com/" class="btn btn-outline-dark m-2" target='_blank' rel="noreferrer">Walkthrough Video</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card text-center h-100">
                            <img src={HW3} class="card-img-top" alt="5Day Weather Dash"/>
                            <div class="card-body">
                                <h5 class="card-title text-uppercase fw-bold">Weather Dashboard</h5>
                                <p class="card-text">A webpage that pulls in weather data for the coming 5 days for a searched city, and allows a user to go back to previously searched cities.</p>
                                <a href="https://github.com/Risingphoenix86/WeatherDash" class="btn btn-outline-dark" target='_blank' rel="noreferrer">See GitHub Project</a>
                                <a href="https://risingphoenix86.github.io/WeatherDash/" class="btn btn-outline-dark m-2" target='_blank' rel="noreferrer">Walkthrough Video</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card text-center h-100">
                            <img src={HW4} class="card-img-top" alt="NOTE TAKER"/>
                            <div class="card-body">
                                <h5 class="card-title text-uppercase fw-bold center">Note Taker</h5>
                                <p class="card-text">An application that can be used to write and save notes.</p>
                                <a href="https://github.com/Risingphoenix86/HW11-NoteTaker" class="btn btn-outline-dark" target='_blank' rel="noreferrer">See GitHub Project</a>
                                <a href="https://hw11-notetakerkl.herokuapp.com/notes" class="btn btn-outline-dark m-2" target='_blank' rel="noreferrer">Live Site</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Portfolio;