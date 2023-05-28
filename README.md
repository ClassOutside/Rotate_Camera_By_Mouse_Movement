Hello! 

The goal of this repository is to provide a working example for a custom Three.JS camera. The camera automatically tracks the mouse's position, and rotates the camera towards the mouse's position over a time interval. 

A video is available walking through some of the steps present in this repository. The video can be found here: https://www.youtube.com/watch?v=E8KweW0Iv5Q

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
TO IMPLEMENT THIS IN YOUR OWN PROJECT
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

1.  Import the following methods from the CameraWithMouseRotation.js file:
    - Example: import { PerspectiveCameraForResizableWindow , handleCameraRotation, handleMouseMovement } from './CameraWithMouseRotation.js';

2. Import CameraOrientationState.js
    - Example: import CameraOrientationState from './CameraOrientationState.js';

2.  Create a camera using the PerspectiveCameraForResizableWindow function
    - Example: const camera = PerspectiveCameraForResizableWindow(cameraFOV, howNearToRender, howFarToRender, renderer); //Replace the parameters with your own values.

4. Create a CameraOrientationState object to keep track of the camera's state as it rotates.
    - Example: let cameraOrientationState = new CameraOrientationState();

5. Listen for when the mouse is moved, and call a function. Here the function is named OnMouseMove.
    - Example: document.addEventListener('mousemove', onMouseMove, false);

6. Create a variable to store the mouse's current position.
    - Example: const mouse = new THREE.Vector2();

7. When the mouse moves, normalize the mouse's position and record it in the mouse variable
    - Example: mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
               mouse.y = (event.clientY / window.innerHeight) * 2 - 1;
               
8. When the mouse moves, call handleMouseMovement.
    - Example: handleMouseMovement(mouse.x, mouse.y, cameraOrientationState);

9. When the window animates, call handleCameraRotation.
    - Example: handleCameraRotation(camera, cameraOrientationState);

10. Optionally Change the following values:
    - CameraOrientationState.movementDuration - This value affects how long the animation should take.
    - The rotationScale value in handleMouseMovement - This value affects how far the camera can rotate.
    - The minimumDegreeOfChange value in handleCameraRotation - This value affects the camera's minimum speed of rotation. 



