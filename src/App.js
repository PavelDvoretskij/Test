import React from 'react';
import BackgroundStatic from './BackgroundStatic'
import Slider from './Slider'
import Title from './Title'

function App() {

    return <>
        <BackgroundStatic/>
        <div className="wrapper">
            <Title/>
            <Slider/>
        </div>
    </>;
}

export default App;
