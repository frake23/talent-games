import React from 'react';
import TWContainer from "../tailwind/TWContainer";
import TWRowGrid from "../tailwind/TWRowGrid";
import {TWButton, TWButtonColor, TWButtonSize} from "../tailwind/TWButton";

const IntroSection = () => {

    return (
        <div className="lg:py-40">
            <TWContainer>
                <div className="flex flex-col text-center">
                    <h1 className="text-h2 mb-8">Ваш помощник в командной игре</h1>
                    <TWRowGrid className="mb-8">
                        <span className="lg:col-span-8 lg:col-start-3 text-h6">
                            <span className="text-emerald-secondary">Талант.</span>
                            Games - инструмент,
                            анализирующий навыки командной игры в популярных многопользовательских проектах.
                        </span>
                    </TWRowGrid>
                    <TWRowGrid>
                        <TWButton
                            color={TWButtonColor.Emerald}
                            size={TWButtonSize.Big}
                            className="lg:col-span-4 lg:col-start-3"
                        >
                            Начать пользоваться
                        </TWButton>
                        <TWButton
                            color={TWButtonColor.DarkBlue}
                            size={TWButtonSize.Big}
                            className="lg:col-span-4"
                        >
                            Изучить методологию
                        </TWButton>
                    </TWRowGrid>
                </div>
            </TWContainer>
        </div>
    )
}

export default IntroSection;
