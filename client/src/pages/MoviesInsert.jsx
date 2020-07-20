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
        this.handleIncludeMovie = this.handleIncludeMovie.bind(this);
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

    async handleIncludeMovie(e) {
        const { name, rating, time } = this.state;
        const arrayTime = time.split('/');
        const payload = { name, rating, time: arrayTime };

        await api.insertMovie(payload).then((res) => {
            window.alert('Movie inserted successfully');
            this.setState({
                name: '',
                rating: '',
                time: ''
            });
        });
    }

    render() {
        const { name, rating, time } = this.state;
        return (
            <Wrapper>
                <Title>Create Movie</Title>

                <Label>Name:</Label>
                <InputText type='text' value={name} onChange={this.handleChangeInputName} />

                <Label>Rating: </Label>
                <InputText
                    type='number'
                    step='0.1'
                    lang='en-US'
                    min='0'
                    max='10'
                    pattern='[0-9]+([,/.][0-9]+)?'
                    value={rating}
                    onChange={this.handleChangeInputRating}
                />

                <Label>Time: </Label>
                <InputText type='text' value={time} onChange={this.handleChangeInputTime} />

                <Button onClick={this.handleIncludeMovie}>Add Movie</Button>
                <CancelButton href={'/movies/list'}>Cancel</CancelButton>
            </Wrapper>
        );
    }
}
