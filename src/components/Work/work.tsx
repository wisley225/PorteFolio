import React from 'react';
import Navbar from '../navbar';
import Divproject from '../divproject';
import Footer from '../footer';

const Work = () => {
    return (
        <div>
            <Navbar/>
            <Divproject genre="exampleGenre" title="exampleTitle" image="exampleImage.jpg" />
            <Footer/>
        </div>
    );
}

export default Work;
