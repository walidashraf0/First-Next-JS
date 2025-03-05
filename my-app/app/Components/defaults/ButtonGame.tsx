import React, { ReactElement } from 'react'
import ButtonSvg from '../ButtonSvg';

const ButtonGame = ({ className, onClick, link, text, icon }: { className?: string; onClick?: () => void; link?: string; text: string; icon?: ReactElement }) => {
    return (
        <button className={`${className || ""} relative flex-initial gap-2 py-2 text-gray-50 px-6 text-center m-auto rounded-md hover:text-rose-400 duration-200`} onClick={onClick}>
            {ButtonSvg(false)}
            {text}
            {icon && icon}
        </button>
    )
}

export default ButtonGame