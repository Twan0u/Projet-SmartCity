import React from "react";

function Item(props) {
    return(
        <tr>
            <td width="5%"><i className={props.icon}></i></td>
            <td>{props.date} : {props.title}</td>
            <td className="level-right"><a className="button is-small is-info" href={props.link}><i
                className="fa fa-chevron-right"></i></a></td>
        </tr>
    );
}
export default Item;