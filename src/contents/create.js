import React, {Component} from 'react';
import StarRating from "react-star-rating";

const Create = () => {

        return (
            <div>
                <StarRating name="small-rating" caption="Small!" size={30} totalStars={5} rating={3} />
            </div>
        );

};

export default Create;