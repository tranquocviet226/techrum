import React from 'react';
import { connect } from 'react-redux';

type Props = {
    src: string,
    style: any
}

const Image = ({ src, style }: Props) => {
    return (
        <img src={src} style={style} />
    )
}

Image.defaultProps = {
    style: null
};

export default connect(null, null)(Image);
