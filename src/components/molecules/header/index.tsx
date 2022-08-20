import React, {FC} from 'react';
import {
    View
  } from "react-native";
import styled from 'styled-components';
import { Typography } from '../../atoms/typography';
import { colors } from '../../../global/colors';
import { Button, ButtonType } from '../../atoms/button';
import { FlexRowAlignCenter } from '../../../global/utilityStyles';
import { useRoute } from '@react-navigation/native';
import { Icon } from '../../atoms/icon';
import { Icons } from '../../atoms/icon/icons';

interface HeaderProps {
    title: string;
    goBack?: () => void;
    iconName: Icons;
}

export const Header:FC<HeaderProps> = (props) => {
    const route = useRoute();

    return (
        <HeaderContainer>
            <FlexRowAlignCenter>
                {route.name !== 'Home' &&
                    <Button type={ButtonType.link} onPress={props.goBack}>
                        <Icon name={props.iconName} color={colors.light}/>
                    </Button>
                }
                <Typography type="H3" color="white" textAlign="center" style={{letterSpacing: 2}}>{props.title}</Typography>
            </FlexRowAlignCenter>
        </HeaderContainer>
    );
}

const HeaderContainer = styled(View)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${colors.secondary};
    height: 10%;
    padding: 15px 0 0 15px;
    box-sizing: border-box;
`