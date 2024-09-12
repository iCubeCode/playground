import React from 'react'

function NavItem({ name, currentTab, setCurrentTab }) {
    return (
        <span className={`py-4 px-4 text-[${currentTab === name ? "#000" : "#fefefe"
            }] w-1/4 flex justify-center items-center z-10 cursor-pointer`}
            onClick={() => setCurrentTab(name)}
        >{name}</span>
    )
}

export default NavItem