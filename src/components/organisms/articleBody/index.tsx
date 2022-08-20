import React, {FC} from "react";
import { View, Image, Linking } from 'react-native';
import { Typography } from "../../atoms/typography";
import styled from 'styled-components';
import { Button, ButtonType } from "../../atoms/button";
import { colors } from "../../../global/colors";
import { Icons } from "../../atoms/icon/icons";
import { Icon } from "../../atoms/icon";
import { FeedItem } from "react-native-rss-parser";

interface Props {
    article: FeedItem;
}

export const ArticleBody: FC<Props> = ({article}) => {

    return (
        <Article>
            <Typography type="H2" margin="0 0 10px 0">{article.title}</Typography>
            <Typography type="P" textAlign="center" color={colors.secondary}>{article.published}</Typography>
            <RssImg source={{uri: article.enclosures[0].url}} />
            <Typography type="P" margin="0 0 20px 0">{article.description}</Typography>
            
            <Button type={ButtonType.primary} onPress={() => Linking.openURL(article.links[0].url)}>
                <Typography type="P" textAlign="center" color={colors.secondary}>Ver en el navegador</Typography>
                <Icon name={Icons.arrowRight}/> 
            </Button>
        </Article>
    )
}

const Article = styled(View)`
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
`;
const RssImg = styled(Image)`
    height: 250px;
    min-width: 250px;
    border-radius: 5px;
    margin: 15px auto;
`;