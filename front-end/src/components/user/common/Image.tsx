import React from 'react';
import { connect } from 'react-redux';
import "styles/user/css/Image.css";

type Props = {
    src: string,
    style: any,
    className: any
}

const Image = ({ src, style, className }: Props) => {
    return (
        <img className={className} src={src} style={style} />
    )
}

Image.defaultProps = {
    style: null,
    className: null
};

export default connect(null, null)(Image);
