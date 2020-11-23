import React, { Component, } from 'react';
import { FaSearch } from 'react-icons/fa';
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import '../styles/search.css'

class Search extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
        this.state = {
            searchTerm: '',
        };
    };

    onSearch = () => {
        const searchTerm = this.inputRef.current.value;
        this.setState(
            { searchTerm: searchTerm },
            () => this.props.searchTerm(this.state.searchTerm)            
        )
        this.inputRef.current.value = ''
    }

    render() {
        return (
            <>
                <form className="searchForm">
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Search a movie"
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                            ref={this.inputRef}
                        />
                        <FaSearch className="search-icon" />
                        <InputGroup.Append>
                            <Button variant="outline-primary" className="searchButton" onClick={this.onSearch}>Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </form>
            </>
        );
    }
}

export default Search;
