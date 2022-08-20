import React, {FC} from "react";
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { BtnProps } from ".";
import {colors} from '../../../global/colors'

const PrimaryBtnStyle = styled(TouchableOpacity)`
    /* background-color: ${colors.secondary}; */
    color: ${colors.light};
    padding: 6px;
    border-radius: 4px;
    border: 2px solid ${colors.secondary};
    margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* max-width: 100px; */
`;

export const PrimaryBtn: FC<BtnProps> = (props) => {
    return <PrimaryBtnStyle {...props}>{props.children}</PrimaryBtnStyle>
}