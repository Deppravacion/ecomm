import React from "react";

const RadioBase = ( {title, id, type, name, value, ...props}) => (
    <label>
        <input className="" {...props} />
    </label>
)


export default RadioBase