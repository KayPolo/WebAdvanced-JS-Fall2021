const scene = new THREE.Scene();

// Constructor
// PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
// fov — Camera frustum vertical field of view.
// aspect — Camera frustum aspect ratio.
// near — Camera frustum near plane.
// far — Camera frustum far plane.
const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight, 
    0.1,
    1000
    );


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );


//create a shape (after defining functions)

// ---- CREATE A CUBE
const cubeGeometry = new THREE.BoxGeometry( 2, 2, 2 );
//const cubeMaterial = new THREE.MeshBasicMaterial( {color: 0x00ff00, wireframe: true } );

const cubeTexture = new THREE.TextureLoader().load('assets/img/wood.png');
const cubeMaterial = new THREE.MeshBasicMaterial( {map: cubeTexture} );
const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );

scene.add( cube );

//----CREATE A SPHERE 
const sphereGeometry = new THREE.SphereGeometry( 1, 20, 20 );
// const sphereMaterial = new THREE.MeshBasicMaterial( { color: 0x963AFF, wireframe: true } );

const sphereMaterial = new THREE.MeshLambertMaterial( { color: 0x963AFF, wireframe: false } );

const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );

scene.add( sphere );

sphere.position.x = 3;

//----ADD CILINDER
const cylinderGeometry = new THREE.CylinderGeometry( 1, 1, 2, 20 );
// const cilinderMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00, wireframe: true} );
// const cylinder = new THREE.Mesh( cilinderGeometry, cilinderMaterial );

const cylinderMaterials = [
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('assets/img/charcoal.png'),side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('assets/img/paint.png'),side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('assets/img/paint.png'),side: THREE.DoubleSide}) 
]
let materials = new THREE.MeshFaceMaterial( cylinderMaterials);
const cylinder = new THREE.Mesh( cylinderGeometry, materials );

scene.add( cylinder );
cylinder.position.x = -3;

// ---- Add Lighting - Make sure to change the materials
let ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.0);
scene.add(ambientLight);

let light1 = new THREE.PointLight(0xFFB200, 2, 20);
scene.add(light1);
light1.position.z = 5;



//----- Load a model (Need to add script)

let loader = new THREE.OBJLoader();
var objMaterial = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('assets/model/mat0_Sphere-color.png')});
loader.load(
    'assets/model/head.obj',
    (object)=>{

        // For any meshes in the model, add our material.
            object.traverse( function ( node ) {

                if ( node.isMesh ) node.material = objMaterial;

            } );

        scene.add(object);
        object.position.y = 2;
    }
)






camera.position.z = 5;


// --- Add Controlls - Nedd to add Script 
controls = new THREE.OrbitControls (camera, renderer.domElement);



// Set all the functions you need first 

//game logic
let update = ()=>{
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.005;

    // sphere.rotation.x += 0.01;
    // sphere.rotation.y += 0.005;

    // cylinder.rotation.x += 0.01;
    // cylinder.rotation.y += 0.005;

};




//draw scene
let render = ()=>{
    renderer.render (scene, camera);
};

//run game loop (update, render, repeat)
let GameLoop = ()=>{
    requestAnimationFrame(GameLoop);

    update();
    render();
};

GameLoop();




// --- Upodate viewport on resize
window.addEventListener('resize', ()=>{
    camera.aspect= window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );

});




