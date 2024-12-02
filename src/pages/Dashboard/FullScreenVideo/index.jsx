import css from "./style.module.css";
import { useParams } from "react-router-dom";
import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";

import { FaPlay } from "react-icons/fa";
import { IoMdPause } from "react-icons/io";
import { RiFullscreenFill, RiFullscreenExitLine } from "react-icons/ri";
import { IoVolumeMedium } from "react-icons/io5";

const CustomVideoPlayer = () => {
  let { videoUrl } = useParams();
  let decodedUrl = decodeURIComponent(videoUrl);

  const video_controller = useRef(null);
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1); // صوت الفيديو
  const [playbackRate, setPlaybackRate] = useState(1); // سرعة التشغيل
  const [isFullscreen, setIsFullscreen] = useState(false); // حالة التكبير

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
    if (isPlaying) {
      playerRef.current?.getInternalPlayer()?.pause();
    } else {
      playerRef.current?.getInternalPlayer()?.play();
    }
  };

  const handleSeek = (e) => {
    const newTime = e.target.value;
    playerRef.current?.seekTo(newTime);
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    playerRef.current?.getInternalPlayer()?.setVolume(newVolume);
  };

  const handlePlaybackRateChange = (e) => {
    const newRate = e.target.value;
    setPlaybackRate(newRate);
    playerRef.current?.getInternalPlayer()?.setPlaybackRate(newRate);
  };

  const toggleFullscreen = () => {
    if (isFullscreen) {
      document.exitFullscreen();
    } else {
      video_controller.current.requestFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const handleProgress = (state) => {
    setCurrentTime(state.playedSeconds);
  };

  return (
    <div className={css.video_container} ref={video_controller}>
      <ReactPlayer
        ref={playerRef}
        url={decodedUrl}
        playing={isPlaying}
        width="100%"
        height="100%"
        controls={false}
        onProgress={handleProgress}
        onDuration={handleDuration}
        muted={isMuted}
        volume={volume}
        playbackRate={playbackRate}
      />
      <div className={css.controller}>
        <button onClick={handlePlayPause}>
          {isPlaying ? <IoMdPause /> : <FaPlay />}
        </button>

        <label className={css.slider} style={{ flex: 1 }}>
          <input
            type="range"
            className={css.level}
            onChange={handleSeek}
            min="0"
            step="0.1"
            max={duration}
            value={currentTime}
          />
        </label>

        <IoVolumeMedium />
        <label className={css.slider1}>
          <input
            type="range"
            className={css.level}
            min="0"
            max="1"
            value={volume}
            step="0.01"
            onChange={handleVolumeChange}
          />
        </label>

        <select onChange={handlePlaybackRateChange} value={playbackRate}>
          <option value="0.5">0.5x</option>
          <option value="1">1x</option>
          <option value="1.5">1.5x</option>
          <option value="2">2x</option>
        </select>
        <button onClick={toggleFullscreen}>
          {isFullscreen ? <RiFullscreenExitLine /> : <RiFullscreenFill />}
        </button>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
