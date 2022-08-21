import React, {FC} from "react";
import { View, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components';
import { Typography } from "../../atoms/typography";
import { FeedItem } from "react-native-rss-parser";
const defaultImgURL = '../../../assets/img/defaultImg.jpg';

interface ListCardProps {
    article: FeedItem;
    onPress: (event: FeedItem) => void;
}

export const ListCard: FC<ListCardProps> = ({article, onPress}) => {

    return (
        <ListRow onPress={() => onPress(article)}>         
            <RssImg source={article.enclosures.length > 0 ? {uri: article.enclosures[0].url} : require(defaultImgURL)} />
            <TextCol>
                <Typography type="P" fontWeight="400" margin="0 0 5px 0" numberOfLines={2}>{article.title}</Typography> 
                <Typography type="P" fontWeight="200" numberOfLines={2}>{article.description}</Typography>
            </TextCol>
        </ListRow>
    )
}

const RssImg = styled(Image)`
    height: 100px;
    width: 100px;
    border-radius: 10px;
`;
const ListRow = styled(TouchableOpacity)`
    display: flex;
    flex-direction: row;
    max-width: 95%;
    margin-bottom: 15px; 
`
const TextCol = styled(View)`
    max-width: 80%;
    padding-left: 10px;
`