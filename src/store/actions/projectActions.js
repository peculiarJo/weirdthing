export const createProject=(project)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore=getFirestore();
        const profile = getState().firebase.profile;
        const authorId =getState().firebase.auth.uid;
        firestore.collection('projects').add({
            title:project.title,
            content:project.content,
            imageUrl:project.imageUrl,
            authorFirstName:profile.firstName,
            authorLastName:profile.lastName,
            authorId:authorId,
            createdAt:new Date()
        }).then(()=>{
            dispatch({type:'CREATE_PROJECT',project});
        }).catch((err)=>{
            dispatch({type:'CREATE_PROJECT_ERROR',err});
        })
    }
}