import React from 'react'
import "./Sidebar.css"

function Sidebar({sidebarItems}) {
  return (
    <>
    <div className='sidebarContaniner'>
        <ul>
            {sidebarItems.map((item, index)=> (
                <li>

                </li>
            )
            )}
        </ul>
    </div>
    </>
  )
}

export default Sidebar