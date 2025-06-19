import React, { useState, useEffect } from "react";

const Home = () => {
	const [color, setColor] = useState("red");
	const [isCycling, setIsCycling] = useState(false);

	const getLightStyle = () => ({
		width: "60px",
		height: "60px",
		borderRadius: "50%",
		margin: "10px auto",
	});

	const toggleCycle = () => {
		setIsCycling((prev) => !prev);
	};

	useEffect(() => {
		if (!isCycling) return;
		const interval = setInterval(() => {
			setColor((prev) => {
				if (prev === "red") return "green";
				if (prev === "green") return "yellow";
				return "red";
			});
		}, 2000);

		return () => clearInterval(interval);
	}, [isCycling]);

	return (
		<>
			
			<div className="traffic-light-container">
				<div
					style={getLightStyle()}
					className={`light ${color === "red" ? "bg-danger" : "bg-dark"}`}
					onClick={() => setColor("red")}
				></div>
				<div
					style={getLightStyle()}
					className={`light ${color === "yellow" ? "bg-warning" : "bg-dark"}`}
					onClick={() => setColor("yellow")}
				></div>
				<div
					style={getLightStyle()}
					className={`light ${color === "green" ? "bg-success" : "bg-dark"}`}
					onClick={() => setColor("green")}
				></div>
			</div>
			<div style={{ textAlign: "center", marginTop: "20px" }}>
				<button onClick={toggleCycle} className="btn btn-secondary">
					{isCycling ? "Stop" : "Start"} Cycle
				</button>
			</div>
		</>
	);
};

export default Home;



