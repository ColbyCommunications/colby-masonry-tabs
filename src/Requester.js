import React from 'react';
import axios from '@colbycommunications/colby-axios';
import Loader from '@colbycommunications/colby-loader';
import PropTypes from 'prop-types';
import Masonry from './Masonry';

export default class Requester extends React.Component {
    static propTypes = {
        endpoint: PropTypes.string.isRequired,
        fields: PropTypes.object.isRequired,
        colSize: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = { loading: true, data: [] };
    }

    componentDidMount = () => {
        this.getData();
    };

    getData = async () => {
        const response = await axios.get(this.props.endpoint);

        this.setState({
            data: response.data,
            loading: false,
        });
    };

    render() {
        return (
            <Loader loading={this.state.loading} type="inline" removeChildren>
                <Masonry
                    data={this.state.data}
                    fields={this.props.fields}
                    colSize={this.props.colSize}
                    type={this.props.type}
                />
            </Loader>
        );
    }
}
