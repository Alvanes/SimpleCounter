import React from "react";

type SuperButtonType = {
    text: string,
    disabled?: boolean,
    onClick: () => void
}

export const SuperButton = (props: SuperButtonType) => {
    return <button disabled={props.disabled}
                   onClick={props.onClick}>
        {props.text}
    </button>
}