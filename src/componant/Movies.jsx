import React from 'react'
import Rates from './Rates';
import { Button, CardFooter, CardTitle } from 'reactstrap'
import { connect } from "react-redux"
import { Dele_task } from '../action/action_task'
import Modalc from '../componant/Modalc'
import { Link } from 'react-router-dom'

class movies extends React.Component {
    state = {
        isShow: false
    };
    toggle = () => this.setState({ isShow: !this.state.isShow });

    render() {
        const { id, titel, link, rates } = this.props.itemmovies;
        return (
            <div>
                <div class="card-group " >

                    <div class="card">
                        <img class="card-img-top width:125px" style={{
                            width: "207px",
                            height: "301px"
                        }} src={link} alt="" />
                        <div class="card-body">
                            <Link to={`/detail/${id}`}>
                                <CardTitle>
                                    <h6 className='title'>{titel}</h6>
                                </CardTitle>
                            </Link>

                            <p class="card-text"></p>

                            <Rates rating={rates} isClickeble={false} />
                        </div>
                        <CardFooter>

                            {/* <Button onClick={() => this.props.DELET_Task()}>delete</Button> */}
                            <Button onClick={() => this.props.Dele_task(id)}

                            >delete</Button>
                            <Button onClick={() => this.toggle()}>
                                edite
                            </Button>

                        </CardFooter>
                    </div>
                    {this.state.isShow ? (
                        <Modalc
                            listmovie={this.props.itemmovies}
                            isOpen={this.state.isShow}
                            toggle={this.toggle}
                            addNewMovie={this.props.addNewMovie}
                            isEdit={true}
                        />) : ""}
                </div>

            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    Dele_task: id => dispatch(Dele_task(id))
})

export default connect(null, mapDispatchToProps)(movies);