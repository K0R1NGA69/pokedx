import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
	Button,
	Card,
	InputGroup,
	Col,
	Container,
	Form,
	Row,
} from "react-bootstrap";
import CardList from "./components/CardList";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Container fluid className="my-5 px-5">
				<Row className="justify-content-center my-2">
					<Col lg={2} className="text-center">
						<h1>Pokedex</h1>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col md={6} xs={12}>
						<InputGroup>
							<Form.Control
								type="search"
								placeholder="Search"
								aria-label="Search"
								size="lg"
							/>

							<Button  variant="outline-danger">Search</Button>
						</InputGroup>
					</Col>
				</Row>

				<CardList />
			</Container>
		</>
	);
}

export default App;
