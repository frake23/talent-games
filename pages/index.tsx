import React from 'react';
import {Header} from "../components/Header";
import IntroSection from "../components/landing/IntroSection";
import {SectionBase, SectionBaseLayout} from "../components/landing/SectionBase";
import AllGames from "../components/landing/AllGames";

const LandingPage = () => {
    return (
        <div className="min-h-screen">
            <Header/>
            <IntroSection/>
            <SectionBase
                layout={SectionBaseLayout.ImageLeft}
                title="Надоело проигрывать?"
                text="Одна из частых причин поражения - плохая командная работа. Узнайте, насколько вы хороши в этом."
            >
                <img
                    src="/assets/images/victory.svg"
                    alt="victory image"
                    width="100%"
                />
            </SectionBase>
            <SectionBase
                layout={SectionBaseLayout.ImageRight}
                title="Доступные игры"
                text="Сейчас доступно несколько одних из самых популярных соревновательных игр. Список будет постоянно расширяться."
            >
                <AllGames/>
            </SectionBase>
            <SectionBase
                layout={SectionBaseLayout.ImageLeft}
                title="Как это работает"
                text="Мы разработали уникальный алгоритм, позволяющий точно и надежно оценить командную компетенцию в онлайн-играх"
            >
                <img
                    src="/assets/images/question.svg"
                    alt="victory image"
                    width="100%"
                />
            </SectionBase>
        </div>
    )
}

export default LandingPage;
