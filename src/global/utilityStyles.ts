import styled from "styled-components";
import { View } from "react-native";

export const FlexRow = styled(View)`
    display: flex;
    flex-direction: row;
`
export const FlexRowAlignCenter = styled(View)`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Col = styled(View)`
    display: flex;
    flex-direction: column;
    flex: 1; 
`

export const FlexRowEvenly = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`