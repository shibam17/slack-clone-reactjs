import React from 'react'
import "./Header.css"
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import SearchIcon from "@material-ui/icons/Search"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                {/* avatar for user */}
                <Avatar 
                    className="header__avatar"
                    alt="hello"
                    src=""/>
                {/* time icon */}
                <AccessTimeIcon />
            </div>
            <div className="header__search">
                {/* search icon */}
                <SearchIcon />
                {/* input */}
                <input type="text" placeholder="Search here"/>
            </div>
            <div className="header__right">
                {/* help icon */}
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header
