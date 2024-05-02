import { auto } from "@popperjs/core";
import React, { useEffect, useState } from "react";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import ElementalBadge from "./ElementalBadge";

const CardList = () => {
	const [pokemonList, setPokemonList] = useState([]);

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
	// const arrayOfPokePromises = results.map((item) => fetch(item.url));
	// 	for await(const request of arrayOfPokePromises){
	// 		const response = await request.json();

	// 	}
	// };

	useEffect(() => {
		getData();
		console.log(pokemonList);
	}, []);

	return (
		<Row
			id="cards"
			xs={2}
			md={3}
			className="justify-content-center  mt-5 gap-4 "
		>
			{pokemonList.map((pokemon) => (
				<Col key={pokemon.id} xs="auto" md={2} className="p-0">
					<Card className="text-bg-light">
						<Card.Header className="border-bottom-0 pb-0 text-bg-light">
							<div className="d-flex  justify-content-between align-items-center ">
								<Card.Title className="text-uppercase fs-6">
									{pokemon.name}
								</Card.Title>
								<h6>
									<ElementalBadge element={pokemon.types[0].type.name} />
								</h6>
							</div>
							<span className="position-absolute top-5 start-5 fs-1 text-secondary ">
								{pokemon.id}
							</span>
						</Card.Header>
						<Card.Img variant="top" src={pokemon.images["front_default"]} />
					</Card>
				</Col>
			))}
		</Row>
	);
};

export default CardList;
