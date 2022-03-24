import React, { useEffect, useState } from 'react'
export default function Card({ brandName, img, phoneName, id }) {
    const [modalData, setModalData] = useState({})
    const showMore = (id) => {
        console.log(id)
    }


    return (
        <div className="d-flex align-items-center justify-content-center">
            <div className="card border-dark w-100 p-0 text-center" >
                <div className="card-header bg-transparent ">
                    <h5 className="card-text">{phoneName}</h5>
                    <small>From</small>
                    <h5 className="card-title">{brandName}</h5>
                </div>
                <div
                    className="card-body text-dark"
                >
                    <img
                        src={img}
                        className="card-img-top"
                        style={{ objectFit: 'contain' }}
                        height={200} alt={phoneName}
                    />
                </div>
                <div
                    className="card-footer bg-transparent"
                >
                    <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        className="btn btn-outline-dark d-block mx-auto"
                        onClick={() => showMore(id)}
                    >
                        Show More
                    </button>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">{phoneName} By {brandName}</h5>
                                </div>
                                <div className="modal-body">
                                    <img src={img} alt={phoneName} />
                                    <div>
                                        {/* <h5>{modalData}</h5> */}
                                        {
                                            console.log(modalData.mainFeatures)}
                                    </div>
                                </div>
                                <div className="modal-footer align-items-center justify-content-center">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
