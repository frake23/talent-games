import React from 'react';
import Image from "next/image";
import TWContainer from "./tailwind/TWContainer";

const projects: { name: string, link: string }[] = [
    {name: "Академия наставников", link: "https://academy.sk.ru/"},
    {name: "Конкурс Талант 20.35", link: "https://talent2035.nti-contest.ru/"},
    {name: "Олимпиада КД НТИ", link: "https://reg.nti-contest.ru/"},
    {name: "Фестиваль РУКАМИ", link: "https://rukamifest.com/about"},
    {name: "Карта Кружков", link: "https://map.kruzhok.org/"},
    {name: "Кружковое движение", link: "http://team.kruzhok.org/"},
    {name: "Практики будущего", link: "https://practicingfutures.org/"}
]

const Footer = () => {
    return (
        <div className="py-8 flex flex-col shadow">
            <TWContainer>
                <div className="flex justify-between mb-6 items-center">
                    <div className="flex text-body2">
                        <a
                            href="https://talent.kruzhok.org/terms_of_use"
                            className="mr-8"
                        >
                            Пользовательское соглашение
                        </a>
                        <a href="https://talent.kruzhok.org/policy">
                            Политика конфиденциальности
                        </a>
                    </div>
                    <span className="text-caption">
                    Возникли вопросы? Обращайтесь по <span className="text-emerald-secondary">talent@kruzhok.org</span>
                </span>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col max-h-24 flex-wrap">
                        {
                            projects.map((project, index) =>
                                <a className="text-caption text-blue-dark mb-2 mr-4" href={project.link} key={index}>
                                    {project.name}
                                </a>
                            )
                        }
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="flex mb-2">
                            <a className="mr-4" href="https://vk.com/kruzhok_nti">
                                <Image src="/assets/icons/vk_icon.svg" alt="vk_icon" height={16} width={16}/>
                            </a>
                            <a className="mr-4" href="https://www.facebook.com/kruzhok/">
                                <Image src="/assets/icons/facebook_icon.svg" alt="fb_icon" height={16} width={16}/>
                            </a>
                            <a href="https://t.me/joinchat/EOwr2FF-Bcxhp3r6OOK-Cw">
                                <Image src="/assets/icons/telegram_icon.svg" alt="tg_icon" height={16} width={16}/>
                            </a>
                        </div>
                        <div className="mb-1">
                            <Image src="/assets/icons/footer_icon.svg" alt="kruzhok" height={40} width={160}/>
                        </div>
                        <span className="text-caption">© Кружковое движение 2021</span>
                    </div>
                </div>
            </TWContainer>

        </div>
    )
}

export default Footer;
