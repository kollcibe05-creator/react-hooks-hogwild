import React from "react";
import Pig from "./Pig"
function PigsContainer ({pigs,hideSome}) {
    return (
        <div className="ui grid container">
            {pigs.map(pig => <Pig key={pig.name} pig={pig} hideSome={hideSome}/>)}
        </div>
    )
}

export default PigsContainer;