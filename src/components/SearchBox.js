import React from 'react'

const SearchBox = (props) => {
    return(
        <input className='ba bg-lightest-blue ma2 pa2 b--blue' type='search' placeholder='search players' onChange={props.onChanged} />
    );
}

export default SearchBox;