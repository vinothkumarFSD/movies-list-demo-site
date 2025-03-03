import React from 'react';
import PropTypes from 'prop-types';
import styles from './content.module.css';
import MovieCard from '../components/MovieCard/MovieCard';
import moviesData from './movies.json';
import DashboardCard from '../components/DashboardCard/DashboardCard';
import ColorCard from '../components/ColorCard/ColorCard';
import LineChart from '../components/charts/Line';
import DoughnutChart from '../components/charts/Doughnut';
import ProgressBar from '../components/contentCards/ProgressBar';
import ProgressCard from '../components/contentCards/ProgressCards';
import Develope from '../components/contentCards/Develope';
import IllutrationImage from '../components/contentCards/IllutrationImage';

const Content = ({ addTowishlist, removeFromwishlist }) => {
    return (
        <>
            <div className={styles.header}>
                <h1 className={styles.title}>Dashboard</h1>
                <a href="#report" className='btn btn-primary shadow-sm'>
                    <i className="fas fa-download"></i>&nbsp;Generate Report
                </a>
            </div>
            <div className={styles.statsContainer}>
                <div className='row'>
                    <div className='col-md-3'>
                        <ColorCard color={'blue'} title={'EARNINGS(MONTHLY)'} value={'$40000'} icon={'calendar'} />
                    </div>
                    <div className='col-md-3'>
                        <ColorCard color={'green'} title={'TASKS'} value={'50%'} icon={'list'} />
                    </div>
                    <div className='col-md-3'>
                        <ColorCard color={'purple'} title={'EARNINGS(ANNUAL)'} value={'$215000'} icon={'dollar'} />
                    </div>
                    <div className='col-md-3'>
                        <ColorCard color={'yellow'} title={'PENDING REQUESTS'} value={'18'} icon={'comments'} />
                    </div>
                </div>
            </div>
            <div className={styles.movieContainer}>
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
            <div className={styles.dashboard}>
                <div className='row'>
                    <DashboardCard title={'Earnings Overview'} width={'col-md-8'}>
                        <LineChart />
                    </DashboardCard>
                    <DashboardCard title={'Revenue Sources'} width={'col-md-4'}>
                        <DoughnutChart />
                    </DashboardCard>
                </div>
                <div className='row'>
                    <div className='col-lg-6 mb-4'>
                        <DashboardCard title={'Projects'}>
                            <ProgressBar />
                        </DashboardCard>
                        
                            <div className='row'>
                                <ProgressCard />
                            </div>
                        
                    </div>
                    <div className='col-lg-6 mb-4'>
                        <DashboardCard title={'Illustrations'}>
                            <IllutrationImage />
                        </DashboardCard>
                        <DashboardCard title={'Development Approach'}>
                            <Develope />
                        </DashboardCard>
                    </div>
                </div>
            </div>
        </>

    )

}

Content.propTypes = {
    addTowishlist: PropTypes.func.isRequired,
    removeFromwishlist: PropTypes.func.isRequired
}

export default Content;