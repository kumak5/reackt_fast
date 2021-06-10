import React from 'react';
// import preloader from "preloader.gif";

let Preloader = (props) => {
    return <div  style={ { backgroundColor: 'white' } }>
        {/*<img src={preloader} />*/}
        <img src='preloader.gif' />
    </div>
}

export default Preloader;