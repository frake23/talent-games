import React from 'react';
import {AppRouterState, useAppRouter} from "../../context/AppRouter";
import AppCategory from "../../types/appCategory";
import AccountType from "../../types/accountType";
import TalentContent from "./сontents/TalentContent";
import SteamContent from "./сontents/SteamContent";
import BlizzardContent from "./сontents/BlizzardContent";
import GameType from "../../types/gameType";

const contents = (state: AppRouterState) => {
    switch (state.category) {
        case AppCategory.Accounts:
            switch (state.account) {
                case AccountType.Kruzhok:
                    return <TalentContent/>
                case AccountType.Steam:
                    return <SteamContent/>
                case AccountType.Blizzard:
                    return <BlizzardContent/>
                default:
                    return <p>404</p>
            }
        case AppCategory.Results:
            switch (state.game) {
                case GameType.CSGO:
                    return <SteamContent/>
                case GameType.Dota2:
                    return <SteamContent/>
                case GameType.Overwatch:
                    return <BlizzardContent/>
                default:
                    return <p>404</p>
            }
        case AppCategory.Leaderboard:
            switch (state.game) {
                case GameType.CSGO:
                    return <SteamContent/>
                case GameType.Dota2:
                    return <SteamContent/>
                case GameType.Overwatch:
                    return <BlizzardContent/>
                default:
                    return <p>404</p>
            }
    }
}

const Content = ({className}: {className?: string}) => {
    const {state, dispatch} = useAppRouter();
    return contents(state)

}

export default Content;
