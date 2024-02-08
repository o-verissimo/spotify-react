import React from "react";
import './main.css';
import '../var.css';
import '../media-queries.css';
import { FaPlay } from "react-icons/fa";
import img1 from '../assets/playlist/1.jpeg'
import img2 from '../assets/playlist/2.png'
import img3 from '../assets/playlist/3.jpeg'
import img4 from '../assets/playlist/4.jpeg'
import img5 from '../assets/playlist/5.jpeg'
import img6 from '../assets/playlist/6.jpeg'
import img7 from '../assets/playlist/7.jpeg'
import img8 from '../assets/playlist/8.jpeg'
import img9 from '../assets/playlist/9.jpeg'
import img10 from '../assets/playlist/10.jpeg'
import img11 from '../assets/playlist/11.jpeg'
import img12 from '../assets/playlist/12.jpeg'
import img13 from '../assets/playlist/13.jpeg'
import img14 from '../assets/playlist/14.jpeg'
import img15 from '../assets/playlist/15.jpeg'



const Main = () => {
    return(
        <main>
            <div className="playlist-container">
                <div id="result-playlists">
                    <div className="playlist">
                        <h1 id="greeting">Boas vindas</h1>
                        <h2 className="session">Navegar por todas as seções</h2>
                    </div>

                    <div className="offer__scroll-container">
                        <div className="offer__list">
                            <section className="offer__list-item">
                                <button  className="cards">
                                    <div className="cards card1">
                                        <img src={img1} alt="" />
                                        <span>Boas festas</span>
                                    </div>
                                </button>

                                <button  className="cards">
                                    <div className="cards card2">
                                        <img src={img2} alt="" />
                                        <span>Feitos para</span>
                                        <p>você</p>
                                    </div>
                                </button>

                                <button  className="cards">
                                    <div className="cards card3">
                                        <img src={img3} alt="" />
                                        <span>Lançamentos</span>
                                    </div>
                                </button>

                                <button  className="cards">
                                    <div className="cards card4">
                                        <img src={img4} alt="" />
                                        <span>Creators</span>
                                    </div>
                                </button>

                                <button  className="cards">
                                    <div className="cards card5">
                                        <img src={img5} alt="" />
                                        <span>Para treinar</span>
                                    </div>
                                </button>

                                <button  className="cards">
                                    <div className="cards card6">
                                        <img src={img6} alt="" />
                                        <span>Podcasts</span>
                                    </div>
                                </button>

                                <button  className="cards">
                                    <div className="cards card7">
                                        <img src={img7} alt="" />
                                        <span>Sertanejo</span>
                                    </div>
                                </button>

                                <button  className="cards">
                                    <div className="cards card8">
                                        <img src={img8} alt="" />
                                        <span>Samba e </span>
                                        <p>Pagode</p>
                                    </div>
                                </button>

                                <button  className="cards">
                                    <div className="cards card9">
                                        <img src={img9} alt="" />
                                        <span>Funk</span>
                                    </div>
                                </button>

                                <button  className="cards">
                                    <div className="cards card10">
                                        <img src={img10} alt="" />
                                        <span>MPB</span>
                                    </div>
                                </button>

                                <button  className="cards">
                                    <div className="cards card11">
                                        <img src={img11} alt="" />
                                        <span>Rock</span>
                                    </div>
                                </button>

                                <button  className="cards">
                                    <div className="cards card12">
                                        <img src={img12} alt="" />
                                        <span>Hip Hop</span>
                                    </div>
                                </button>

                                <button  className="cards">
                                    <div className="cards card13">
                                        <img src={img13} alt="" />
                                        <span>Indie</span>
                                    </div>
                                </button>

                                <button  className="cards">
                                    <div className="cards card14">
                                        <img src={img14} alt="" />
                                        <span>Relax</span>
                                    </div>
                                </button>

                                <button  className="cards">
                                    <div className="cards card15">
                                        <img src={img15} alt="" />
                                        <span>Música Latina</span>
                                    </div>
                                </button>
                            </section>
                        </div>
                    </div>
                </div>
                <div id="result-artist" className="hidden">
                    <div className="grid-container">
                        <div className="artist-card" id="">
                            <div className="card-img">
                                <img id="artist-img" className="artist-img" />
                                <div className="play">
                                    <span className="fa fa-solid fa-play"><FaPlay /></span>
                                </div>
                            </div>
                            <div className="card-text">
                                <button title="Foo Fighters" className="vst" ></button>
                                <span className="artist-name" id="artist-name"></span>
                                <span className="artist-categorie">Artista</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    </main>
    )
}   

export default Main;