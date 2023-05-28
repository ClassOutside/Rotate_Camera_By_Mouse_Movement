class CameraOrientationState {
    constructor() {
      this.pitchAngle = 0;
      this.yawAngle = 0;
      this.startingPitchAngleForCurrentCoordinates = 0;
      this.startingYawAngleForCurrentCoordinates = 0;
      this.previousPitchAngle = 0;
      this.previousYawAngle = 0;
      this.lastMouseMoveTime = 0;
      this.movementDuration = 100;
    }
  }
  
  export default CameraOrientationState;