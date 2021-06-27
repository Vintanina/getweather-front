import React from "react";
import "./App.scss";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
	faCloudUploadAlt,
	faTint,
	faWind,
} from "@fortawesome/free-solid-svg-icons";

export default function App() {
	const background = "app app--rainy";

	return (
		<div className={background}>
			<p className="app__weather">Clear sky</p>
			<p className="app__temperature">50°C</p>
			<ul className="app__icons">
				<li className="item">
					<Icon icon={faWind} />
				</li>
				<li className="item">
					<Icon icon={faCloudUploadAlt} />
				</li>
				<li className="item">
					<Icon icon={faTint} />
				</li>
			</ul>
			<ul className="app__parameters">
				<li className="precipitation item">76%</li>
				<li className="cloud item">90</li>
				<li className="wind item">65</li>
			</ul>
			<p className="app__city">Antananarivo, Madagascar</p>
		</div>
	);
}
