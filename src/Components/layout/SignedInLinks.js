import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import PreviewPicture from '../utility/PreviewPicture'

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li>
                <NavLink to='/create'>New Idea</NavLink>
            </li>
            <li>
                <a onClick={props.signOut}>Log Out</a>
            </li>
            <li>
                <NavLink to='/about'>About</NavLink>
            </li>
            {
                props.profile.avatarUrl?
                (<li>
                    <PreviewPicture pictureUrl={props.profile.avatarUrl} width={45} className="avatar" />
                </li>):
                (<li>
                    <NavLink to='/' className="btn btn-floating pink lighten-1">{props.profile.initials}</NavLink>
                </li>)
            }
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);