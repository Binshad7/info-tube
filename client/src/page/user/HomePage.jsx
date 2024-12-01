
import { VideoCard } from '../../assets/VideoCard';
// Header.jsx
import React, { useEffect, useState } from 'react';
import Header from '../../components/user/Header/Header';
import Sidebars from '../../components/user/SideBar/SideBar';
import { CategoryBar } from '../../components/user/category/Category';
import SignCard from '../../components/user/SignCard';



export const VideoGrid = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};



const App = () => {
  const categories = [
    'Network', 'Sports', 'Educational', 'Musician', 'Deportes', 'Gastronomic'
  ];

  const [isFirst, setIsFirst] = useState(true)
  const videos = [
    {
      id: 1,
      thumbnail: "/api/placeholder/400/250",
      duration: "12:43",
      title: "Tutorial",
      brand: "NIKON CORPORATION",
      views: "2.5K"
    },
    {
      id: 2,
      thumbnail: "/api/placeholder/400/250",
      duration: "32:00",
      title: "Tutorial",
      brand: "Canon EOS REBEL",
      views: "7.8K"
    },
    {
      id: 3,
      thumbnail: "/api/placeholder/400/250",
      duration: "22:43",
      title: "Tutorial",
      brand: "SONY ILCE-7M2",
      views: "12.9K"
    },
    {
      id: 4,
      thumbnail: "/api/placeholder/400/250",
      duration: "12:43",
      title: "Tutorial",
      brand: "NIKON CORPORATION",
      views: "5.2K"
    },
    {
      id: 5,
      thumbnail: "/api/placeholder/400/250",
      duration: "32:00",
      title: "Tutorial",
      brand: "Canon EOS REBEL",
      views: "9.5K"
    },
    {
      id: 6,
      thumbnail: "/api/placeholder/400/250",
      duration: "22:43",
      title: "Tutorial",
      brand: "SONY ILCE-7M2",
      views: "13.5K"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {isFirst && <SignCard setIsFirst={setIsFirst}/>}
      <Header />
      <div className="flex">
        <Sidebars />
        <main className="flex-1 p-6">
          <CategoryBar categories={categories} />
          <VideoGrid videos={videos} />
        </main>
      </div>
    </div>
  );
};

export default App;