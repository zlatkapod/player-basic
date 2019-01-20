import React from 'react';
import '../css/Search.css';

class Search extends React.Component {
    state = {
        word: ''
    };

    onInputChange = (event) => {
        this.setState({ word: event.target.value})
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        // todo: make sure we call callback from parent component
        this.props.onFormSubmit(this.state.word);
    };

    render() {
        return (
            <div className="ui segment search-bar">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video search</label>
                        <input
                            type="text"
                            value={this.state.word}
                            onChange={this.onInputChange}
                            placeholder="Search for a video..."
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default Search;