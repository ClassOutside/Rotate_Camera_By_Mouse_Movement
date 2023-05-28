import * as THREE from 'three'
import { GLTFLoader } from '/node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { TransformControls } from '/node_modules/three/examples/jsm/controls/TransformControls.js';


// Currently does more than just load the GLTF model. it works for a specific model, rotating it and adding a widget. 
export const LoadGLTFByPath = (scene, camera, renderer) => {
    // Create a loader
    const loader = new GLTFLoader();

    let model = null;

    // Load the GLTF file
    loader.load( '/public/models/sitting_room_with_baked_textures/scene.gltf', (gltf) => {

        model = gltf.scene;

        scene.add(model);

        RotateModelNegative90DegreesAboutAxis(model, 'Y');

        SetModelOriginToBoundingBoxCenter(model);

        AddTransformControlsToModel(camera, renderer, scene, model);

        //Model Specific Position settings
        model.position.z -= 4
        model.position.y -= 0.05
        model.position.x += 1.1
    });

    return model;
}

export const RotateModelNegative90DegreesAboutAxis = (model, axis) => {
    
    let x = 0;
    let y = 0; 
    let z = 0;

    switch (axis) {
        case 'X':
            x = 1;
            break;
        case 'Y':
            y = 1;
            break;
        case 'Z':
            z = 1;
        default:
            break;
    }

    // Rotate the model by 90 degrees about the y-axis
    const quaternion = new THREE.Quaternion();
    quaternion.setFromAxisAngle(new THREE.Vector3(x, y, z), -(Math.PI / 2));
    model.setRotationFromQuaternion(quaternion);
}

export const RotateModel180DegreesAboutAxis = (model, axis) => {

    //A 1 maps to a 180 degree rotation.

    let x = 0;
    let y = 0; 
    let z = 0;

    switch (axis) {
        case 'X':
            x = 1;
            break;
        case 'Y':
            y = 1;
            break;
        case 'Z':
            z = 1;
        default:
            break;
    }

    // Rotate the model by 180 degrees about the y-axis
    const quaternion = new THREE.Quaternion();
    quaternion.setFromAxisAngle(new THREE.Vector3(x, y, z), Math.PI);
    model.setRotationFromQuaternion(quaternion);
}

export const SetModelOriginToBoundingBoxCenter = (model) => {
    // Compute the bounding box of the model
    const bbox = new THREE.Box3().setFromObject(model);

    // Compute the center of the bounding box
    const center = new THREE.Vector3();
    bbox.getCenter(center);

    // Translate the model so that its center is at the origin
    model.position.sub(center);
}

export const AddTransformControlsToModel = (camera, renderer, scene, model) => {
    // Create a transform controls object
    const controls = new TransformControls(camera, renderer.domElement);
    controls.attach(model);
    scene.add(controls);
}