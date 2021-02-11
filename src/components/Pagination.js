import React, {Component} from 'react';
import PropTypes from 'prop-types';
class Pagination extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
    };

    render() {
        let commentNodes = this.props.data.map(function(name, id) {
            return <div key={id}>{name}</div>;
        });

        return (
            <div id="project-comments" className="commentList">
                <ul>{commentNodes}</ul>
            </div>
        );
    }
}

export default Pagination;