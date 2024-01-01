
import React from 'react';
const Card = ({ className, title, subTitle ,  img ,btn , children}) => {
  return (
    <div className={` text-center h-full  w-full xl:w-1/2   lg:text-left  shadow-xl   rounded-md  ${className}`}>

        <div className='' >{title}</div>
        <div>{img}</div>
       <p className="">{subTitle}</p>
       <div>{children}</div>
       <div>{btn}</div>
      </div>
  );
};


export default Card;
