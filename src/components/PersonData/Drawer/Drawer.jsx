import React, { useEffect, useState } from 'react';
import { db } from '../../../firebase/firebase'
import { collection, getDocs } from 'firebase/firestore';
import { HiMenu, HiX } from "react-icons/hi";
import PersonData from '../PersonData';
import PersonBody from '../PersonBody';
const Drawer = ({ users, setUsers }) => {
    const [personData, setPersonData] = useState([])
    const [male, setMale] = useState(0);
    const userCollectionRef = collection(db, "data")
    useEffect(() => {
        const getUsers = async () => {
            const datas = await getDocs(userCollectionRef);
            console.log(datas);
            setUsers(datas.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getUsers()
    }, [])

    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content mt-5 flex justify-end items-start">
                <PersonBody personData={personData}></PersonBody>
                <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary float-right"><HiMenu></HiMenu>
                </label>
            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary"><HiX></HiX></label>
                    {
                        users.map(data => <PersonData key={data.id} personData={data} setPersonData={setPersonData}></PersonData>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Drawer;