import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const SearchBox = ({ onSearch, searchField }) => {
	return (
		<InputGroup onChange={onSearch}>
			<Form.Control
				type="search"
				placeholder="Search"
				aria-label="Search"
				size="lg"
            
			/>

			<Button variant="outline-danger">Search</Button>
		</InputGroup>
	);
};

export default SearchBox;
