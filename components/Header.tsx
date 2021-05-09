import Image from "next/image";
import Link from "next/link";
import TWContainer from "./tailwind/TWContainer";
import TWButton from "./tailwind/TWButton";
import {useUserContext} from "../context/UserContext";
import * as React from "react";

const Header = () => {
    const user = useUserContext()
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

                    <a href="http://localhost/api/auth/login/talent/"><TWButton color={"emerald"} size={"default"} onClick={()=>{
                        fetch("http://localhost/api/auth/login/talent/")
                    }}>
                        Войти
                    </TWButton></a>
                </div>
            </TWContainer>
        </div>
    )
}

export {Header};
