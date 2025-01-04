import React from 'react';
import Video111 from '../../images/Octopus.mp4';

function VideoPlayerPrincipal() {
    return (
      <div>
        <video
          autoPlay
          loop
          muted
          style={{ width: '100%' }}
        >
          <source src={Video111} type="video/mp4" />
        </video>
      </div>
    );
  }
  
export default VideoPlayerPrincipal;