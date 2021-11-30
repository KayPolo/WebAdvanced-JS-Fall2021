const scene = new THREE.Scene();
let cube;

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
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 2, 2, 2 );
// const material = new THREE.MeshBasicMaterial( {color: 0x1EC0E0} );


const texture = new THREE.TextureLoader().load('https://lh3.googleusercontent.com/E03AH-8WDnjSSU0hO9GF-e1-voulbBB5Q7tI09l41OzYkXjtfc85Ic-2X3_R5CzBL8o_4GuJzA-nihWvJK4L6jybO8eP7tVdk8HgO301aew05Ds9POb2UIPK0VH37EEfgxytRuJf');
const material = new THREE.MeshBasicMaterial( {map: texture} );

cube = new THREE.Mesh( geometry, material );
scene.add( cube );


//Part 2 of the class 

// for(var i = 0; i < 10; i++){
//     cube = new THREE.Mesh(geometry, material)
//     const x = (Math.random() - .5) * 10
//     const y = (Math.random() - .5) * 10
//     const z = (Math.random() - .5) * 10 

//     cube.position.set(x,y,z)
//     scene.add(cube)

    
// }




let animate = ()=>{
    // this is going to create a loop everytime that the page gets refreshed
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.005;

    renderer.render(scene,camera);
}

let onWindowResize =()=>{
    camera.aspect= window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

window.addEventListener('resize', onWindowResize, false)

animate();