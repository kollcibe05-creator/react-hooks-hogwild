import React, { useState } from "react";
function Form ({addPig, classState}) {
    const cssClass = classState ? "hidden": "visible"
    const [formData, setFormData] = useState({
        name: "", 
        specialty: "",
        weight: 0.0,
        "highest medal achieved": "",
        image: ""
    })
    function handleChange(e) {
        if (e.target.id === 'highest medal achieved') {
            setFormData({
                "highest medal achieved": e.target.value
            })
        }
        setFormData({
            ...formData, 
            [e.target.id]: e.target.value
        })
        setFormData({
            name: "", 
            specialty: "",
            weight: 0.0,
            "highest medal achieved": "",
            image: ""
        })
    }
    function handleSubmit(e) {
        e.preventDefault()
        addPig(formData)
    }
    return (
        <form  className={cssClass} onSubmit={e => handleSubmit(e)}>
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