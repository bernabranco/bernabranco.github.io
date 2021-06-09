
import {React, useEffect} from 'react'
import * as THREE from 'three';

export default function Threejs(){

useEffect(() => {

			//create scene and camera
			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );
			camera.position.z = 1;
	
			//create render, canvas and add canvas to dom
			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );
	
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
			
			
			const geometry = new THREE.PlaneGeometry(5,10,1);
			const mesh = new THREE.Mesh( geometry, material );
			scene.add(mesh);
	
		
			geometry.dispose();
			material.dispose();
			renderer.clear();
			renderer.dispose();
			mesh.clear();
			camera.remove();
			mesh.remove();
		
			//mouse animate shader
			window.addEventListener("mousemove", shaderAnimate);

			function shaderAnimate(e){
				const canvas = document.querySelector("canvas");
				if (e.pageX >= canvas.getBoundingClientRect().left){
					material.uniforms.mousex.value = e.pageX*0.001;
					material.uniforms.mousey.value = e.pageY*0.001;
				}
			}

			// //mouse rotates shader
			// window.addEventListener("mousemove", mouseAnimate);

			//map values method
			function map_range(value, low1, high1, low2, high2) {
				return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
			}

			// function mouseAnimate(e){
			// 	var mouse = new THREE.Vector2(e.pageX, e.pageY);
			// 	var xoffset = map_range(mouse.x,0,window.innerWidth, -2*3.14, 2*3.14);
			// 	var yoffset = map_range(mouse.y,0,window.innerHeight, -2*3.14, 2*3.14);
				
			// 	mesh.rotation.x += yoffset*0.02;
			// 	mesh.rotation.y += xoffset*0.02;
			// }
			
		function animate() {
				requestAnimationFrame( animate );
				renderer.render( scene, camera );

				//define shader time
				material.uniforms.time.value += 0.05;	
		};

	  window.addEventListener('resize', ()=>handleResize());

      function handleResize(){
			
		   console.log('entrou');
			// Update camera
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();

			// Update renderer
			renderer.setSize(window.innerWidth, window.innerHeight);
			//use 1 to avoid resize lag on shader
			//renderer.setPixelRatio(Math.min(window.devicePixelRatio),1.0);
			}
		

		animate();

        return () => {
			cancelAnimationFrame(animate);
			window.removeEventListener("mousemove", shaderAnimate);
			window.removeEventListener('resize',handleResize);
			material.dispose();
			geometry.dispose();	
			mesh.geometry.dispose();
			mesh.material.dispose();
			mesh.clear();
			scene.remove( mesh );
			scene.clear();
			scene.dispose();
			renderer.clear();
			renderer.dispose();
			
			
			
			document.body.removeChild(renderer.domElement);	
        }
      },[]);

return(
   null
)

}



