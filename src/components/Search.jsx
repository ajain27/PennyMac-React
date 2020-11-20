import React, { Component,  } from 'react';
import { FaSearch } from 'react-icons/fa';
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

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
    }

    render() {
        return (
            <div>
                <form className="searchForm">
                    <InputGroup className="mb-3">
                        <FormControl style={{ position: "relative", top: "10px" }}
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
            </div>
        );
    }
}

export default Search;
