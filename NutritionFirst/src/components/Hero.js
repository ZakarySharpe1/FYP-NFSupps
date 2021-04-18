import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <h2>NutritionFirst</h2>
            <h3>Supplements & Nutrition, <br />for when you need it the most</h3>
            <Link className="btn" to="/books">View All Supplements</Link>
        </section>
    )
}

export default Hero
