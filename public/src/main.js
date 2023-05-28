import * as THREE from 'three'
import { PerspectiveCameraForResizableWindow , handleCameraRotation, handleMouseMovement } from './CameraWithMouseRotation.js';
import CameraOrientationState from './CameraOrientationState.js';
import { LoadGLTFByPath } from './Helpers/ModelHelper.js'
import { SetupPointLight , SetupPointLightHelper, SetupAmbientLight} from './Helpers/LightHelper.js'

//Scene is container for objects, cameras, and lights
const scene = new THREE.Scene();

//Renderer does the job of rendering the graphics
const renderer = new THREE.WebGLRenderer({

	//Defines the canvas component in the DOM that will be used
	canvas: document.querySelector('#background')
});

//Create Perspective Camera that resizes with the window
const camera = PerspectiveCameraForResizableWindow(30, 0.1, 10000, renderer);

//Load the 3D Model
LoadGLTFByPath(scene, camera, renderer);

//Add a light to the scene
let pointLight = SetupPointLight(20, 20, 20, scene);
SetupPointLightHelper(pointLight, scene);
SetupAmbientLight(scene);

//gridHelper draws a grid over the scene
const gridHelper = new THREE.GridHelper(200, 50)
scene.add(gridHelper);

//Create a variable to keep track of mouse position
const mouse = new THREE.Vector2();

//Set up the default cameraOrientationStateObject
let cameraOrientationState = new CameraOrientationState();

//A function to be called every time the mouse moves
function onMouseMove(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = (event.clientY / window.innerHeight) * 2 - 1;

  handleMouseMovement(mouse.x, mouse.y, cameraOrientationState);
}

//Add listener to call onMouseMove every time the mouse moves in the browser window
document.addEventListener('mousemove', onMouseMove, false);

//A method to be run each time a frame is generated
function animate() {
  requestAnimationFrame(animate);
  
  handleCameraRotation(camera, cameraOrientationState);

  renderer.render(scene, camera);
};

animate();

