import React from 'react';

const Title = ({children}) => {
    return (
        <div className=''>
          <h2 className='text-5xl font-bold'>{children}</h2>
        </div>
    );
};

export default Title;