import React from "react";
import { Component } from "react";
import { Puzzle } from "./logic/puzzle";

export class SudokuWrapper extends Component {
    ref: HTMLElement;

    state: {
        puzzle: Puzzle;
    }

    constructor(props: any) {
        super(props);
        //this.ref = createRef();
        ;
    }

    componentDidMount(): void {
        this.setState({
            puzzle: new Puzzle()
        })
    }

    render() {
        console.log("we renderin");
        return (
            <div>let's get this bread gamers</div>
        )
    }
}

export const something = () => {
    return (
        <div>let's go</div>
    )
}