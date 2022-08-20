import React, { FC } from 'react';
import { PrimaryBtn } from './primaryBtn';
import { LinkBtn } from './linkBtn';

export enum ButtonType { primary = "PRIMARY", link = "LINK"}

interface Btn {
    type: ButtonType
}

export interface BtnProps {
    onPress: () => void;
    active?: boolean;
    height?: string;
    width?: string;
    children: React.ReactNode;
}

export const Button:FC<BtnProps & Btn> = (props) => {

    switch(props.type){
        case ButtonType.primary:
            return <PrimaryBtn {...props}/>
        case ButtonType.link:
            return <LinkBtn {...props}/>
        default:
            console.log('Please choose a button')
            return <></>
    }
}