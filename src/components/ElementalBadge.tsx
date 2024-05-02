import React from "react";
import { Badge, Image } from "react-bootstrap";
import poison from "../assets/icons/poison.svg";
import bug from "../assets/icons/bug.svg";
import dark from "../assets/icons/dark.svg";
import normal from "../assets/icons/normal.svg";
import fire from "../assets/icons/fire.svg";
import grass from "../assets/icons/grass.svg";
import rock from "../assets/icons/rock.svg";
import steel from "../assets/icons/steel.svg";
import flying from "../assets/icons/flying.svg";
import fighting from "../assets/icons/fighting.svg";
import ghost from "../assets/icons/ghost.svg";
import ground from "../assets/icons/ground.svg";
import fairy from "../assets/icons/fairy.svg";
import psychic from "../assets/icons/psychic.svg";
import dragon from "../assets/icons/dragon.svg";
import ice from "../assets/icons/ice.svg";
import electric from "../assets/icons/ice.svg";
import water from "../assets/icons/ice.svg";

const ElementalBadge = ({ element }) => {
	const icons = {
		bug,
		poison,
		dark,
		normal,
		fire,
		grass,
		rock,
		steel,
		flying,
		fighting,
		ghost,
		ground,
		fairy,
		psychic,
		dragon,
		ice,
		electric,
		water
	};
	const colors={
		bug:"#90C12C",
		poison:"#9141CB",
		dark:"#624D4E",
		normal:"#9FA19F",
		fire:"#E62829",
		grass:"#3FA129",
		rock:"#AFA981",
		steel:"#60A1B8",
		flying:"#81B9EF",
		fighting:"#FF8000",
		ghost:"#704170",
		ground:"#915121",
		fairy:"#EF70EF",
		psychic:"#EF4179",
		dragon:"#5060E1",
		ice:"#3DCEF3",
		electric:"#FAC000",
		water:"#2980EF"
	}
	return (
		<>
			<Image
				alt="poison"
				src={icons[element]}
				width="20px"
				style={{ backgroundColor: `${colors[element]}`, padding: 4 }}
				roundedCircle
			/>
		</>
	);
	// switch (element) {
	// 	case "poison":
	//     console.log('ok')
	// 		return (
	// 			<Badge className="text-uppercase" style={{backgroundColor:"#9141CB"}}>
	// 				{element}
	// 			</Badge>
	// 		);

	// }
};

export default ElementalBadge;
