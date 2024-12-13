import React, { useEffect, useRef } from "react";
import Webcam from "react-webcam";
import * as deepar from 'deepar';
import * as effect from './effectx';

const CustomWebcam = () => {
  const previewRef = useRef(null);

  useEffect(() => {
    const loadDeepAR = async () => {
      if (!deepar) {
        console.error("DeepAR library not loaded.");
        return;
      }else{
        console.log("DeepAR library loaded")
      }

     try {
       deepAR = await deepar.initialize({
         licenseKey: "9c67dbd32a988cabb700af7efb1f6de30c4a233a7eb5e9d6fc790077da2073c459216945e00020aa",
         previewElement,
         effect: effectList[1],
         // Removing the rootPath option will make DeepAR load the resources from the JSdelivr CDN,
         // which is fine for development but is not recommended for production since it's not optimized for performance and can be unstable.
         // More info here: https://docs.deepar.ai/deepar-sdk/platforms/web/tutorials/download-optimizations/#custom-deployment-of-deepar-web-resources
         rootPath: "./deepar-resources",
         additionalOptions: {
           cameraConfig: {
             // facingMode: 'environment'  // uncomment this line to use the rear camera
           },
         },
       });
     } catch (error) {
       console.error(error);
       document.getElementById("loading-screen").style.display = "none";
       document.getElementById("permission-denied-screen").style.display = "block";
       return;
     }
   
    };
    
    loadDeepAR(); // Gọi hàm khởi tạo DeepAR

    // return () => {
    //   if (deepar) {
    // deepar.destroy();
    //   }
    // };
  }, []);

  return (
    <div   ref={previewRef} >
      <Webcam id='deepar-div' style={{  transform: "scaleX(-1)",width: "640px", height: "480px", border: "1px solid black" }}/>
    </div>
  );
};

export default CustomWebcam;
