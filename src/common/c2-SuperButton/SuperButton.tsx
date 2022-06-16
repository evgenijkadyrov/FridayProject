import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
    callback?: () => void
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className, callback,
        ...restProps
    }
) => {
    const finalClassName = `${s.default} ${red ? s.red : s.default} ${className}`

    return (
        <button
            className={finalClassName}
            {...restProps}
        />
    )
}

export default SuperButton
