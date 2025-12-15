//this is typography component which is equal to p tag in html
//this component will be used to handle the typography at component level

import React from 'react';
import { typography_types, typography_color, typography_fontweight, typography_fontstyle, typography_font } from '@/constant/typography-constant';

export default function Typography(props) {
    const {
        type,
        color,
        fontweight,
        fontstyle,
        font,
        children,
        className,
        ...rest
    } = props;

    // TODO: Implement component logic and return statement
    return (
        <p className={className} {...rest}>
            {children}
        </p>
    );
}