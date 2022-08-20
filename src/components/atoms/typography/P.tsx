import React, {FC} from "react";
import { TypographyProps } from ".";
import { TypographyStyle } from "./H1";

export const P: FC<TypographyProps> = (props) => {
    return <TypographyStyle {...props}>{props.children}</TypographyStyle>
}