import React from "react";

export default props => {
    //console.log("props: ",  props);
    return(
        <ul className="nav nav-tabs justify-content-center">
            {props.children}
        </ul>
    )
}