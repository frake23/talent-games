import React from 'react';
import Image from "next/image";
import Link from "next/link";
import TWContainer from "./tailwind/TWContainer";
import TWButton from "./tailwind/TWButton";
import {useUserInfo} from "../context/UserContext";

const Header = () => {
    const userInfo = useUserInfo()
    const isAuthenticated = !!userInfo?.state?.email
    const button = isAuthenticated?
        <TWButton color={'blue-dark'} size={'default'} onClick={()=>{
            fetch('http://localhost/api/logout/talent/', {credentials: 'include'})
                .then(() => {
                    window.location.replace('/')
                })
        }}>
            Выйти
        </TWButton>:
        <TWButton color={'emerald'} size={'default'} onClick={()=>{
            fetch('http://localhost/api/auth/login/talent/', {redirect: 'manual'})
                .then((res) => {
                    window.location.replace(res.url)
                })
        }}>
            Войти
        </TWButton>
    return (
        <div className="py-2.5 shadow z-50">
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
                    {button}
                </div>
            </TWContainer>
        </div>
    )
}

export {Header};
