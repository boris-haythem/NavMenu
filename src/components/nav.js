import React from 'react'
import './nav.css'
function nav({navmenu}){
    return(
        <div>
            <ul className='navbar'>{navmenu.map(el=>(
                <li>{el.name}
                <ul className='dropmenu'>{ el.drop&&el.drop.map(el=><li>{el}</li>) }</ul>
                </li>
            ))}
                 
            </ul>
        </div>
    )
}
export default nav