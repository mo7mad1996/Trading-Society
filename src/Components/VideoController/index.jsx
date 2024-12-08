import React, { useState, useRef, useEffect } from "react";
import debounce from "lodash.debounce";

// component
import ReactPlayer from "react-player";

// icons
import { FaPlay } from "react-icons/fa";
import { IoMdPause } from "react-icons/io";
import { RiFullscreenFill, RiFullscreenExitLine } from "react-icons/ri";
import { IoVolumeMedium, IoVolumeMute } from "react-icons/io5";

// css
import css from "./style.module.css";

// component
const CustomVideoPlayer = ({ src, poster }) => {
  const video_controller = useRef(null); // HTML ref
  const playerRef = useRef(null); // HTML ref

  // data
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // methods
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

  const handlePlaybackRateChange = debounce((e) => {
    const newRate = parseFloat(e.target.value);

    if (newRate !== playbackRate) {
      setPlaybackRate(newRate);
      const internalPlayer = playerRef.current?.getInternalPlayer();
      if (internalPlayer) {
        internalPlayer.setPlaybackRate(newRate);
      }
    }
  }, 300);

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);

    if (newVolume !== volume) {
      setVolume(newVolume);
      const internalPlayer = playerRef.current?.getInternalPlayer();
      if (internalPlayer && typeof internalPlayer.setVolume === "function") {
        internalPlayer.setVolume(newVolume);
      }
    }
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
  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    playerRef.current?.getInternalPlayer()?.setMuted(!isMuted);
  };
  useEffect(() => {
    sessionStorage.clear();
  }, []);

  // render
  return (
    <div className={css.video_container} ref={video_controller}>
      {poster && !isPlaying ? (
        <img
          src={poster}
          alt="Poster"
          className={css.poster}
          onClick={() => setIsPlaying(true)} // Show video when the poster is clicked
        />
      ) : (
        <ReactPlayer
          ref={playerRef}
          url={src}
          playing={isPlaying}
          width="100%"
          height="100%"
          controls={false}
          onProgress={handleProgress}
          onDuration={handleDuration}
          muted={isMuted}
          volume={parseFloat(volume)}
          playbackRate={playbackRate}
        />
      )}
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

        <button
          onClick={toggleMute}
          style={{
            fontSize: "16px",
          }}
        >
          {isMuted ? <IoVolumeMute /> : <IoVolumeMedium />}
        </button>
        <label className={css.slider1}>
          <input
            type="range"
            className={css.level1}
            min="0"
            max="1"
            value={volume}
            step="0.01"
            onChange={handleVolumeChange}
          />
        </label>

        <select
          onChange={handlePlaybackRateChange}
          value={playbackRate}
          name="playbackRate"
        >
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
