import React from 'react';
import Berat from '../../assets/LevandBeratKandili.gif';

const Modal = ({ setShowModal }) => {
    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 -mt-24 lg:mt-0 xs:ml-16 lg:mx-auto z-50 outline-none focus:outline-none xs:w-80 lg:w-10/12"
                onClick={() => setShowModal(false)}
            >
                <div className="relative w-auto my-6 mx-auto">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        {/* <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Modal Title
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                                <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div> */}
                        {/*body*/}
                        <div className="relative p-2 flex-auto">
                            <img src={Berat} alt="Berat Kandili" />
                        </div>
                        {/*footer*/}
                        {/* <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                Close
                            </button>
                            <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                Save Changes
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-lime-600" onClick={() => setShowModal(false)}></div>
        </>
    )
}

export default Modal