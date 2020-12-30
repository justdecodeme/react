import { useState } from "react";
import { FaStar } from "react-icons/fa";

const createArray = (length) => [...Array(length)];

function Star({ selected = false, onSelect }) {
	return <FaStar color={selected ? "red" : "gray"} onClick={onSelect} />;
}

export default function UseStateStarRating({ totalStars = 5 }) {
	const [selectedStars, setSelectedStars] = useState(0);

	return (
		<div>
			<h1>useState StarRating</h1>

			{createArray(totalStars).map((_, i) => (
				<Star
					key={i}
					selected={selectedStars > i}
					onSelect={() => setSelectedStars(i + 1)}
				/>
			))}
			<p>
				{selectedStars} of {totalStars}
			</p>
		</div>
	);
}
