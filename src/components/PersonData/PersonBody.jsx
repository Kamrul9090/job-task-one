import React from 'react';

const PersonBody = ({ personData }) => {
    const { name, gender, date, _id, time, location, image } = personData;
    return (
        <div className='w-full flex items-center p-10'>
            <div className='w-1/2'>
                <div className='font-bold'>
                    <h1 className='text-2xl'>{_id}</h1>
                    <p>Person Detected</p>
                </div>
                <div className='mt-5'>
                    <p>Name: {name}</p>
                    <p>Location: {location}</p>
                    <p>Date: {date}</p>
                    <p>Time: {time}</p>
                </div>
                <div className='mt-5'>
                    <h2 className='text-xl'>Description:</h2>
                    <p className='font-semibold'>{name} Detected at {location} on {date}</p>
                </div>
            </div>
            <div className='w-1/2'>
                <h1 className='text-3xl'>{gender}</h1>
                <img src={image} className='w-1/2' alt="" srcset="" />
            </div>
        </div>
    );
};

export default PersonBody;