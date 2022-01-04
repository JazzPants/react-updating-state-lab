// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

class YouTubeDebugger extends Component {
    constructor() {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
        console.log(this.state.settings.bitrate)
    }
    

    handleChangeBitRate = () => {
        this.setState({
            settings : 
            {...this.state.settings, bitrate: 12}
        }, () => console.log(this.state.settings.bitrate))

    }

    handleChangeResolution = () => {
        this.setState({settings: {
            ...this.state.settings,
            video: { //updating a nest state
                ...this.state.settings.video, //if we don't use spread operator, it'll remove other properties in the video object!
                resolution: '720p'
            }

        }}, () => console.log(this.state.settings.video.resolution))
    }

    handleChangeUsers = () => {
        this.setState({
            //...this.state, \still works\
            user: 'John'
        }, () => console.log(this.state.user))
    }

render() {
    return(
        <div>
            <button className='bitrate' onClick={this.handleChangeBitRate}>Change bitrate</button>

            <button className='resolution' onClick={this.handleChangeResolution}>Change resolution</button>

            <button className='user' onClick={this.handleChangeUsers}>Change users</button>
        </div>
    )
}

}



export default YouTubeDebugger;