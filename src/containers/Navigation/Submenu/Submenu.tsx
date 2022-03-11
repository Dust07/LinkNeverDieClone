import React from 'react'

function Submenu({ submenu, gameCategory }: any) {
    return (
        <div>
            <ul>
                {(submenu.map((menu: any, index: any) => {
                    console.log(menu)
                    return (
                        <li key={index}>{menu.context}</li>
                    )
                }))}


            </ul>

        </div>
    )
}

export default Submenu