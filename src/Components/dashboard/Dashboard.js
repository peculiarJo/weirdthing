import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Notifications from './Notifications'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    render() {
        const { projects ,auth, notifications} = this.props;       
        if (!auth.uid) return <Redirect to='/signup' />
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m8">
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col s12 m4">
                        <Notifications notifications={notifications}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        auth:state.firebase.auth,
        notifications:state.firestore.ordered.notification
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' , orderBy:['createdAt','desc']},
        {collection:'notification',limit:5, orderBy:['time','desc']}
    ])
)(Dashboard)

//export default connect(mapStateToProps)(Dashboard)