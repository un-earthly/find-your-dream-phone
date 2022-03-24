import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';

export default function Navbar() {
    const [cardData, setCardData] = useState([])
    const [search, setSearch] = useState('');
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
                            console.log(cd)
                            return <Card brandName={cd.brand} img={cd.image} phoneName={cd.phone_name} />
                        })
                    }
                </div>
            </div>
        </>
    )
}
