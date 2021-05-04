import React from 'react';
import TWContainer from "../tailwind/TWContainer";
import TWGrid from "../tailwind/TWGrid";
import {TWButton, TWButtonColor, TWButtonSize} from "../tailwind/TWButton";

const IntroSection: React.FC = () => {
    return (
        <div className="xl:py-40">
            <TWContainer>
                <div className="flex flex-col text-center">
                    <h1 className="text-h2 mb-8">Ваш помощник в командной игре</h1>
                    <TWGrid className="mb-8">
                        <span className="xl:col-span-8 xl:col-start-3 text-h6">
                            <span className="text-emerald-secondary">Талант.</span>
                            Games - инструмент,
                            анализирующий навыки командной игры в популярных многопользовательских проектах.
                        </span>
                    </TWGrid>
                    <TWGrid>
                        <TWButton
                            color={TWButtonColor.Emerald}
                            size={TWButtonSize.Big}
                            className="xl:col-span-4 xl:col-start-3"
                        >
                            Начать пользоваться
                        </TWButton>
                        <TWButton
                            color={TWButtonColor.DarkBlue}
                            size={TWButtonSize.Big}
                            className="xl:col-span-4"
                        >
                            Изучить методологию
                        </TWButton>
                    </TWGrid>
                </div>
            </TWContainer>
        </div>
    )
}

export default IntroSection;
