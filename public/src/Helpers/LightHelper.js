import * as THREE from 'three'

export const SetupPointLight = ( positionX, positionY, positionZ, scene) => {
    
    const pointLight = new THREE.PointLight(0xffffff);

    pointLight.position.set(positionX, positionY, positionZ);

    scene.add(pointLight);

    return pointLight;
}

export const SetupPointLightHelper = (pointLight, scene) => {
    //LightHelpers help you discover the position of a light
    const lightHelper = new THREE.PointLightHelper(pointLight);
    scene.add(lightHelper);
}

export const SetupAmbientLight = (scene) => {
    //ambientLight goes across the entire scene
    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);
}