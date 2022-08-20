import React, {FC} from "react";
import { Text } from 'react-native';
import styled from 'styled-components';
import { TypographyProps } from ".";
import {colors} from '../../../global/colors'

export const TypographyStyle = styled(Text)<TypographyProps>`
  color: ${(props) => props.color || colors.primary};
  font-size: ${(props) => props.fontSize || '20px'};
  margin: ${(props) => props.margin || '0'};
  font-weight: ${(props) => props.fontWeight || '500'};
  ${(props) => !!props.fontFamily? `font-family: ${props.fontFamily};`: ''};
  ${(props) => !!props.textDecoration?`text-decoration: ${props.textDecoration};`:''};
  text-align: ${(props) => props.textAlign || 'left'};
  flex-wrap: wrap;
`;

export const H1: FC<TypographyProps> = (props) => {
    return <TypographyStyle {...props}>{props.children}</TypographyStyle>
}