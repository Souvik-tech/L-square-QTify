import React from 'react';
import Button from '../Button/Button';

const Section = ({title , button}) => {
  return (
    <div className='section'>
        <h2>{title}</h2>
        <Button>{button}</Button>
    </div>
  )
}

export default Section