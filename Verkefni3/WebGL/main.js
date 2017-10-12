/*
	https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context
	https://github.com/mdn/webgl-examples/blob/gh-pages/tutorial/sample2/webgl-demo.js
*/





/* Byrjar WebGL kóðann */
main();

function main() {
	const canvas = document.querySelector("#glCanvas"); /* Setur canvasinn úr index.html í breytuna canvas */
	const gl = canvas.getContext("webgl"); /* Setur upp webgl í canvas */

	/* Ef vafrinn styður ekki WebGL */
	if (!gl) {
		/* Lætur notandann vita og hættir keyrslu */
		alert("Unable to initialize WebGL. Your browser or machine may not support it.");
		return;
	}

	/* Vertex shaderinn */
	const vsSource = `
		attribute vec4 aVertexPosition;

		uniform mat4 uModelViewMatrix;
		uniform mat4 uProjectionMatrix;

		void main() {
			gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
		}<
	`;

	/* Fragment shaderinn */
	const fsSource = `
		void main() {
			gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
		}
	`;

	/* Setja bakgrunnslit sem svartan og hreinsa skjáinn */
	// gl.clearColor(0.0, 0.0, 0.0, 1.0);
	// gl.clear(gl.COLOR_BUFFER_BIT);
}