import React from'react'

const PreviewPicture =(props)=>{
    const {pictureUrl,className} =props;
    return(
        <img width="300" className={className} src={pictureUrl}></img>
    )
}

export default PreviewPicture