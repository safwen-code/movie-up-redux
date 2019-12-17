import React from 'react'
import './movies.css'
import Rates from './Rates'

const Searchbar = (props) => {
    return (

        <div class="container d-flex justify-content-start">
            <input onChange={props.changesearchbar}
                type="text" aria-label="First name"
                className="form-control w-50  "
                placeholder=" Give me a key to search" />
            <button type="button" onClick={props.filter} class="btn btn-primary ">Search</button>

            <h2 style={{ margin: "36px" }}> <Rates
                rating={props.rates}
                rateChange={props.rateChange}
                isClickeble={true}
                filterrates={props.filterrates}


            /></h2>

        </div>
    )
}

export default Searchbar
