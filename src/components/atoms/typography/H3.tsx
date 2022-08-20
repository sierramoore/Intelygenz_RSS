import React, {FC} from "react";
import { TypographyProps } from ".";
import { TypographyStyle } from "./H1";

export const H3: FC<TypographyProps> = (props) => {
    return <TypographyStyle {...props}>{props.children}</TypographyStyle>
}