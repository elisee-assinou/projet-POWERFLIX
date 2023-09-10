import React from 'react';
import { Icon } from '@iconify/react';

//import '../src/app/globals.css'

function navBar() {
    return (
        <>

            <nav className="text-white navbar navbar-expand-sm bg-dark">

                <div className="container-fluid d-flex align-item-center justify-content-center">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#"> Home</a>
                        </li>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2 search-bar" type="search" placeholder="Search" aria-label="Search" />
                            <a className="search-button" type="submit"><Icon icon="iconoir:search" width="35" /></a>
                        </form>

                    </ul>

                </div>

            </nav>
        </>
    );
}

export default navBar;
