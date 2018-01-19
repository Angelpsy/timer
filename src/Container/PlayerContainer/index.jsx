import React, {Component} from 'react';
import {connect} from 'react-redux';
import {stopAudio} from '../../actionCreators';

import audioStopMp3 from './audio/double_beebeep.mp3';
import audioStartMp3 from './audio/soft.mp3';
import audioStopOgg from './audio/double_beebeep.ogg';
import audioStartOgg from './audio/soft.ogg';

class Player extends Component {
    render() {
        return (
            this.props.isPlayAudio ?
                <audio
                    onEnded={this.props.onStopAudio}
                    autoPlay>
                    <source
                        type="audio/ogg; codecs=vorbis"
                        src={this.props.audioType === 'start' ? audioStartOgg : audioStopOgg}
                    />
                    <source
                        type="audio/mpeg"
                        src={this.props.audioType === 'start' ? audioStartMp3 : audioStopMp3}
                    />
                </audio>
                : null
        );
    }
}

const mapStateToProps = state => {
    return {
        // audioSrc: state.audio.src,
        audioType: state.audio.type,
        isPlayAudio: state.audio.isPlay,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onStopAudio: () => {
            dispatch(stopAudio());
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
