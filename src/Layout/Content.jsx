import React from 'react';
import PropTypes from 'prop-types';
import styles from './content.module.css';
import MovieCard from '../components/MovieCard/MovieCard';
import moviesData from './movies.json';
import DashboardCard from '../components/DashboardCard/DashboardCard';
import ColorCard from '../components/ColorCard/ColorCard';

const Content = ({ addTowishlist, removeFromwishlist }) => {
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: 24
            }}>
                <h1 style={{ margin: 0, fontFamily: 'sans-serif', color: 'blueviolet' }}>Dashboard</h1>
                <button style={{ borderRadius: '10px', border: '1px solid black', backgroundColor: 'white' }} type='button'>
                    <i className="fa-solid fa-download" style={{ color: "##5c09f6" }}></i>
                    <span>Generate Report</span>
                </button>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: 24
            }}>
                <div className='row' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', width:'100%' }}>
                    <div className='col-12 col-sm-12 col-md-6'>
                        <div style={{ margin: '16px' }}>
                            <ColorCard color={'blue'} title={'EARNINGS(MONTHLY)'} value={'$40000'} icon={'calender'} />
                        </div>
                        <div style={{ margin: '16px' }}>
                            <ColorCard color={'green'} title={'TASKS'} value={'50%'} icon={'list'} />
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6'>
                        <div style={{ margin: '16px' }}>
                            <ColorCard color={'green'} title={'EARNINGS(ANNUAL)'} value={'$215000'} icon={'dollar'} />
                        </div>
                        <div style={{ margin: '16px' }}>
                            <ColorCard color={'yellow'} title={'PENDING REQUESTS'} value={'18'} icon={'comments'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                {moviesData.map((movie) => (
                    < MovieCard
                        title={movie.title}
                        category={movie.category}
                        image={movie.image}
                        key={movie.title}
                        addTowishlist={addTowishlist}
                        removeFromwishlist={removeFromwishlist}
                    />
                ))}
            </div>
            <div style={{
                display: 'flex',
                padding: 24
            }}>
                <DashboardCard title={'Earnings Overview'} width={'col-12 col-sm-12 col-md-4'} />
                <DashboardCard title={'Earnings Overview'} width={'col-12 col-sm-12 col-md-8'} />
            </div>
        </>

    )

}

Content.propTypes = {
    addTowishlist: PropTypes.func.isRequired,
    removeFromwishlist: PropTypes.func.isRequired
}

export default Content;