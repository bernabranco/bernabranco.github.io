
import {React, useEffect} from 'react'
import * as THREE from 'three';

export default function Threejs(){

useEffect(() => {

		//create scene and camera
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera( 10, window.innerWidth / window.innerHeight, 0.1, 1000 );
		camera.position.z = 1;

		//create render, canvas and add canvas to dom
		const renderer = new THREE.WebGLRenderer();
		renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( renderer.domElement );

		//create GPU material, geometry and mesh
		const material = new THREE.ShaderMaterial( 
			{	   
			uniforms: {
				time: { value: 1.0 },
				resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
				mousex: {value: 0},
				mousey: {value:0}
			},
			vertexShader: document.getElementById( 'vertexShader' ).textContent,
			fragmentShader: document.getElementById( 'fragmentShader' ).textContent
			} 
		);
		
		const geometry = new THREE.PlaneGeometry(5,5,1);
		const mesh = new THREE.Mesh( geometry, material );

		//add mesh to scene
		scene.add(mesh);

		function animate() {
			requestAnimationFrame( animate );
			renderer.render( scene, camera );
			//define shader time
			material.uniforms.time.value += 0.04;	
		};
		
		animate();

		//cleanup gl
		geometry.dispose();
		material.dispose();
		mesh.clear();
		mesh.remove();
		renderer.clear();
		renderer.dispose();
			
		//shader interactive with mouse
		window.addEventListener("mousemove", shaderAnimate);
		function shaderAnimate(e){
			const canvas = document.querySelector("canvas");
			if (e.pageX >= canvas.getBoundingClientRect().left){
				material.uniforms.mousex.value = e.pageX*0.001;
				material.uniforms.mousey.value = e.pageY*0.001;
			}
		}

	    window.addEventListener('resize', ()=>handleResize());
        function handleResize(){
			// Update camera
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			// Update renderer
		    renderer.setSize(window.innerWidth, window.innerHeight);
		}

        return () => {
			//remove event listeners
			window.removeEventListener("mousemove", shaderAnimate);
			window.removeEventListener('resize',handleResize);
			//remove canvas from tree
			document.body.removeChild(renderer.domElement);	
			//remove gpu assets
			geometry.dispose();
			material.dispose();
			renderer.dispose();
			scene.remove(mesh);
			cancelAnimationFrame(animate);
		}
      },[]);

return(
   null
)

}



