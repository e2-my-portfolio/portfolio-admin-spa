import style from '@/styles/input.module.scss';
import { useId, useState } from 'react';

export interface InputProps {
    id: string;
    label: string;
    value?: string;
    styleClass?: string;
}

export default function TextInput(props: InputProps): React.ReactElement {
    const date = new Date();
    const id = useId();
    const autocompleteId = `${date.getMilliseconds()}-${id}`;
    return (
        <>
            <div className={style.inputContainer}>
                <label htmlFor={props.id}>{`C:\\${props.label}`}</label>
                &#62;
                <input id={props.id} className={`${style.input} ${props.styleClass ? style[props.styleClass] : ''}`}
                    value={props.value ? props.value : ''}
                    type={'text'}
                    autoComplete={autocompleteId}/>
            </div>
        </>
    );
}
