import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.module.css';

const Header = ({wishCount}) => {
    return (
        <div className={styles.header}>
            <img
                className={styles.headerLogo}
                src='https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/36b885107148725.5fa08100392dd.jpg'
                alt='logo'
            />
            <div>
                <input className={styles.searchInput} type='text' placeholder='Search for...' />
                <button className={styles.searchBtn} type='button'>
                <i className="fa-solid fa-magnifying-glass" style={{color:'#ccc'}}></i>
                </button>
            </div>
            <button className={styles.wishlist} type='button'>
                <i
                    className="fa-solid fa-heart"
                    style={{ color: "#f20202" }}>
                </i>
                <span>{wishCount}</span>
            </button>
        </div>

    );
}
Header.propTypes = {
    wishCount: PropTypes.number.isRequired, // Ensure wishCount is a required number
};

export default Header;