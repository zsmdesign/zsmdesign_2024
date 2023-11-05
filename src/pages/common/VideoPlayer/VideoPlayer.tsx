import * as React from "react";
import videojs from "video.js";

// Styles
import "video.js/dist/video-js.css";

interface IVideoPlayerProps {
  // @ts-ignore
  options: videojs.PlayerOptions;
}

// @ts-ignore
const initialOptions: videojs.PlayerOptions = {
  controls: true,
  fluid: true,
  controlBar: {
    volumePanel: {
      inline: false
    }
  }
};

const VideoPlayer: React.FC<IVideoPlayerProps> = ({ options }) => {
  const videoNode = React.useRef<HTMLVideoElement>();
  // @ts-ignore
  const player = React.useRef<videojs.Player>();

  React.useEffect(() => {
    // @ts-ignore
    player.current = videojs(videoNode.current, {
      ...initialOptions,
      ...options
    }).ready(function() {
      // console.log('onPlayerReady', this);
    });
    return () => {
      if (player.current) {
        player.current.dispose();
      }
    };
  }, [options]);

  // @ts-ignore
  return <video ref={videoNode} className="video-js" />;
};

export default VideoPlayer;
