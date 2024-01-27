import React from "react";
import './main.css';
import '../var.css';
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
            <div class="playlist-container">
                <div id="result-playlists">
                    <div class="playlist">
                        <h1 id="greeting">Boas vindas</h1>
                        <h2 class="session">Navegar por todas as seções</h2>
                    </div>

                    <div class="offer__scroll-container">
                        <div class="offer__list">
                            <section class="offer__list-item">
                                <button  class="cards">
                                    <div class="cards card1">
                                        <img src={img1} alt="" />
                                        <span>Boas festas</span>
                                    </div>
                                </button>

                                <button  class="cards">
                                    <div class="cards card2">
                                        <img src={img2} alt="" />
                                        <span>Feitos para você</span>
                                    </div>
                                </button>

                                <button  class="cards">
                                    <div class="cards card3">
                                        <img src={img3} alt="" />
                                        <span>Lançamentos</span>
                                    </div>
                                </button>

                                <button  class="cards">
                                    <div class="cards card4">
                                        <img src={img4} alt="" />
                                        <span>Creators</span>
                                    </div>
                                </button>

                                <button  class="cards">
                                    <div class="cards card5">
                                        <img src={img5} alt="" />
                                        <span>Para treinar</span>
                                    </div>
                                </button>

                                <button  class="cards">
                                    <div class="cards card6">
                                        <img src={img6} alt="" />
                                        <span>Podcasts</span>
                                    </div>
                                </button>

                                <button  class="cards">
                                    <div class="cards card7">
                                        <img src={img7} alt="" />
                                        <span>Sertanejo</span>
                                    </div>
                                </button>

                                <button  class="cards">
                                    <div class="cards card8">
                                        <img src={img8} alt="" />
                                        <span>Samba e pagode</span>
                                    </div>
                                </button>

                                <button  class="cards">
                                    <div class="cards card9">
                                        <img src={img9} alt="" />
                                        <span>Funk</span>
                                    </div>
                                </button>

                                <button  class="cards">
                                    <div class="cards card10">
                                        <img src={img10} alt="" />
                                        <span>MPB</span>
                                    </div>
                                </button>

                                <button  class="cards">
                                    <div class="cards card11">
                                        <img src={img11} alt="" />
                                        <span>Rock</span>
                                    </div>
                                </button>

                                <button  class="cards">
                                    <div class="cards card12">
                                        <img src={img12} alt="" />
                                        <span>Hip Hop</span>
                                    </div>
                                </button>

                                <button  class="cards">
                                    <div class="cards card13">
                                        <img src={img13} alt="" />
                                        <span>Indie</span>
                                    </div>
                                </button>

                                <button  class="cards">
                                    <div class="cards card14">
                                        <img src={img14} alt="" />
                                        <span>Relax</span>
                                    </div>
                                </button>

                                <button  class="cards">
                                    <div class="cards card15">
                                        <img src={img15} alt="" />
                                        <span>Música Latina</span>
                                    </div>
                                </button>
                            </section>
                        </div>
                    </div>
                </div>
                <div id="result-artist" class="hidden">
                    <div class="grid-container">
                        <div class="artist-card" id="">
                            <div class="card-img">
                                <img id="artist-img" class="artist-img" />
                                <div class="play">
                                    <span class="fa fa-solid fa-play"></span>
                                </div>
                            </div>
                            <div class="card-text">
                                <button title="Foo Fighters" class="vst" ></button>
                                <span class="artist-name" id="artist-name"></span>
                                <span class="artist-categorie">Artista</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    </main>
    )
}   

export default Main;