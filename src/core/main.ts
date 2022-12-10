import * as THREE from 'three';
import { coords_to_cell_index } from './logic/utils';
import { BLACK, LIGHT_GREY } from './constants';

export class Main {
    props;

    scene: THREE.Scene;
    camera: THREE.OrthographicCamera;
    renderer: THREE.WebGLRenderer;
    gridHighlights: THREE.Group;
    
    constructor(props) {
        this.props = props;
        this.props.setInstance(this);

        this.scene = new THREE.Scene({background: BLACK});
        this.camera = new THREE.OrthographicCamera(0, 9, 0, 9, -1, 1);

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setPixelRatio(3)
        this.renderer.setClearColor( 0xffffff );
        this.props.canvas.appendChild(this.renderer.domElement);

        this.initGridHighlights();

        this.subscribeEvents();
        this.render();
    }

    initGridHighlights() {
        this.gridHighlights = new THREE.Group();
        this.gridHighlights.name = "grid_highlights";

        const material = new THREE.MeshBasicMaterial({color: LIGHT_GREY});
        material.side = THREE.DoubleSide;

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const geometry = new THREE.PlaneGeometry(1, 1);
                const cell = new THREE.Mesh( geometry, material );
                cell.visible = false;
                cell.position.set(0.5 + j, 0.5 + i, 0);

                this.gridHighlights.add(cell);
            }
        }

        this.scene.add(this.gridHighlights);
    }

    subscribeEvents() {
        this.renderer.domElement.addEventListener("click", this.onClick.bind(this));
    }

    onClick(event: MouseEvent) {
        const {offsetX, offsetY} = event;

        const x = 1 + Math.floor(offsetX / 100);
        const y = 1 + Math.floor(offsetY / 100);

        const cell = coords_to_cell_index(x, y);

        this.props.toggleCellHighlight(cell);
    }

    highlight(cell: number) {
        this.gridHighlights.children[cell - 1].visible = true;
    }

    unhighlight(cell: number) {
        this.gridHighlights.children[cell - 1].visible = false;
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }
}