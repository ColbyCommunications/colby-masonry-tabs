import React from 'react';
import MasonryComponent from 'react-masonry-component';
import PropTypes from 'prop-types';
import _get from 'lodash/get';
import Card from './Card';
import Image from './Image';

const masonryOptions = {
    transitionDuration: 0,
};

export default class Masonry extends React.Component {
    static propTypes = {
        data: PropTypes.array.isRequired,
        colSize: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        fields: PropTypes.object.isRequired,
    };

    render() {
        const childElements = this.props.data.map(element => {
            let size = '4';
            if (element.size === 'large') {
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

        return (
            <MasonryComponent className="row" options={masonryOptions}>
                {childElements}
            </MasonryComponent>
        );
    }
}
