import React from "react";

function Pig({pig, hideSome}) {
    function handleHide (name) {
        hideSome(name)
    }
    return (
        <article className="pigTile">
                <h1>{pig.name}</h1>
                <img src={pig.image} alt={pig.name} />
                {/* need to be hidden */}
                <h2>{pig.specialty}</h2>
                <h3>{pig.weight}</h3>
                <h2>{pig["highest medal achieved"]}</h2>
                <button onClick={() => handleHide(pig.name)}>HIDE</button>
        </article>
    )
}

export default Pig;