import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Pokeball from "./assets/images/pokeball.png";
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
import SearchBox from "./components/SearchBox";

function App() {
	const [pokemonList, setPokemonList] = useState([]);
	const [searchField, setSearchField] = useState("");
	const getData = async () => {
		const pokemonsRaw = await fetch(
			"https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"
		);
		const { results } = await pokemonsRaw.json();
		const arrayOfPokemons = await Promise.all(
			results.map(async (item) => {
				let request = await fetch(item.url);
				let raw = await request.json();

				return {
					name: raw.name,
					images: raw.sprites.other.home,
					id: raw.id,
					types: raw.types,
				};
			})
		);
		console.log(arrayOfPokemons);
		setPokemonList(arrayOfPokemons);
	};

	useEffect(() => {
		getData();
		console.log(pokemonList);
	}, []);
	const onSearch = (event) => {
		setSearchField(event.target.value);
	};
	const getFilteredPokemons = () => {
		return pokemonList.filter((pokemon) =>
			pokemon.name.includes(searchField.toLowerCase())
		);
	};
	const filteredPokemons = getFilteredPokemons()
	return (
		<>
			<Container fluid className="my-5 px-5">
				<Row className="justify-content-center my-2">
					<Col lg={2} className="text-center d-flex">
						<h1>Pokedex</h1>
						<img src={Pokeball} width="60px" height="60px" alt="pokeball" />
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col md={6} xs={12}>
						<SearchBox onSearch={onSearch} />
					</Col>
				</Row>

				<CardList pokemons={filteredPokemons}/>
			</Container>
		</>
	);
}

export default App;
