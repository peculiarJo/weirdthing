import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../store/actions/authActions'
import { uploadFile } from '../../store/actions/fileAction'
import FileUploader from '../utility/FileUploader'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        avatar: null,
        avatarUrl: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let task = this.props.uploadFile(this.state.avatar, 'avatars');
        console.log(task);
        task.on('state_changed',
            (snapshot) => { },
            (err) => { },
            () => {
                task.snapshot.ref.getDownloadURL().then((url) => {
                    this.setState({
                        avatarUrl: url
                    });
                    this.props.signUp(this.state);                    
                })
            }
        )
    }
    setAvatar = (avatar) => {
        this.setState({
            avatar: avatar
        })
    }

    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}></input>
                    </div>
                    <FileUploader buttonName="AVATAR" setFile={this.setAvatar} />
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">SIGN UP</button>
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
    console.log(state)
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser)),
        uploadFile: (file, folder) => dispatch(uploadFile(file, folder))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)