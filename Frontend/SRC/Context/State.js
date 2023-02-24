import React, { useEffect, useState } from "react";

import Context from "./Context";

const Statedata = (props) => {
    const [show, setShow] = useState(false);

    const Show = () => {
       
    }

    return (
        <Context.Provider value={{ show, setShow }}>
            {props.children}
        </Context.Provider>
    )

}

export default Statedata