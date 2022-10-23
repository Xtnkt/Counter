import React, {useState} from 'react';

type ButtonType = {
    disabled?: boolean
    name: string,
    callBack: () => void
    className?: string
}

export const Button = (props: ButtonType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button disabled={props.disabled} className={props.className} onClick={onClickHandler}>{props.name}</button>
    );
};
