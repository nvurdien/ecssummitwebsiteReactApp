import React from 'react'
import Card from "../card";

export const CardList = ({members}) => {
    return (
        // uk-scrollspy="cls: uk-animation-fade; target: > div > figure; repeat: true"
        <div className="uk-flex uk-flex-center uk-margin-auto uk-margin-vertical uk-grid-small"  uk-grid="">
            {
                members.map((user, i) => {
                    return (
                        <Card
                            key={members[i].id}
                            image={members[i].image}
                            name={members[i].name}
                            title={members[i].title}
                            description={members[i].description}
                            email={members[i].email}
                            github={members[i].github}
                            linkedin={members[i].linkedin}  />
                    );
                })
            }
        </div>
    )
};