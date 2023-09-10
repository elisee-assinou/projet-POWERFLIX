import React from 'react';
//import '../src/app/globals.css'
import './sidebar.css'
import { Icon } from '@iconify/react';


type SidebarProps = {
    onSectionChange: (section: string) => void;
};

function Sidebar({ onSectionChange }: SidebarProps) {

    const handleItemClick = (section: string) => {
        onSectionChange(section);
    }
    return (
        <>
            <div className="bg-dark col-2 admin-sidebar">

                <hr />
                <div className="side-main-container">
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <a href="#" className="nav-link text-white" aria-current="page"
                                onClick={() => handleItemClick('Users')}>
                                <Icon icon="fa-solid:users" />
                                <span className="side-icon">
                                    Users
                                </span>

                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-white"
                                onClick={() => handleItemClick('Movies')}>
                                <Icon icon="ri:movie-line" />
                                <span className="side-icon">
                                    Movies API
                                </span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="nav-link text-white"
                                onClick={() => handleItemClick('DatabaseMovies')}>
                                <Icon icon="ri:movie-line" />
                                <span className="side-icon">
                                    DatabaseMovies
                                </span>
                            </a>
                        </li>


                    </ul>
                    <hr />
                    <div className="dropdown">
                        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                            <strong>mdo</strong>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" >
                            <li><a className="dropdown-item" href="#">New project...</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
