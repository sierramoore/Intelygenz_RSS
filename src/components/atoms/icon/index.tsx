import React, { FC } from 'react';
import { Icons } from './icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { colors } from '../../../global/colors';

export type IconProps = {
    name: Icons,
    active?: boolean,
    color?: string,
    size?: number
}

export const Icon:FC<IconProps> = ({...props}) => {
    switch(props.name){
        case Icons.arrowRight:
            return <MaterialIcons name={Icons.arrowRight} size={props.size || 24} color={props.color || colors.secondary} alt="right arrow" />;
        case Icons.arrowLeft:
            return <MaterialIcons name={Icons.arrowLeft} size={props.size || 24} color={props.color || colors.secondary}  alt="left arrow" />;
        default:
            console.log('Please choose an icon')
            return <></>;
    }
}
