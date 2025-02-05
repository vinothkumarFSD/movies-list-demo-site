import React from 'react';
import PropTypes from 'prop-types';
import styles from './colorCard.module.css';
const ColorCard = ({ value, title, icon, color }) => {
    const geticon=()=>{
        if(icon=== 'calender'){
            return (<i className="fa-solid fa-calendar fa-2x" style={{ color: '#909192' }}></i>)
        }
        else if(icon=== 'list'){
            return (<i className="fa-solid fa-clipboard-list fa-2x" style={{ color: '#909192' }}></i>)
        }
        else if(icon=== 'comments'){
            return (<i className="fa-solid fa-comments fa-2x" style={{ color: '#909192' }}></i>)
        }
        else {
            return (<i className="fa-solid fa-dollar-sign fa-2x" style={{ color: '#909192' }}></i>)
        }
    }
    return (
        <div className={styles.container}>
            <div>
                <h6 style={{ color: color, margin: 0 }}>{title}</h6>
                <h3 style={{ margin: 0 }}>{value}</h3>
            </div>
            <div style={{ margin: 16 }}>
                {geticon()}
            </div>
        </div>
    )
}
ColorCard.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};
export default ColorCard;