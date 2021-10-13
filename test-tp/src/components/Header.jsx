import React from "react";
import './sass/Home.scss';

function Header() {

    return (
        <div className="header">
            <div class="ui dividing header">
                <h1 class="content">
                    Top Games  
                    <i class="fab fa-twitch"></i> </h1>
                <p className="subheader">Check out the games sorted by current viewership on Twitch and find your favorite</p>
            </div>

        </div>
    );
}

export default Header;