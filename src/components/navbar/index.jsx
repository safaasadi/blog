import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = props => {

    const renderAuth = () => {
        if (!window.sessionStorage.getItem('api_token')) {
            return (
                <React.Fragment>
                    <Link to="/login" className="dropdown-item">Login</Link>
                    <Link to="/register" className="dropdown-item">Register</Link>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <Link to="/account" className="dropdown-item">Account</Link>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Logout</a>
                </React.Fragment>
            )
        }
    }

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div className="container">
                <Link to="/" className="navbar-brand">Angel Media</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                    </ul>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="bi bi-person-lines-fill" style={{ fontSize: '24px' }}></i>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {renderAuth()}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar