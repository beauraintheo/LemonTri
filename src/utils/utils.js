/** Rendering specific component according to location */

import React from "react";

import {
	Home,
	Settings,
	Biowaste,
	Score,
	PhotoInput,
	CardBoard,
	Glass,
	Can,
	Cap,
	Papper,
	PlasticCup,
	PapperCup,
	DEE,
	Cigarette
} from "../pages";



export const renderComponent = (location) => {
	switch (location) {
		case "/settings":
			return <Settings />;
		case "/photo":
			return <PhotoInput />
		case "/score":
			return <Score />;
        case "/dechets-alimentaire":
            return <Biowaste />;
		case "/carton":
			return <CardBoard />;
		case "/verre":
			return <Glass />;
		case "/DEE":
			return <DEE />;
		case "/megot":
			return <Cigarette />;
		case "/bouchon":
			return <Cap />;
		case "/canette":
			return <Can />;
		case "/gobelets-en-plastique":
			return <PlasticCup />;
		case "/gobelet-carton":
			return <PapperCup />;
		case "/papier":
			return <Papper />;
		case "/":
		default:
            return <Home />;
	}
}

/** Function to get random number */

export const random = (max) => Math.floor(Math.random() * max);

/** Function to get random number different each time */

export const randomNumber = (number, max) => {
	const n = random(max);

	if (n === number) randomNumber(number, max);
	return n;
}

/** Function to get color according to current note */

export const getColorNote = (note) => {
	switch (note) {
		case 3:
			return "#3BC171";
		case 2:
			return "#EB8440";
		case 1:
		default:
			return "#D94140";
	}
}

/** Function to get message to show according to current note */

export const getMessageNote = (note, t) => {
	switch (note) {
		case 3:
			return t("Perfect");
		case 2:
			return t("Unsuitable");
		case 1:
		default:
			return t("Dumpster");
	}
}
