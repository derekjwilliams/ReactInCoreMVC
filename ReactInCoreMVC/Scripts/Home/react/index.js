import React from 'react';
import { render } from 'react-dom';
import * as d3 from 'd3';
import Line from './Line.js';
import PieWithLabels from './PieWithLabels.js';
const App = () => (
    <>
        <Line></Line>
        <PieWithLabels></PieWithLabels>
    </>
);

render(<App />, document.getElementById('app'));

