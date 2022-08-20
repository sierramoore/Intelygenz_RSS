import React, {FC} from "react";
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { BtnProps } from ".";

const LinkBtnStyle = styled(TouchableOpacity)`
    padding: 8px 10px;
    max-width: 80px;
    border-radius: 5px;
`;

export const LinkBtn: FC<BtnProps> = (props) => {
    return <LinkBtnStyle {...props}>{props.children}</LinkBtnStyle>
}