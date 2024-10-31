import React, { useRef, useState } from 'react';
import Navbar from '../../common/Navbar'; // Import Navbar
import { ReactComponent as PlayIcon } from '../../assets/play.svg'; // Play Icon SVG
import { ReactComponent as PauseIcon } from '../../assets/pause.svg'; // Pause Icon SVG
import { ReactComponent as MuteIcon } from '../../assets/mute.svg'; // Mute Icon SVG
import { ReactComponent as UnmuteIcon } from '../../assets/sound.svg'; // Unmute Icon SVG

const HomePage = () => {
  const videoRef = useRef(null); // Reference for the video element
  const [isPlaying, setIsPlaying] = useState(true); // Track play/pause state
  const [isMuted, setIsMuted] = useState(true); // Track mute/unmute state

  // Toggle play/pause functionality
  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Toggle mute/unmute functionality
  const toggleMute = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 -z-10">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={`${process.env.PUBLIC_URL}/video.mp4`}
          autoPlay
          muted={isMuted}
          loop
          playsInline // Prevents fullscreen controls on mobile
        />
      </div>

      {/* Gradient Overlay for Navbar */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent"></div>

      {/* Navbar */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Text Content Positioned in Bottom-Left */}
      <div className="absolute bottom-10 left-10 text-white">
        <h1 className="text-3xl font-thin mb-2">Welcome to</h1>
        <h2 className="text-7xl w-4/6 ">Indian Institute of Technology Guwahati</h2>
      </div>

      {/* Controls Positioned at Bottom-Right */}
      <div className="absolute bottom-8 right-8 flex space-x-4">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="bg-white bg-opacity-20 p-4 rounded-full hover:bg-opacity-40 transition"
        >
          {isPlaying ? (
            <PauseIcon className="w-8 h-8 text-white" />
          ) : (
            <PlayIcon className="w-8 h-8 text-white" />
          )}
        </button>

        {/* Mute/Unmute Button */}
        <button
          onClick={toggleMute}
          className="bg-white bg-opacity-20 p-4 rounded-full hover:bg-opacity-40 transition"
        >
          {isMuted ? (
            <MuteIcon className="w-8 h-8 text-white" />
          ) : (
            <UnmuteIcon className="w-8 h-8 text-white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default HomePage;