import React from 'react';

const IllutrationImage = () => {
    return (
        <div className='mb-4'>
            <div className='card-Body'style={{padding:'16px'}}>
                <div className='text-center'>
                    <img className='img-fluid px-3 px-sm-4 mt-3 mb-4' style={{ width: '25rem' }}
                        src='https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg'
                        alt='Illustrations' />
                </div>
                <p>
                    Add some quality, svg illustrations to your project courtesy of <a target='_blank' rel="nofollow noreferrer" href='https://undraw.co/'>unDraw</a>
                    ,a constantly updated collection of beautiful svg images that you can use completely free and without attribution!
                </p>
                <a target='_blank' rel='nofollow noreferrer' href='https://undraw.co/'>Browse Illustrations on unDraw <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
            </div>
        </div>
    )
}
export default IllutrationImage;