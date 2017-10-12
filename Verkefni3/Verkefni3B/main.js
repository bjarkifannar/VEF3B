/*
	https://aerotwist.com/tutorials/getting-started-with-three-js/
*/

/* Stærð senunnar */
const WIDTH = 800;
const HEIGHT = 600;

/* Attributes fyfir cameru */
const VIEW_ANGLE = 45;
const ASPECT = WIDTH / HEIGHT;
const NEAR = 0.1;
const FAR = 10000;

/* Ná í DOM element til að nota sem renderer */
const container = document.querySelector('#container');

/* Búa til WebGL renderer, cameru og senu (scene) */
const renderer = new THREE.WebGLRenderer();
const camera =
	new THREE.PerspectiveCamera(
		VIEW_ANGLE,
		ASPECT,
		NEAR,
		FAR
	);

const scene = new THREE.Scene();

/* Bæta cameru inn í senuna */
scene.add(camera);

/* Starta renderer */
renderer.setSize(WIDTH, HEIGHT);

/* Tengja renderer við container */
container.appendChild(renderer.domElement);

/* Setja upp breytur fyrir kúlu */
const RADIUS = 50;
const SEGMENTS = 16;
const RINGS = 16;

/* Búa til material fyrir kúluna */
const sphereMaterial =
	new THREE.MeshLambertMaterial(
	{
		color: 0xCC00FF
	});

/* Búa til mesh fyrir kúlu */
const sphere = new THREE.Mesh(
		new THREE.SphereGeometry(
				RADIUS,
				SEGMENTS,
				RINGS),
		sphereMaterial);

/* Færa kúluna þannig að hún sjáist */
sphere.position.z = -300;

/* Bæta kúlunni við í senuna */
scene.add(sphere);

/* Búa til ljós */
const pointLight =
	new THREE.PointLight(0xFFFFFF);

/* Setja position á ljósið */
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

/* Bæta ljósinu við senuna */
scene.add(pointLight);

/* Rendera senuna */
function update() {
	renderer.render(scene, camera);

	requestAnimationFrame(update);
}

/* Setja render fallið af stað */
requestAnimationFrame(update);