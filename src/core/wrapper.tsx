import React, { Component } from "react";
import { CanvasWrapper } from "./canvasWrapper";
import { Puzzle } from "./logic/puzzle";

export class SudokuWrapper extends Component {
    state = {
        puzzle: new Puzzle(),
        highlightedCells: [],
    }

    // =========== STATE MANAGEMENT ===========

    toggleHighlightedCell(cell: number) {
        const {highlightedCells} = this.state;
        const idx = highlightedCells.indexOf(cell);

        if (idx === -1) {
            highlightedCells.push(cell);
        } else {
            highlightedCells.splice(idx, 1);
        }
    }

    render() {
        return (
            <CanvasWrapper
                puzzle={this.state.puzzle}
                highlightedCells={this.state.highlightedCells}
                toggleHighlightedCell={this.toggleHighlightedCell.bind(this)}
            />
        )
    }
}