import './sidebar.css'
import React from "react";
import {GetCategories} from '../index'

function Sidebar(){


    return(
        <div className={'sideBar'}>
            <GetCategories  />
        </div>
    )
}

export default Sidebar