import React, {Component} from 'react';
import {connect} from 'react-redux';

import EditForm from '../../Components/EditForm';
import {closeEditForm} from '../../actionCreators';
import {editTimer, deleteTimer, addTimer} from '../../actionCreators';

class EditFormContainer extends Component {
    render() {
        const title = `${this.props.timer.id ? 'Edit' : 'Add'} Timer`;
        return (
            <EditForm
                {...this.props}
                titleForm={title}
            />
        );
    }
}

const defaultTimer = {
    title: '',
    description: '',
    value: 0,
};

/**
 * @param {{audio: {type: String, isPlay: Boolean}}} state
 * @return {{audioType: String, isPlayAudio: boolean}}
 */
const mapStateToProps = state => {
    return {
        isOpen: state.editForm.isOpen,
        timer: state.editForm.idTimerForEdit ? state.timers.byId[state.editForm.idTimerForEdit] : defaultTimer,
    };
};

/**
 * @param {Function} dispatch
 * @return {{onClose: function()}}
 */
const mapDispatchToProps = dispatch => {
    return {
        onClose: () => {
            dispatch(closeEditForm());
        },
        /**
         * @param {{title, description, value}} timer: new Data
         */
        onAddTimer: timer => {
            dispatch(addTimer(timer));
        },
        /**
         * @param {id} id
         * @param {Object} timer: new Data
         */
        onSaveTimer: (id, timer) => {
            dispatch(editTimer(id, timer));
        },
        /**
         * @param {id} id
         */
        onDeleteTimer: id => {
            dispatch(deleteTimer(id));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(EditFormContainer);
