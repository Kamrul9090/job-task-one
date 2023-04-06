import React from 'react';

const Header = ({ users }) => {
    console.log(users.length);
    return (
        <div className='flex flex-row justify-between p-5 bg-slate-400 text-white'>
            <div>
                <h1 className='text-3xl font-bold font-mono'>SECQUR<span className='text-red-700'>AI</span>SE</h1>
            </div>
            <div className='space-x-2'>
                <button className='btn btn-primary'>
                    {
                        users.filter(p => p.gender !== 'Male').length
                    }
                </button>
                <button className='btn btn-primary'>
                    {
                        users.filter(p => p.gender !== 'Female').length
                    }
                </button>
            </div>
        </div>
    );
};

export default Header;