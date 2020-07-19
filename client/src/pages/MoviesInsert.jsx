import React, { Component } from 'react';
import api from '../api';

import styled from 'styled-components';

const Title = styled.h1.attrs({
    className: 'h1'
})``;

const Wrapper = styled.div.attrs({
    className: 'form-group'
})`
    margin: 0 30px;
`;

const Label = styled.label`margin: 5px;`;

const InputText = styled.input.attrs({
    className: 'form-control'
})`
    margin: 5px;
`;

const Button = styled.button.attrs({
    className: 'btn btn-primary'
})`
    margin: 15px 15px 15px 5px;
`;

const CancelButton = styled.a.attrs({
    className: 'btn btn-danger'
})`
    margin: 15px 15px 15px 5px;
`;

export default class MoviesInsert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            rating: '',
            time: ''
        };
        this.handleChangeInputName = this.handleChangeInputName.bind(this);
        this.handleChangeInputRating = this.handleChangeInputRating.bind(this);
        this.handleChangeInputTime = this.handleChangeInputTime.bind(this);
    }

    async handleChangeInputName(e) {
        const name = e.target.value;
        this.setState({ name });
    }

    async handleChangeInputRating(e) {
        const rating = e.target.validity.valid ? e.target.value : this.state.rating;
        this.setState({ rating });
    }

    async handleChangeInputTime(e) {
        const time = e.target.value;
        this.setState({ time });
    }

    render() {
        return (
            <div>
                <p>In this page you'll see the form to add a movie</p>
            </div>
        );
    }
}
