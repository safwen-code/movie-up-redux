import React from 'react'
import Movies from './Movies'
import { Row } from 'reactstrap'



const Listmovies = ({ itemmovies }) => {
    return (
        <div>
            <div className="container d-flex justify-content-around">

                <Row style={{
                    margin: "23px",
                    padding: "17px",
                    justifycontent: "space-between",
                    flexdirection: "row",
                    display: "contents"
                }}>
                    {itemmovies.map((el, i) => (
                        <div class="col-sm "><Movies itemmovies={el} key={i} /></div>

                    ))}
                </Row>


            </div>
        </div>


    )
}



export default Listmovies