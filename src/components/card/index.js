import React from 'react'

const Card = ({image, name, title, description, email, github = null, linkedin = null}) => {
    const imageStyle = {
        height: 350,
        width: 300,
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    };
    const iconColor = {
        color: "white",
    };
    return <div>
        <figure className="imghvr-blur" alt={name + "'s headshot"} style={imageStyle}>
            <figcaption className="uk-text-center">
                <h3 style={{paddingBottom: '0', marginBottom:'0'}}>{name}</h3>
                <h4 style={{paddingTop: '0', marginTop:'0'}}>{title}</h4>
                <p>
                    <a style={iconColor} href={"mailto:" + email} aria-label={name + "'s mail link"}><i
                        className="fa fa-envelope fa-lg"/></a>
                    {github ? (<a style={iconColor} href={github} target="_blank" aria-label={name + "'s github link"}
                                  className="uk-margin-left"><i className="fa fa-github-square fa-lg"/></a>) : null}
                    {linkedin ? (
                        <a style={iconColor} href={linkedin} target="_blank" aria-label={name + "'s linkedin link"}
                           className="uk-margin-left"><i className="fa fa-linkedin fa-lg"/></a>) : null}
                </p>
            </figcaption>

        </figure>
    </div>;
};

export default Card;