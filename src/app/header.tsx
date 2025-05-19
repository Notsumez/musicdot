import MusicDot from "./musicdotlogo";

export default function Header() {
    return (
        <>
            <header className="">
                <figure>
                    <MusicDot></MusicDot>
                </figure>
                <ul className="m-8">
                    <li className="">
                        <a href="">Explore Musicas</a>
                    </li>
                    <li>
                        <a href="">Suas Músicas</a>
                    </li>
                    <li>
                        <a href="">Suas Playlists</a>
                    </li>
                </ul>
            </header>
        </>
    )
}