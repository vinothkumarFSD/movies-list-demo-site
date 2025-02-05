import React from "react";
import PropTypes from "prop-types";
import styles from './dashboardCard.module.css';

const DashboardCard = ({ title, width, isAction }) => {
    return (
        <div className={width}>
            <div className={`${styles.container}`}>
                <div className={styles.header}>
                    {title}
                </div>
            </div>
        </div>
    )
}

DashboardCard.propTypes = {
    title: PropTypes.string.isRequired, // Ensures title is a required string
    isAction: PropTypes.bool, // Ensures category is a required string
    width: PropTypes.string.isRequired
};

export default DashboardCard;