import React, { useState } from "react";
import piggy from "../assets/porco.png";

const Nav = ({handleGreasing, sortFoo, pickState}) => {
	const [sort, setSort] = useState(false)
	const [sortValue, setSortValue] = useState("all")
	const [hideForm, setHideForm] = useState(true)
	function handleChange(e){
		setSortValue(e.target.value)
		// updateSortFoo()
		sortFoo(e.target.value)
	}
	// console.log(sortValue)
	// function updateSortFoo() {
	// 		sortFoo(sortValue)
	// }
	function handleSort() {
		const nextSort = !nextSort
		setSort(nextSort)
		handleGreasing(nextSort)		
	}
	function formStance() {
		setHideForm(!hideForm)
		pickState(hideForm)
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
			<button onClick={formStance}>{hideForm ? "Cancel":"Add A Pig" }</button>
		</div>
	);
};

export default Nav;
