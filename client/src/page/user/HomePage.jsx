import React, { useState } from 'react'
import Header from '../../components/user/Header/Header'
import VideoCard from '../../components/user/VideoCard/VideoCard'
import Sidebar from '../../components/user/SideBar/SideBar';




function HomePage() {

  const [searchQuery, setSearchQuery] = useState("");
  const [videos] = useState([
    {
      id: 1,
      title: "Learn React in 30 Minutes",
      channel: "Dev Channel",
      views: "100K",
      timestamp: "2 days ago"
    },
    {
      id: 2,
      title: "Build a YouTube Clone",
      channel: "Code Masters",
      views: "50K",
      timestamp: "1 week ago"
    },
    {
      id: 3,
      title: "Web Development Tips",
      channel: "Tech Tips",
      views: "75K",
      timestamp: "3 days ago"
    },
    {
      id: 4,
      title: "Web Development Tips",
      channel: "Tech Tips",
      views: "75K",
      timestamp: "3 days ago"
    },
    {
      id: 5,
      title: "Web Development Tips",
      channel: "Tech Tips",
      views: "75K",
      timestamp: "3 days ago"
    },
    {
      id: 6,
      title: "Web Development Tips",
      channel: "Tech Tips",
      views: "75K",
      timestamp: "3 days ago"
    }
  ]);

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-screen flex flex-col bg-white">
      <Header onSearch={setSearchQuery} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-4 overflow-y-auto bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredVideos.map(video => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default HomePage
