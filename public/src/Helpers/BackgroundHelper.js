
import * as THREE from 'three'

export const AddFlatBackgroundImageByFilePath = (scene, backgroundImagePath) => {

    const background_360 = new THREE.TextureLoader().load(backgroundImagePath);

    //Update the scene's background
    scene.background = background_360;
}