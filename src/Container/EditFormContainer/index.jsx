import React, {Component} from 'react';
import {connect} from 'react-redux';

import EditForm from '../../Components/EditForm';
import {closeEditForm} from '../../actionCreators';
import {editTimer} from '../../actionCreators/timerActions';

class EditFormContainer extends Component {
    render() {
        const title = `${this.props.timer ? 'Edit' : 'Add'} Timer`;
        return (
            <EditForm
                {...this.props}
                titleForm={title}
            />
        );
    }
}


/**
 * @param {{audio: {type: String, isPlay: Boolean}}} state
 * @return {{audioType: String, isPlayAudio: boolean}}
 */
const mapStateToProps = state => {
    return {
        isOpen: state.editForm.isOpen,
        timer: state.editForm.idTimerForEdit ? state.timers.byId[state.editForm.idTimerForEdit] : {},
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
         * @param {id} id
         * @param {Object} timer: new Data
         */
        onSaveTimer: (id, timer) => {
            console.log(id);
            console.log(timer);
            dispatch(editTimer(id, timer));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(EditFormContainer);
