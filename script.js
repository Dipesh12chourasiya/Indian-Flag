
Shery.imageEffect("#back", {
  style: 5,
  config: {
    a: { valu: 1.49, range: [0, 30], value: 2.52 },
    b: { value: -0.94, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 2.105263052224458 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 3.89, range: [0, 10] },
    metaball: { value: 0.04, range: [0, 2], _gsap: { id: 3 } },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.47, range: [0, 2] },
    noise_scale: { value: 74.81, range: [0, 100] }
  },
  // debug: true,
  gooey: true,
});


const audio = new Audio('song.mp3');
let back = document.getElementById("back");
back.addEventListener('click',()=>{
  audio.play()
  .then(() => {
    console.log('audio playback started successfully');
  })
  .catch(error => {
    console.log('audio playback failed:', error.message);
  });
})
