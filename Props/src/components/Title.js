import React from "react";
function Title(props){
    let co;
    if (props.style && props.style.color) {
        co = props.style.color;
    } else {
        co = 'black';
    }
    if (props.small) {
        return(<h3 style={{color: co}}>{props.children}</h3>)        
    } else {
        return(<h1 style={{color: co}}>{props.children}</h1>)
    }
}
export default Title;