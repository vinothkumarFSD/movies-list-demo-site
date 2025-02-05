import React, { useState } from "react";
import PropTypes from 'prop-types';
import styles from './movieCard.module.css';

const MovieCard = ({ title, image, category, addTowishlist, removeFromwishlist }) => {

    const [wished, setWished] = useState(false);

    const handlewished = () => {
        if (wished) {
            setWished(false);
            removeFromwishlist(title);
        } else {
            setWished(true);
            addTowishlist(title);
        }
    }

    return (
        <div className={styles.container}>
            <img src={image} alt={title} className={styles.movieImage} />
            <h4 style={{color:"blueviolet", fontFamily:'inherit'}}>{title}</h4>
            <p style={{fontFamily:'fantasy'}}>{category}</p>
            <button className={styles.button} onClick={() => handlewished()}>
                <i
                    className={`${wished ? 'fa-solid' : 'fa-regular'} fa-heart`}
                    style={{ color: '#ff0000' }}>
                </i>
                &nbsp;
                <span>{wished ? "Remove" : "Add"}</span>
            </button>
        </div>
    )
}

MovieCard.propTypes = {
    title: PropTypes.string.isRequired, // Ensures title is a required string
    image: PropTypes.string.isRequired, // Ensures image is a required string (URL)
    category: PropTypes.string.isRequired, // Ensures category is a required string
    addTowishlist: PropTypes.func.isRequired, // Ensures addTowishlist is a required function
    removeFromwishlist: PropTypes.func.isRequired
};

export default MovieCard;