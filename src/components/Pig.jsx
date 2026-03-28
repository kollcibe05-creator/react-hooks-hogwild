import React from "react";

function Pig({pig, hideSome}) {
    function handleHide (name) {
        hideSome(name)
    }
    return (
        <article className="pigTile">
                <h1>{pig.name}</h1>
                <img src={pig.image} alt={pig.name} />
                {/* needs to be hidden */}
                <div className="specialHidden">
                <h2>{pig.specialty}</h2>
                <h3>{pig.weight}</h3>
                <h2>{pig["highest medal achieved"]}</h2>
                <button onClick={() => handleHide(pig.name)}>HIDE</button>
                </div>
        </article>
    )
}

export default Pig;