import React from 'react';
import _get from 'lodash/get';

export default props => {
    let cardImg;
    if (_get(props.element, props.fields.image)) {
        cardImg = (
            <img
                className="card-img-top"
                src={_get(props.element, props.fields.image)}
                alt="Card image cap"
            />
        );
    } else {
        cardImg;
    }

    return (
        <div className="card mb-4 shadow">
            {cardImg}
            <div className="card-body">
                <h5 className="card-title">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: _get(props.element, props.fields.title),
                        }}
                    />
                </h5>
                <p className="card-text">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: _get(props.element, props.fields.excerpt),
                        }}
                    />
                </p>
                <p className="card-text">
                    <small className="text-muted">{_get(props.element, props.fields.source)}</small>
                </p>
                <p className="card-text text-right">
                    <a href={_get(props.element, props.fields.link)}>
                        Read More{' '}
                        <span class="colby-masonry-grid-card-readmore">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-chevrons-right"
                            >
                                <polyline points="13 17 18 12 13 7"></polyline>
                                <polyline points="6 17 11 12 6 7"></polyline>
                            </svg>
                        </span>
                    </a>
                </p>
            </div>
        </div>
    );
};
