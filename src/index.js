import * as deepar from "deepar";


// Log the version. Just in case.
console.log("Deepar version: " + deepar.version);

// Top-level await is not supported.
// So we wrap the whole code in an async function that is called immediatly.
(async function () {
  // Get the element you want to place DeepAR into. DeepAR will inherit its width and height from this and fill it.
  const previewElement = document.getElementById("ar-screen");

  // trigger loading progress bar animation
  const loadingProgressBar = document.getElementById("loading-progress-bar");
  loadingProgressBar.style.width = "100%";

  // All the effects are in the public/effects folder.
  // Here we define the order of effect files.
  const effectList = [
    "effects/ray-ban-wayfarer.deepar",
    "effects/viking_helmet.deepar",
    "effects/MakeupLook.deepar",
    "effects/Split_View_Look.deepar",
    "effects/flower_face.deepar",
    "effects/Stallone.deepar",
    "effects/galaxy_background_web.deepar",
    "effects/Humanoid.deepar",
    "effects/Neon_Devil_Horns.deepar",
    "effects/Ping_Pong.deepar",
    "effects/Pixel_Hearts.deepar",
    "effects/Snail.deepar",
    "effects/Hope.deepar",
    "effects/Vendetta_Mask.deepar",
    "effects/Fire_Effect.deepar",
  ];

  let deepAR = null;

  // Initialize DeepAR with an effect file.

    deepAR = await deepar.initialize({
      licenseKey: "a388fff3841b97fc63d257adfbc7dfe12fb9bf45415acdf652fa1b200ef28b1759f9db47c3f3bcd5",
      previewElement,
      effect: effectList[1],
      // Removing the rootPath option will make DeepAR load the resources from the JSdelivr CDN,
      // which is fine for development but is not recommended for production since it's not optimized for performance and can be unstable.
      // More info here: https://docs.deepar.ai/deepar-sdk/platforms/web/tutorials/download-optimizations/#custom-deployment-of-deepar-web-resources
      // rootPath: "./deepar-resources",
      additionalOptions: {
        cameraConfig: {
          facingMode: 'user'  // uncomment this line to use the rear camera
        },
      },
    });


  // Hide the loading screen.
  document.getElementById("loading-screen").style.display = "none";
  document.getElementById("ar-screen").style.display = "block";

  window.effect = effectList[0];


})();
