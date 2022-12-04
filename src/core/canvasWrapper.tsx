import React, { Component, createRef, RefObject } from "react";
import { Main } from "./graphics/main";

// ========================================
// ========== STATELESS COMPONENT =========
// ========================================
export class CanvasWrapper extends Component {
    props;

    canvasRef: RefObject<HTMLDivElement>;
    instance: Main;

    constructor(props) {
        super(props);
        this.props = props;
        this.canvasRef = createRef<HTMLDivElement>();
    }

    componentDidMount(): void {
        const canvas = this.canvasRef.current;

        this.instance = new Main({...this.props, canvas: canvas});
    }

    render() {
        return (
            <div className="canvas-wrapper" ref={this.canvasRef}/>
        )
    }
}