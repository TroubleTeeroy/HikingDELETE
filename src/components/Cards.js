import React from 'react'
import CardItem from './CardItem'
import "./Cards.css";

function Cards() {
    return (
        <div className='cards'>
            <h1> Check out whatever the hell I turn these cards into</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src='images/img-9.jpg'
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor"
                        label="Placeholder" //one word description here
                        path="/" //put page here
                        />
                        <CardItem 
                        src='images/img-7.jpg'
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor"
                        label="Placeholder" //one word description here
                        path="/" //put page here
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src='images/img-1.jpg'
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor"
                        label="Placeholder" //one word description here
                        path="/" //put page here
                        />
                        <CardItem 
                        src='images/img-4.jpg'
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor"
                        label="Placeholder" //one word description here
                        path="/" //put page here
                        />
                        <CardItem 
                        src='images/img-3.jpg'
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor"
                        label="Placeholder" //one word description here
                        path="/" //put page here
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
