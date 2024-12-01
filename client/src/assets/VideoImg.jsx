import React from 'react'

function VideoImg() {
  return (
    <div className="overflow-hidden">
      <img
        src="/fallback.avif"
        loading="lazy"
        className="w-full rounded hover:scale-105 transition-all ease duration-1000"
      />
    </div>
  )
}

export default VideoImg
