export const VideoCard = ({ video }) => {
    return (
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="relative">
          <img
            src={video.thumbnail}
            alt="Video thumbnail"
            className="w-full object-cover aspect-video"
          />
          <span className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-sm">
            {video.duration}
          </span>
          <span className="absolute top-2 left-2 bg-black/80 px-2 py-1 rounded text-sm">
            {video.title}
          </span>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-400">{video.brand}</span>
            <span className="text-gray-400">{video.views} views</span>
          </div>
        </div>
      </div>
    );
  };