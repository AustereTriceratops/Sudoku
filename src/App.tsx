import React, { Component } from 'react';
import './App.css';
import { CanvasWrapper } from './core/canvasWrapper';
import { Main } from './core/main';
import { Puzzle } from './core/logic/puzzle';

// ========================================
// ========== STATEFUL COMPONENT ==========
// ========================================
class App extends Component{
    state = {
        puzzle: new Puzzle(),
        highlightedCells: [],
        highlighted: false,
    }

    instance: Main;

    // =========== STATE MANAGEMENT ===========

    setInstance(instance: Main) {
        this.instance = instance;
    }

    toggleCellHighlight(cell: number) {
        const {highlightedCells} = this.state;
        const idx = highlightedCells.indexOf(cell);

        if (idx === -1) {
            highlightedCells.push(cell);
            this.setState({highlightedCells});
            this.instance.highlight(cell);
        } else {
            highlightedCells.splice(idx, 1);
            this.setState({highlightedCells});
            this.instance.unhighlight(cell);
        }

        this.instance.render();
    }
    
    render() {
        return (
            <CanvasWrapper
                setInstance={(this.setInstance.bind(this))}
                puzzle={this.state.puzzle}
                highlightedCells={this.state.highlightedCells}
                toggleCellHighlight={this.toggleCellHighlight.bind(this)}
            />
        )
    }
}


export default App;
