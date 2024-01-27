import React from "react";
import '../reset.css';
import './Sidebar.css';
import logoSpotify from '../assets/icons/logo-spotify.png'
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const Sidebar = () => {
    return(
            <div className="sidebar">
                <nav className="sidebar__navigation">
                    <div className="logo">
                        <button>
                            <img src={logoSpotify} alt="logo" />
                            
                        </button>
                    </div>
                    <ul>
                        <li>
                            <button className="home_button">
                                <span className="home-icon"><FaHome /></span>
                                <span>Início</span>
                            </button>
                        </li>
                        <li>
                            <button className="search__button">
                                <span className="search-icon"><FaSearch /></span>
                                <span>Buscar</span>
                            </button>
                        </li>
                    </ul>
                </nav>
                <div className="library">
                    <div className="library__content">
                        <button className="library__button">
                            <span className="library-icon"><BiLibrary /></span>
                            <span>Sua biblioteca</span>
                        </button>
                        <span className="plus-icon"><FaPlus /></span>
                    </div>
                    <section className="section-playlist">
                        <div className="section-playlist__content">
                            <span className="text title">Crie sua primeira playlist</span>
                            <span className="text subtitle">É fácil, vamos te ajudar.</span>
                            <button className="section-playlist__button">
                                <span>Criar playlist</span>
                            </button>
                        </div>
                    </section>
                    <div className="cookies">
                        <button className="cookies-button">Cookies</button>
                    </div>
                    <div className="languages">
                        <button className="languages__button">
                            <span className="globe-button"><FaGlobe /></span>
                            <span>Português do Brasil</span>
                        </button>
                    </div>
                </div>
            </div>
    )
}    



export default Sidebar;