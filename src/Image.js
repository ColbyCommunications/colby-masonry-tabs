import React from 'react';
import _get from 'lodash/get';
import PropTypes from 'prop-types';

const Image = props => (
    <div className="card mb-4 shadow">
        <a href={_get(props.element, props.fields.link)}>
            <img src={_get(props.element, props.fields.image)} className="card-img" alt="..." />
        </a>
    </div>
);

Image.propTypes = {
    element: PropTypes.object.isRequired,
    fields: PropTypes.object.isRequired,
};

export default Image;
