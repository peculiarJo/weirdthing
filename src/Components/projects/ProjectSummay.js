import React from 'react'
import moment from 'moment'
import PreviewPicture from '../utility/PreviewPicture'

const ProjectSummary = ({ project }) => {
    return (
        <div className="card z-depth-0 project-summary">
        {
            project.imageUrl?(
                <div className="card-image">
                    <PreviewPicture className="project-image" pictureUrl={project.imageUrl} />
                    <span className="btn-floating halfway-fab waves-effect waves-light pink">
                        <i className="material-icons">thumb_up</i>
                    </span>
                </div>):null

        }
            <div className="card-content">
                <span className="card-title">{project.title}</span>
                <p>Posted by {project.authorFirstName + ' ' + project.authorLastName}</p>
                <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}

export default ProjectSummary