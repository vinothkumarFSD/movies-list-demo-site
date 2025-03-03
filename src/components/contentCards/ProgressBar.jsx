import React from 'react';
import styles from './progressbar.module.css';

const ProgressBar = () => {

    return (
        <div className='mb-4'>

            <div className='card-Body' style={{ padding: '10px' }}>
                <h4 className='small font-weight-bold'>Server Migration <span className='float-right'>20%</span>
                </h4>
                <div className='progress mb-4'>
                    <div className='progress-bar bg-danger'
                        style={{ width: '20%' }} aria-valuenow='20' aria-valuemin='0' aria-valuemax='100'>
                    </div>
                </div>
                <h4 className='small font-weight-bold'>Sales Tracking<span className='float-right'>40%</span>
                </h4>
                <div className={styles.card}>
                    <div className='progress mb-4'>
                        <div className='progress-bar bg-warning'
                            style={{ width: '40%' }} aria-valuenow='40' aria-valuemin='0' aria-valuemax='100'>
                        </div>
                    </div>
                    <h4 className='small font-weight-bold'>Custom Database<span className='float-right'>60%</span>
                    </h4>
                    <div className='progress mb-4'>
                        <div className='progress-bar'
                            style={{ width: '60%' }} aria-valuenow='60' aria-valuemin='0' aria-valuemax='100'>
                        </div>
                    </div>
                    <h4 className='small font-weight-bold'>Payout Details<span className='float-right'>80%</span>
                    </h4>
                    <div className='progress mb-4'>
                        <div className='progress-bar bg-info'
                            style={{ width: '80%' }} aria-valuenow='80' aria-valuemin='0' aria-valuemax='100'>
                        </div>
                    </div>
                    <h4 className='small font-weight-bold'>Account Setup<span className='float-right'>Complete!</span>
                    </h4>
                    <div className='progress mb-4'>
                        <div className='progress-bar bg-success'
                            style={{ width: '100%' }} aria-valuenow='100' aria-valuemin='0' aria-valuemax='100'>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProgressBar;