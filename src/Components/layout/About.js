import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About Weird Thing</h4>
            <p>
                This is place where you can feel free to post all sorts of crazy and weird ideas you have in mind.
                Share your ideas with other weirdos and get inspired by them too.
            <br />
                <Link to='/signup'>
                    Join The Gang Now
            </Link>
            </p>
        </div>
    )
}

export default About