import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Button = (props) => {
	const buttonText = props.text;
	const buttonClick = props.resetClick;
	// your code here
	return <button onClick={() => buttonClick()}>{buttonText}</button>;
};

const Application = () => {
	// your code here
	const [name, setName] = useState("");

	const reset = () => {
		console.log("reset");
		setName("");
	};

	return (
		<main>
			<input
				placeholder='Type your name'
				value={name}
				onChange={(event) => setName(event.target.value)}
			></input>
			<Button text='Reset' resetClick={reset} />
			{name && <h1>Hello {name}</h1>}
		</main>
	);
};

ReactDOM.render(<Application />, document.getElementById("root"));
