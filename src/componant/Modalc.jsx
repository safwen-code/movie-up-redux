import React, { Component } from "react";
import { Modal, Input, Button } from "reactstrap";
import { connect } from "react-redux";
import { Add_task, Edite_task } from "../action/action_task";

class Modalc extends Component {
    state = {

        id: this.props.isEdit ? this.props.listmovie.id : '',
        titel: this.props.isEdit ? this.props.listmovie.titel : '',
        link: this.props.isEdit ? this.props.listmovie.link : '',
        rates: this.props.isEdit ? this.props.listmovie.rates : ''
    };
    changeHandler = e => {
        // console.log("TCL: ModalComp -> [e.target.name]", [e.target.name]);
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleClick = () =>
        this.props.isEdit
            ? this.props.Edite_task(this.state)
            : this.props.Add_task({
                ...this.state,
                id: Date.now()
            })
    render() {
        // console.log(this.props.Edite_task)

        // console.log(this.props.listmovie)
        // console.log(this.props.isEdit);
        // console.log("TCL: ModalComp -> render -> this.props", this.props);
        const { isOpen, toggle, isEdit } = this.props;
        return (

            <Modal isOpen={isOpen} toggle={() => toggle()}>
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalPopoversLabel">
                        {isEdit ? 'Edit Movie...' : 'Add Movie...'}
                    </h5>
                    <button
                        aria-label="Close"
                        className="close"
                        data-dismiss="modal"
                        type="button"
                        onClick={() => toggle()}
                    >
                        <span aria-hidden={true}>×</span>
                    </button>
                </div>
                <div className="modal-body">
                    <Input style={{ width: "196px" }}
                        type="text"
                        name="titel"
                        placeholder="Enter a movie name..."
                        onChange={this.changeHandler}
                        defaultValue={this.state.titel}
                    />
                    <Input style={{ width: "398px" }}
                        type="text"
                        name="link"
                        placeholder="Enter a movie poster..."
                        onChange={this.changeHandler}
                        defaultValue={this.state.link}
                    />
                    <Input style={{ width: "398px" }}
                        type="text"
                        name="rates"
                        placeholder="Enter a movie rate..."
                        onChange={this.changeHandler}
                        defaultValue={this.state.rates}
                    />
                </div>
                <div className="modal-footer">
                    <div className="left-side">
                        <Button
                            className="btn-link"
                            color="default"
                            onClick={() => {
                                toggle();
                                this.handleClick()
                            }}
                            type="button"
                        >
                            {isEdit ? 'save movie' : 'add movie'}
                        </Button>
                    </div>

                    <div className="right-side">
                        <Button className="btn-link" color="danger" type="button">
                            delete
            </Button>
                    </div>
                </div>
            </Modal>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    Add_task: x => dispatch(Add_task(x)),
    Edite_task: x => dispatch(Edite_task(x))
})
export default connect(null, mapDispatchToProps)(Modalc);