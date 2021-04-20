import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="../../videos/video-1.mp4" autoPlay loop muted />
            <h1>/ˈSHitē ˈkampiNG/</h1>
            <p>City Camping</p>
            <div className="hero-btns">
                <Button 
                className="btns" 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    Sign-Up
                    For Newletters and 
                    Updates
                </Button>
                <Button 
                className="btns" 
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                    Watch on YouTube <i className='far fa-play-circle' />
                </Button>           
                <Button 
                className="btns" 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    Donate <i class="fab fa-paypal"></i>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
