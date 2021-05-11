import React from 'react';
import {AppRouterState, useAppRouter} from "../../context/AppRouter";
import AppCategory from "../../types/appCategory";
import AccountType from "../../types/accountType";
import TalentContent from "./сontents/TalentContent";

const contents = (state: AppRouterState) => {
    switch (state.category) {
        case AppCategory.Accounts:
            switch (state.account) {
                case AccountType.Kruzhok:
                    return <TalentContent/>
                default:
                    return <p>404</p>
            }
        case AppCategory.Results:
            switch (state.account) {
                case AccountType.Kruzhok:
                    return <TalentContent/>
                default:
                    return <p>404</p>
            }
        case AppCategory.Leaderboard:
            switch (state.account) {
                case AccountType.Kruzhok:
                    return <TalentContent/>
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
