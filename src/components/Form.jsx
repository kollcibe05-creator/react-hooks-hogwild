import React, { useState } from "react";
function Form ({addPig}) {
    const [formData, setFormData] = useState({
        name: "", 
        specialty: "",
        weight: 0.0,
        "highest medal achieved": "",
        image: ""
    })
    function handleChange(e) {
        const {id, value} = e.target
        setFormData({
            ...formData, 
            [id]: id === "weight" ? parseFloat(value) : value
        })
    }
    function handleSubmit(e) {
        e.preventDefault()
        addPig(formData)
    }
    return (
        <form onSubmit={e => handleSubmit(e)}>
            <label>Name<input id="name" value={formData.name}onChange={e => handleChange(e)}></input></label>
            <label>Specialty<input id="specialty"value={formData.specialty}onChange={e => handleChange(e)}></input></label>
            <label>Weight<input id="weight" value={formData.weight}onChange={e => handleChange(e)}></input></label>
            <label>Highest Medal Achieved<input  id="highest medal achieved" value={formData['highest medal achieved']}onChange={e => handleChange(e)}></input></label>
            <label>Image<input id="image"value={formData.image}onChange={e => handleChange(e)}></input></label>
            <input type="submit" />
        </form>
    )
}
export default Form