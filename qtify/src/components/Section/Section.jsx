import React from 'react';
import Button from '../Button/Button';

const Section = ({title}) => {
  return (
    <div className='section'>
        <h2>{title}</h2>
        <Button>Collapse</Button>
    </div>
  )
}

export default Section