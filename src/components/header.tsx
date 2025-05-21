import MusicDot from "./musicdotlogo";
import RadioIcon from "./radioicon";
import TopChartsIcon from "./topcharts";

export default function Header() {
    return (
        <>
            <header>
                <div>
                    <figure className="ml-24">
                        <MusicDot></MusicDot>
                    </figure>
                    <ul className="p-6">
                        <li>
                            <h3 className="font-bold">Explore Musicas</h3>
                            <ul>
                                <li><a href="" className="flex text-2xl hoverHeader">Descubra</a></li>
                                <li><a href="" className="flex text-2xl hoverHeader">Gêneros</a></li>
                                <li><a href="" className="flex text-2xl hoverHeader"><TopChartsIcon></TopChartsIcon>Top Charts</a></li>
                                <li><a href="" className="flex text-2xl hoverHeader"><RadioIcon></RadioIcon>Rádio</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="">Suas Músicas</a>
                        </li>
                        <li>
                            <a href="">Suas Playlists</a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}