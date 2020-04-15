import React from 'react';
import MasonryComponent from 'react-masonry-component';
import PropTypes from 'prop-types';
import Card from './Card';
import Image from './Image';
import _get from 'lodash/get';

const masonryOptions = {
    transitionDuration: 0,
};

export default class Masonry extends React.Component {
    static propTypes = {
        data: PropTypes.array,
        colSize: PropTypes.string,
    };

    static defaultProps = {
        type: 'cards',
    };

    render() {
        const childElements = this.props.data.map(element => {
            console.log(element);
            console.log(this.props.fields);
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
            } else {
                return (
                    <div
                        className={`grid-item col-${this.props.colSize}-${size}`}
                        key={_get(element, this.props.fields.id)}
                    >
                        <Image element={element} fields={this.props.fields} />
                    </div>
                );
            }
        });

        return (
            <MasonryComponent className="row" options={masonryOptions}>
                {childElements}
            </MasonryComponent>
        );
    }
}
