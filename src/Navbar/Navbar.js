import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';
import Modal from '../Modal/Modal';

export default function Navbar() {
    const [cardData, setCardData] = useState([])
    const [modal, setModal] = useState({})
    const [search, setSearch] = useState('iphone');
    const userInput = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/phones?search=${search}`)
            .then(res => res.json())
            .then((res) => setCardData(res.data))
    }, [search])

    
    return (
        <>
            <div className="sticky-top bg-dark py-4 w-100 mb-3">
                <div className="input-group container ">
                    <input type="text" id="phoneName" className="form-control border border-dark" placeholder="Phone Brand Name"
                        aria-label="Phone Brand Name" onChange={userInput} value={search} aria-describedby="findPhone" />
                </div>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-2 align-items-center justify-content-center">
                    {
                        cardData.map((cd) => {
                            return <Card brandName={cd.brand} img={cd.image} key={cd.slug} id={cd.slug} phoneName={cd.phone_name} />
                        })
                    }
                </div>
            </div>
        </>
    )
}
