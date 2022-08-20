import React, {FC} from "react";
import { Button, ButtonType } from "../atoms/button";
import { useNavigation, useRoute } from '@react-navigation/native';
import { Header } from '../molecules/header';
import { ArticleBody } from "../organisms/articleBody";
import { Icons } from "../atoms/icon/icons";
import { StackScreenProps } from "../../utils/types";

type Props = StackScreenProps<'Article'>;

export const Article: FC<Props> = ({route, navigation}) => {
    const article = route.params;

    return (
        <>
            <Header title="ARTICLE" goBack={() => navigation.navigate('Home')} iconName={Icons.arrowLeft}/>
            <ArticleBody
                article={article}
            />
        </>
    )
}
