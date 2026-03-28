import React, { useState } from "react";
import piggy from "../assets/porco.png";

const Nav = ({handleGreasing, sortFoo, toggleForm, isFormVisible}) => {
	const [sort, setSort] = useState(false)
	const [sortValue, setSortValue] = useState("all")
	function handleChange(e){
		setSortValue(e.target.value)
		sortFoo(e.target.value)
	}
	function handleSort() {
		const nextSort = !sort
		setSort(nextSort)
		handleGreasing(nextSort)		
	}

	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<button onClick={handleSort}>{sort ? "All" : "Greased"}</button>
			<select onChange={ (e) => handleChange(e)}>
				<option value="all">All</option>
				<option value="weight">Weight</option>
				<option value="name">Name</option>
			</select>
			<button onClick={toggleForm}>{isFormVisible ? "Cancel":"Add A Pig" }</button>
		</div>
	);
};

export default Nav;
