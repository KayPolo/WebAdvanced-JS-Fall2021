const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize ( window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement)


//--------Add a Geometry: CUBE

const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
// const cubeMaterial = new THREE.MeshBasicMaterial({color: 0x16AFF2, wireframe: true})

const cubeTexture = new THREE.TextureLoader().load('assets/img/wood.png');
const cubeMaterial = new THREE.MeshBasicMaterial({ map: cubeTexture});

const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);


//------ Add Geometry: Cylinder
const cylinderGeometry = new THREE.CylinderGeometry( 1, 1, 2, 20);
// const cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00} );

const cylinderMaterials = [
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/img/charcoal.png'), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/img/paint.png'), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/img/paint.png'), side: THREE.DoubleSide })
];

const materials = new THREE.MeshFaceMaterial(cylinderMaterials);

const cylinder = new THREE.Mesh( cylinderGeometry, materials );
scene.add( cylinder );

cylinder.position.x = -3;


// ----- Add Geometry Sphere 
const sphereGeometry = new THREE.SphereGeometry( 1, 20, 20 );
//const sphereMaterial = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe:false } );
const sphereMaterial = new THREE.MeshLambertMaterial( { color: 0x9B16F2, wireframe:false } );
const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
scene.add( sphere );

sphere.position.x = 3; 



// ----- Add Geometry: Custom 3D Model

const loader = new THREE.OBJLoader();
// const objMaterial = new THREE.MeshLambertMaterial({color: 0x16AFF2});
const objMaterial = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('assets/models/head/mat0_Sphere-color.png')});

loader.load(
    'assets/models/head/head.obj', 
    (object)=>{

        object.traverse((node)=>{
            if (node.isMesh) node.material = objMaterial;
        });

        scene.add(object);
        object.position.y = 2;
    })



// --- Add Controls 

controls = new THREE.OrbitControls(camera, renderer.domElement);
// -- This is an example, showing that you can modify OrbitControls default settings 
    // controls.enableDamping = true;
    // controls.dampingFactor = 0.25;
    // controls.enableZoom = true;// Set to false to disable rotating
    // controls.enableRotate = false;// Set to false to disable panning






// Update function - Here we'll have everything that needs to updated in the scene 
// Here we're going to add animations
let update = ()=>{
    // cube.rotation.x += 0.01; 
    // cube.rotation.y += 0.005; 
    
    // cylinder.rotation.x += 0.01; 
    // cylinder.rotation.y += 0.005; 

    // sphere.rotation.x += 0.01; 
    // sphere.rotation.y += 0.005; 

};


// ---- We're going to add some Lights
let ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.0);
scene.add(ambientLight);

let pointLight = new THREE.PointLight(0xFFB200, 1, 20);
scene.add(pointLight);
pointLight.position.z = 5;


//-----------------------------------------
// Render the scene
let render = ()=>{
    renderer.render(scene, camera);

};

// Rub Scene (updates, render... everything that needs to be loaded )
let SceneLoop = ()=>{
    requestAnimationFrame(SceneLoop);

    update();
    render();
}

SceneLoop();



// Update Viewport on Resize 

window.addEventListener('resize', ()=>{
   camera.aspect = window.innerWidth / window.innerHeight;
   camera.updateProjectionMatrix();
   renderer.setSize(window.innerWidth, window.innerHeight);  
})

