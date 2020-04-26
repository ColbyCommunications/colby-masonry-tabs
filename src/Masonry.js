import React from 'react';
import axios from '@colbycommunications/colby-axios';
import Loader from '@colbycommunications/colby-loader';
import PropTypes from 'prop-types';

import MasonryComponent from 'react-masonry-component';
import _get from 'lodash/get';
import Card from './Card';
import Image from './Image';

const masonryOptions = {
    transitionDuration: 0,
};

export default class Requester extends React.Component {
    static propTypes = {
        endpoint: PropTypes.string.isRequired,
        fields: PropTypes.object.isRequired,
        colSize: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = { loading: true, data: [], limit: 10, hasLoaded: false };
    }

    componentDidMount = () => {
        this.getData();
    };

    getData = async () => {
        const response = await axios.get(this.props.endpoint);

        this.setState({
            data: response.data,
            loading: false,
            hasLoaded: true,
        });
    };

    onLoadMore = () => {
        // eslint-disable-next-line arrow-body-style
        this.setState(prevState => ({ limit: prevState.limit + 10 }));
    };

    renderChildren = () =>
        this.state.data.slice(0, this.state.limit).map(element => {
            let size = '4';
            if (element.meta.masonry_size === 'large') {
                size = '8';
            }
            if (this.props.type === 'card') {
                return (
                    <div
                        className={`grid-item col-${this.props.colSize}-${size}`}
                        key={_get(element, this.props.fields.id)}
                    >
                        <Card element={element} fields={this.props.fields} />
                    </div>
                );
            }
            return (
                <div
                    className={`grid-item col-${this.props.colSize}-${size}`}
                    key={_get(element, this.props.fields.id)}
                >
                    <Image element={element} fields={this.props.fields} />
                </div>
            );
        });

    render() {
        return (
            <div>
                <Loader loading={this.state.loading} type="inline" removeChildren>
                    <MasonryComponent className="row" options={masonryOptions}>
                        {this.renderChildren()}
                    </MasonryComponent>
                </Loader>
                {this.state.hasLoaded && (
                    <div className="text-center">
                        <button type="button" className="btn btn-primary" onClick={this.onLoadMore}>
                            Load More
                        </button>
                    </div>
                )}
            </div>
        );
    }
}
