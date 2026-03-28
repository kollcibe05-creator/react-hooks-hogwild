import React, { useState } from "react";
import Nav from "./Nav";
import PigsContainer from "./PigsContainer";
import Form from "./Form"; 

import hogs from "../porkers_data";

function App() {
	const [pigs, setPigs] = useState(hogs)
	const [showForm, setShowForm] = useState(false)
	function handleGreasing(state) {
		if (state === true) {
			const updatedArr = pigs.filter( pig => pig.greased === true)
			setPigs(updatedArr)
		}else{
			setPigs(hogs)
		}
	} 
	function hideSome (name) {
        if (name) {
            setPigs([...pigs].filter(pig => pig.name !== name))

        }
    }
	function sortFoo(option) {
			const updatedArr = [...pigs].sort((a, b) => {
				if (option === "weight") return b.weight - a.weight
				if(option === "name") return a.name.localeCompare(b.name)
				return 0
			})
			setPigs(updatedArr)
	}
	function addPig(form) {
		setPigs([...pigs, form])
	}
	const  toggleForm = () => setShowForm(!showForm)
	return (
		<div className="App">
			<Nav handleGreasing={handleGreasing} sortFoo={sortFoo} toggleForm={toggleForm} isFormVisible={showForm}/>
			{showForm && <Form addPig={addPig}/>} {/*Short-Circuit Evaluation ~ React's way of rendering components conditionally without needing complex if/else blocks inside JSX */}
			<PigsContainer pigs={pigs} hideSome={hideSome}/>
		</div>
	);
}

export default App;
