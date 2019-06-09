import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { createProject } from '../../store/actions/projectActions'
import FileUploader from '../utility/FileUploader'
import { uploadFile } from '../../store/actions/fileAction';

class CreateProject extends Component {
    state = {
        title: '',
        content: '',
        image:null,
        imageUrl:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let task = this.props.uploadFile(this.state.image, 'images');
        console.log(task);
        task.on('state_changed',
            (snapshot) => { },
            (err) => { },
            () => {
                task.snapshot.ref.getDownloadURL().then((url) => {
                    this.setState({
                        imageUrl: url
                    });
                    this.props.createProject(this.state);      
                    //redirect to home
                    this.props.history.push('/');           
                })
            }
        )
    }
    setimage = (image) => {
        this.setState({
            image: image
        })
    }
    render() {
        const { auth, authError } = this.props;
        if (!auth.uid) return <Redirect to='/signup' />
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create Idea</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Your Idea</label>
                        <textarea className="materialize-textarea" id="content" onChange={this.handleChange}>

                        </textarea>
                    </div>
                    <FileUploader buttonName="IMAGE" setFile={this.setimage} />
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                        <div className="red-text center">
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project)),
        uploadFile: (image,folder)=>dispatch(uploadFile(image,folder))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)