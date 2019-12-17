import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    movies: state.listmovie
});
const Detail = props => {
    const { movie } = props.match.params;

    const [movieItem] = props.movies.filter(el => {
        return el.id === Number(movie);
    });
    console.log('TCL: movie', movie);

    return (
        <>
            <h1>{movieItem.titel}</h1>
            <iframe
                title='trailer'
                width='1000'
                height='480'
                src={movieItem.trailer}
                frameBorder='0'
                allowFullScreen
            />
            <Button>
                <Link to='/'>Back</Link>
            </Button>
        </>
    );
};

export default connect(mapStateToProps)(Detail);