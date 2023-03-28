import React from 'react';
import Berat from '../../assets/LevandBeratKandili.gif';

const PopUp = ({ setShowModal }) => {
    const handleClose = (e) => {
        if (e.target.id === "wrapper") {
            setShowModal(false)
        }
    }
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-[1020]' id='wrapper' onClick={handleClose}>
            <div className='w-[90%] lg:w-[600px] lg:mx-auto flex flex-col'>
                <div className='bg-transparent p-2 flex justify-center items-center rounded-md'>
                    <img src={Berat} alt="Berat Kandili" className='rounded-md' />
                </div>
            </div>
        </div>
    )
}

export default PopUp