import React, { Component } from 'react'
import PreviewPicture from './PreviewPicture'

class FileUploader extends Component {
    state={
        fileUrl:null
    }
    displayPicture=(e)=>{
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend=()=>{
            this.props.setFile(file);
            this.setState({
                fileUrl:reader.result
            })
        }
        reader.readAsDataURL(file);
    }
    render() {
        const {buttonName}=this.props;
        return (
            <div className="form-group">
                <div className="file-field input-field">
                    <div className="btn">
                        <span >{buttonName}</span>
                        <input type="file" onChange={this.displayPicture}/>
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                    </div>
                    <PreviewPicture pictureUrl={this.state.fileUrl} />
                </div>
            </div>
        )

    }
}

export default FileUploader