import React from 'react';
import Image from "next/image";
import Link from "next/link";
import TWContainer from "./tailwind/TWContainer";
import {TWButton, TWButtonColor, TWButtonSize} from "./tailwind/TWButton";

const Header: React.FC = () => {
    return (
        <div className="py-2.5 shadow">
            <TWContainer>
                <div className="flex justify-between">
                    <Link href="/">
                        <Image
                            className="cursor-pointer"
                            src="/assets/icons/icon.svg"
                            width={110}
                            height={40}
                        />
                    </Link>
                    <TWButton color={TWButtonColor.Emerald} size={TWButtonSize.Default}>
                        Войти
                    </TWButton>
                </div>
            </TWContainer>
        </div>
    )
}

export {Header};
