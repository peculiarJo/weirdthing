const initState={
}

const fileReducer = (state=initState, action)=>{
    switch(action.type){
        case 'UPLOAD_IMAGE_PROGRESS':
        console.log('uploading',action.snapshot);
        return state;
        case 'UPLOAD_IMAGE_ERROR':
        console.log('upload error',action.err);
        return state;
        case 'UPLOAD_IMAGE_COMPLETE':
        console.log('upload completed',action.url);

        return {
            ...state,
            downloadUrl:action.url
        };
        default:
        return state;
    }
}

export default fileReducer