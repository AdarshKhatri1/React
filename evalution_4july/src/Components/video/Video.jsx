import { useRef, useState } from "react";
import Button from "../common/Button";

function VideoPlayer() {

  const [haplay,setHdplay] = useState(false);
  const [hapause,setHdpause] = useState(false)

  const ref = useRef(null)

  function handlePlay(){
    console.log("play")
    ref.current.play();
    setHdplay(true)
    setHdpause(false)
  }
  function handlePause(){
    console.log("pause")
    ref.current.pause();
    setHdpause(true)
    setHdplay(false)
  }
  function handleSkip(value){

    console.log("skip")
    ref.current.currentTime+=value

  }


  return (
    <div>
      <video ref= {ref}  data-testid="video-container" width="400" controls>
        <source
          src="https://masai-course.s3.ap-south-1.amazonaws.com/material/videos/28028/guf8bBRwEwJsL01geZELebV0BmSX3jqkKNPVpLNV.mp4"
          type="video/mp4"
        />
        
      </video>
      <div>
        <Button  handleButton={handlePlay} children="PLAY" disabled={haplay}>
          PLAY
        </Button>
        <Button handleButton={handlePause} children="PAUSE" disabled={hapause} >
          PAUSE
        </Button>
        <Button handleButton={()=>(
          handleSkip(30)
        )} children="SKIP 30 SECONDS" disabled={false} >
          SKIP 30 SECONDS
        </Button>
      </div>
    </div>
  );
}

export default VideoPlayer;
