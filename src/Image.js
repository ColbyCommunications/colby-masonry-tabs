import React from 'react';
import _get from 'lodash/get';

export default props => (
    <div className="card mb-4 shadow">
        <a href={_get(props.element, props.fields.link)}>
            <img src={_get(props.element, props.fields.image)} className="card-img" alt="..." />
        </a>
    </div>
);
