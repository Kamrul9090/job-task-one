import React from 'react';
const PersonData = ({ personData, setPersonData }) => {
    const { _id, date, time, location, gender } = personData;
    return (
        <div onClick={() => setPersonData(personData)} className='bg-slate-400 p-3 mt-5 rounded-sm cursor-pointer'>
            <div className='flex justify-between items-center'>
                <p>{_id}:{location}</p>
                <small>{date}</small>
            </div>
            <p>{gender}</p>
        </div>
    );
};

export default PersonData;