import React from "react";
import { useState, useEffect } from "react";
import api from "../api";
import SearchBar from "./SearchBar";
import Header from "./Header";
import './sass/Home.scss';


function Home() {
    const [games, setGames] = useState([])
    const [keyWord, setKeyWord] = useState('');

    const updateInput = async (input) => {
        setKeyWord(input);
    }

    useEffect(() => {
        const fetchData = async () => {
            const result = await api.get("https://api.twitch.tv/helix/games/top");
            let dataArray = result.data.data;
            let finalArray = dataArray.map(game => {
                let newURL = game.box_art_url
                    .replace("{width}", "300")
                    .replace("{height}", "300");
                game.box_art_url = newURL;
                return game;

            });
            setGames(finalArray);
            console.log(result.data.data)
        };
        fetchData()
    }, []);

    return (
        <>
            <Header />
            <SearchBar setKeyword={updateInput} />
            <div className="cardsList">
                <div class="ui link centered cards">
                    {games.filter(
                        (game) =>
                            game.name
                                .toLowerCase()
                                .includes(keyWord.toLowerCase())
                    ).map(game => (
                        <div className="cards">
                        <div class="ui card">
                            <div class="image">
                                <img src={game.box_art_url} alt="cover game"/>
                            </div>
                            <div class="content">
                                <h1>{game.name}</h1>
                                <div class="meta">
                                    <p>{game.id}</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    ))}
            </div>
            </div>

        </>
    )
}

export default Home;

