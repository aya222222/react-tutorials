import React from 'react'
import VideoITem from './VideoITem'
const VideoList = ({videos, onVideoSelect}) => {
    console.log(videos)
    const renderedList = videos.map((video) => {
        console.log(video)
        return <VideoITem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video} />
    })

  return (
    <div className="ui relaxed devided list">{renderedList}</div>
  )
}

export default VideoList