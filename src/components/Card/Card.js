import React from 'react';

const Card = (props) => {
    const { name, email } = props;
    return(
        <div className='bg-light-green dib br3 ma3 pa3 grow bw2 shadow-5 fl w-30'>
            <img alt='player pic' src={`https://robohash.org/${name}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <h3>{email}</h3>
            </div>
        </div>
    );
}

export default Card;