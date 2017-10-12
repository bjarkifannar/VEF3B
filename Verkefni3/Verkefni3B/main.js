var camera, scene, renderer;
var geometry, material, mesh;
var scaleUp = true, scaleAmount = 0.02;

init();
animate();

function init() {
	camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
	camera.position.z = 1;

	scene = new THREE.Scene();

	geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
	material = new THREE.MeshNormalMaterial();

	mesh = new THREE.Mesh(geometry, material);
	scene.add(mesh);

	renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
}

function animate() {
	requestAnimationFrame(animate);

	// mesh.rotation.x += 0.01;
	// mesh.rotation.y += Math.random() * 0.1 + 0.01;
	mesh.rotation.y += 0.01;

	if (mesh.scale.x > 2) {
		scaleUp = false;
	} else if (mesh.scale.x < 1) {
		scaleUp = true;
	}

	if (scaleUp) {
		mesh.scale.x += scaleAmount;
		mesh.scale.y += scaleAmount;
		mesh.scale.z += scaleAmount;
	} else {
		mesh.scale.x -= scaleAmount;
		mesh.scale.y -= scaleAmount;
		mesh.scale.z -= scaleAmount;
	}

	renderer.render(scene, camera);
}