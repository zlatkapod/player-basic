import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>
    }
    const URL = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`;

    return (
        <div>
            <div className="ui embed">
                <iframe src={URL} title={video.snippet.title}></iframe>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
};

export default VideoDetail;