

const VideoCard = ({ video }) => (
  <div className="cursor-pointer">
    <div className="overflow-hidden">
      <img
        src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
        loading="lazy"
        alt={video.title}
        className="w-full rounded hover:scale-105 transition-all ease duration-1000"
      />
    </div>
    <div className="mt-2">
      <h3 className="font-semibold">{video.title}</h3>
      <p className="text-sm text-gray-600">{video.channel}</p>
      <p className="text-sm text-gray-600">
        {video.views} views • {video.timestamp}
      </p>
    </div>
  </div>
);

export default VideoCard