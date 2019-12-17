import React, { Component } from 'react'
import Listmovie from './Listmovies'
import Searchbar from './Searchbar'
import Addnewmovies from './Addnewmovies'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Detail from './Detail'

class Moviecontainer extends Component {
    state = {
        searchinput: "",
        serchrate: 0,
        filteredMovies: []
    };

    //Handlers

    barsearchhanderl = e => this.setState({ searchinput: e.target.value });
    rateSearchHandler = rates => this.setState({ serchrate: rates });
    // addNewMovie = newMovie =>
    //     this.setState({
    //         ...this.state,
    //         listmovie: [...this.state.listmovie, newMovie]
    //     });
    flterd = e => {
        this.setState({
            filteredMovies: this.state.listmovie.filter(el =>
                el.titel.toLowerCase().includes(this.state.searchinput.toLowerCase())
            )
        });
    };

    // filterrates = rates => {
    //   this.setState({
    //     serchrate: this.state.listmovie.filter(
    //       el => el.rates >= this.state.serchrate
    //     )
    //   });
    // };
    render() {
        return (
            <div class="container ">

                <BrowserRouter>
                    <Searchbar
                        changesearchbar={this.barsearchhanderl}
                        filterrates={this.flterd}
                        rates={this.state.serchrate}
                        rateChange={this.rateSearchHandler}
                    // filterrates={this.filterrates}
                    />
                    <Switch>
                        <Route
                            exact
                            path='/'
                            render={() => (
                                <Listmovie
                                    itemmovies={
                                        this.state.searchinput
                                            ? this.props.items.filter(el =>
                                                el.titel
                                                    .toLowerCase()
                                                    .includes(this.state.searchinput.toLowerCase().trim())
                                            )
                                            : this.props.items.filter(
                                                el => el.rates >= this.state.serchrate
                                            )
                                    }
                                // listmovie={this.listmovie}
                                />
                            )}
                        />
                        <Route exact path='/detail/:movie' component={Detail} />
                    </Switch>
                    <Addnewmovies addNewMovie={this.addNewMovie} />
                </BrowserRouter>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return { items: state.listmovie }
};

export default connect(mapStateToProps)(Moviecontainer);
