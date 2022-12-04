import * as THREE from 'three';
import { BLACK, LIGHT_GREY, WHITE } from './constants';

export class Main {
    scene: THREE.Scene;
    camera: THREE.OrthographicCamera;
    renderer: THREE.WebGLRenderer;
    props;
    
    constructor(props) {
        this.props = props;
        this.props.setInstance(this);

        this.scene = new THREE.Scene({background: BLACK});
        this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1);

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setClearColor( 0xffffff );
        this.props.canvas.appendChild(this.renderer.domElement);

        this.subscribeEvents();
        this.render();
    }

    subscribeEvents() {
        this.renderer.domElement.addEventListener("click", () => {
            this.props.toggleHighlightedCell(0);
            this.render();
        })
    }

    highlight() {
        this.scene.background = LIGHT_GREY;
    }

    unhighlight() {
        this.scene.background = WHITE;
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }
}