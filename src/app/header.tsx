import MusicDot from "./musicdotlogo";

export default function Header() {
    return (
        <>
            <header>
                <div className="p-8">
                    <figure>
                        <MusicDot></MusicDot>
                    </figure>
                    <ul>
                        <li>
                            <h3 className="font-bold">Explore Musicas</h3>
                            <ul>
                                <li><a href="">Descubra</a></li>
                                <li><a href="">Gêneros</a></li>
                                <li><a href="">Top Charts</a></li>
                                <li><a href="">Rádio</a></li>
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