import React, { FC } from 'react';
import { TextProps } from 'react-native';
import { H1 } from './H1';
import { H2 } from './H2';
import { H3 } from './H3';
import { P } from './P';

type TypographyType = 'H1' | 'H2' | 'H3' | 'P';

export interface TypographyProps {
    children: TextProps['children'];
    fontFamily?: string;
    fontSize?: string;
    fontWeight?: string;
    textDecoration?: string;
    color?: string;
    margin?: string;
    textAlign?: string;
    style?: TextProps['style'];
    numberOfLines?: number;
}

export const Typography:FC<TypographyProps & {type: TypographyType}> = ({type, ...props}) => {

    switch(type){
        case "H1":
            return <H1 {...props} fontSize={props.fontSize || "20px"} />;
        case "H2":
            return <H2 {...props} fontSize={props.fontSize || "18px"} />;
        case "H3":
            return <H3 {...props} fontSize={props.fontSize || "16px"} />;
        case "P":
            return <P {...props} fontSize={props.fontSize || "14px"} />;
        default:
            console.log('Please choose a typography')
            return <></>
    }
}