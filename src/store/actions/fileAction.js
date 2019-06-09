export const uploadFile = (file,folder) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const storage = getFirebase().storage();
        console.log(`${folder}/${new Date().getTime()+file.name}`)
        const uploadTask = storage.ref().child(`${folder}/${new Date().getTime()+file.name}`).put(file);
        //uploadTask.on('state_changed',
        //    (snapshot) => {
        //        dispatch({ type: "UPLOAD_IMAGE_PROGRESS",snapshot })
        //    },
        //    (err) => {
        //        dispatch({ type: "UPLOAD_IMAGE_ERROR", err });
        //    },
        //    () => {
        //        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
        //            dispatch({ type: "UPLOAD_IMAGE_COMPLETE", url });
        //        })
        //    }
        //)
        return uploadTask;
    }
}