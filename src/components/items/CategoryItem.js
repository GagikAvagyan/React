import React, {useContext} from 'react';
import {GetAndSendId} from "../useContext/useContext";
import {useHistory} from "react-router-dom";

function CategoryItem ({ id, name}) {

    const history = useHistory();

    const passingIdVal = useContext(GetAndSendId);

    let click = (id) => {
        passingIdVal.getNewId(id);
        history.push(`/${name}`);
    }


    return (
        <button
            className={'componentsBtn'}
            onClick={ () => click(id) }>
            {name}
        </button>
    );
}

export default CategoryItem;
