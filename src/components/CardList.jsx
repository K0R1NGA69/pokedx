import { auto } from "@popperjs/core";
import React, { useEffect, useState } from "react";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import ElementalBadge from "./ElementalBadge";

const CardList = ({pokemons}) => {
	
	return (
		<Row
			id="cards"
			xs={2}
			md={3}
			className="justify-content-center  mt-5 gap-4 "
		>
			{pokemons.map((pokemon) => (
				<Col key={pokemon.id} xs="auto" md={2} className="p-0">
					<Card className="text-bg-light">
						<Card.Header className="border-bottom-0 pb-0 text-bg-light">
							<div className="d-flex justify-content-between ">
								<Card.Title className="text-uppercase fs-6">
									{pokemon.name}
								</Card.Title>
								<div className="d-flex justify-content-between align-items-center">
								{pokemon.types.map(({type}) => (<ElementalBadge element={type.name} />))}
									
								</div>
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
