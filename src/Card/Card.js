import React from 'react'

export default function Card({ brandName, img, phoneName }) {
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
                        height={200} alt=""
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
                    >
                        Show More
                    </button>
                </div>
            </div>
        </div>
    )
}
