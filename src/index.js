import React from 'react';
import Tabs from '@colbycommunications/colby-tabs';
import PropTypes from 'prop-types';
import Masonry from './Masonry';

export default class MasonryTabs extends React.Component {
    static propTypes = {
        tabList: PropTypes.array.isRequired,
        fields: PropTypes.object.isRequired,
        colSize: PropTypes.string,
    };

    static defaultProps = {
        colSize: 'lg',
    };

    render() {
        const tabList = [];

        this.props.tabList.forEach(tab => {
            tabList.push({
                name: tab.name,
                title: tab.title,
                content: (
                    <Masonry
                        key={tab.name}
                        endpoint={tab.endpoint}
                        colSize={this.props.colSize}
                        type={tab.type}
                        {...tab}
                    />
                ),
            });
        });

        return (
            <Tabs
                tabList={tabList}
                tabClasses={{
                    tabContainer: 'nav nav-tabs justify-content-end',
                    tabs: 'nav-item nav-link',
                }}
            />
        );
    }
}
