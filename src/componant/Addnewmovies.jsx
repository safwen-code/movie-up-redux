import React, { Component } from "react"
import { Card, CardImg } from "reactstrap"
import Modalc from "./Modalc"

class Addnewmovies extends Component {
    state = {
        isShow: false
    };
    toggle = () => this.setState({ isShow: !this.state.isShow });



    render() {

        return (
            <>
                <Card style={{ width: "10rem", margin: "44px", marginleft: "43px" }} onClick={this.toggle}>
                    <CardImg src="https://icon-library.net/images/add-icon-transparent/add-icon-transparent-24.jpg" />
                </Card>
                <Modalc
                    isOpen={this.state.isShow}
                    toggle={this.toggle}
                    addNewMovie={this.props.addNewMovie}
                    isEdit={false}
                />
            </>
        )


    }
}
export default Addnewmovies;