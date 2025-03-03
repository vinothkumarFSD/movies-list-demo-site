import React from 'react';
import styles from './footer.module.css';
const Footer =()=>{
    return(
        <footer className={`sticky-footer ${styles.container}`}>
            <p>Copyright © Your Website 2025</p>
        </footer>
    )
}
export default Footer;