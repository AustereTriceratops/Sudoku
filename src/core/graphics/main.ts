import * as THREE from 'three';
import { Puzzle } from '../logic/puzzle';

type GameProps = {
    puzzle: Puzzle;
    highlightedCells: number[];
}

class Main {
    scene: THREE.Scene;
    camera: THREE.OrthographicCamera;
    renderer: THREE.WebGLRenderer;
    //props: GameProps;
    props: any;
    
    constructor(props: any) {
        this.props = props;

        this.scene = new THREE.Scene();
        this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1);
        this.renderer = new THREE.WebGLRenderer();
        document.body.append(this.renderer.domElement);
    }


}