//import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const activeStyles = {
    color: '#c0392b'
}
const listStyle ={
    margin: 0,
    padding: 0,
}

const listElemStyle = {
    display: 'inline',
    listStyleType: 'none',
    paddingRight: 10
}

function NavMenu () {
    return (
        <nav>
            <ul style={listStyle}>
                <li style={listElemStyle}>
                    <NavLink activeStyle={activeStyles} to="/" exact>Home</NavLink>
                </li>
                <li style={listElemStyle}>
                    <NavLink activeStyle={activeStyles} to="/contact" exact>Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavMenu;