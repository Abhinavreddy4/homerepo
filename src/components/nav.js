import React from 'react';
import {FiUser, FiAlignLeft} from "react-icons/fi"
import {FiHome} from "react-icons/fi"
import {FiLogOut} from "react-icons/fi"
import {FiMessageSquare} from "react-icons/fi"
import {FiSearch} from "react-icons/fi"
import {Link} from 'react-router-dom'
function Nav() {
  return (
    <nav>
        <ul className="navlinks">
            <Link>
            <li><FiSearch/></li>
            </Link>
            <Link to="/">
            <li><FiHome/></li>
            </Link>
            <Link to="/profile">
            <li><FiUser/></li>
            </Link>
            <Link>
            <li><FiLogOut/></li>
            </Link>
            <Link to="/notifications">
            <li><FiMessageSquare/></li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
