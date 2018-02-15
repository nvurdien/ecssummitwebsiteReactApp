import React from 'react'

export const Title = ({title, image, subtext}) => {

    const backgroundImageStyle = {
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center'
    };
    const parallaxStyles = {
        transform: 'scale(0.5)',
        opacity: '0',
        color: 'white'
    };

    return <div>
        <div className="uk-background-cover uk-overflow-hidden uk-light uk-flex uk-background-blend-multiply uk-background-primary uk-height-large uk-flex-center uk-flex-middle" style={backgroundImageStyle}>
        <div className="uk-width-1-2@m uk-text-center">
            <div className="uk-overlay uk-flex-center">
                <br />
                    <h1 className="uk-heading-line">{title}</h1>
                    <p uk-parallax="opacity: 0,1; scale: 0.5,1; viewport: 0.5;" style={parallaxStyles}>{subtext}</p>
            </div>
        </div>
    </div>
    </div>
};