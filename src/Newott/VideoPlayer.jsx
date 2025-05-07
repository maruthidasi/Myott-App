import React, { useRef, useState } from 'react';
import './VideoPlayer.scss';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [brightness, setBrightness] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleForward = () => {
    videoRef.current.currentTime += 10;
  };

  const handleBackward = () => {
    videoRef.current.currentTime -= 10;
  };

  const handleBrightnessChange = (e) => {
    const value = parseFloat(e.target.value);
    setBrightness(value);
    if (videoRef.current) {
      videoRef.current.style.filter = `brightness(${value})`;
    }
  };

  const handleProgressChange = (e) => {
    const value = parseFloat(e.target.value);
    setProgress(value);
    if (videoRef.current) {
      videoRef.current.currentTime = (value / 100) * videoRef.current.duration;
    }
  };

  const handleVolumeChange = (e) => {
    const value = parseFloat(e.target.value);
    setVolume(value);
    if (videoRef.current) {
      videoRef.current.volume = value;
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleFullscreen = () => {
    const video = videoRef.current;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { 
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { 
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { 
      video.msRequestFullscreen();
    }
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        className="video-player"
        width="640"
        height="360"
        title="HIT 3 Telugu Trailer"
        onTimeUpdate={() => {
          const video = videoRef.current;
          setProgress((video.currentTime / video.duration) * 100);
        }}
      >
        <source src="/HIT 3 Telugu Trailer.mp4" type="video/mp4" />
      </video>

      <div className="video-controls">
        <div className="brightness-control">
          <span className="brightness-icon" title="Brightness">🔆</span>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={brightness}
            onChange={handleBrightnessChange}
            className="brightness-slider"
          />
        </div>
        <input
          type="range"
          className="progress-bar"
          value={progress}
          onChange={handleProgressChange}
          min="0"
          max="100"
        />

        <div className="control-buttons">
          <button onClick={handleBackward} title="Back 10s" className="left-button">
            <div className="icon-circle">
              <span className="arrow">⏪</span>
            </div>
          </button>
          <button onClick={handlePlayPause} title="Play/Pause" className="play-pause-button">
            <div className="icon-circle">
              {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </div>
          </button>
          <button onClick={handleForward} title="Forward 10s" className="right-button">
            <div className="icon-circle">
              <span className="arrow">⏩</span>
            </div>
          </button>

          {/* Volume & Mute Control */}
          <div className="volume-container">
            <button onClick={toggleMute} title={isMuted ? "Unmute" : "Mute"} className="control-button">
              <div className="icon-circle enhanced">
                {isMuted || volume === 0 ? (
                  // Muted Icon
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                    <path d="M16.5 12c0-1.77-.77-3.36-2-4.47v8.94c1.23-1.11 2-2.7 2-4.47zm3.5 0c0 2.48-1.13 4.7-2.9 6.14l1.45 1.45C20.32 17.92 22 15.13 22 12s-1.68-5.92-4.45-7.59l-1.45 1.45C18.87 7.3 20 9.52 20 12zM4 9v6h4l5 5V4L8 9H4z" />
                  </svg>
                ) : (
                  // Volume Icon
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                    <path d="M3 10v4h4l5 5V5L7 10H3zm13.5 2c0-1.77-.77-3.36-2-4.47v8.94A5.985 5.985 0 0 0 16.5 12z" />
                  </svg>
                )}
              </div>
            </button>

            {/* Volume Slider (Hidden by default, appears on hover) */}
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="volume-slider"
              title="Volume"
            />
          </div>

          {/* Fullscreen Button */}
          <button onClick={handleFullscreen} title="Fullscreen" className="control-button">
            <div className="icon-circle enhanced">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M7 14H5v5h5v-2H7v-3zm0-4h2V7h3V5H7v5zm10 4h2v3h-3v2h5v-5h-4zm0-4V7h-3V5h5v5h-2z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
