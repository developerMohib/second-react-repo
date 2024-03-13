import { useEffect, useState } from "react";

const Bottlols = () => {

    const [bottols, setBottols] = useState([ ]);
    // const [watches, setWatches] = useState([]);

    useEffect( () => {
        fetch('./bottol.json')
        .then (res => res.json())
        .then(data => setBottols(data))
        // to show result for confirm
        .then(data => console.log(data));
    }, [ ] );

    // to show result for confirm
    console.log(bottols);

    return (
        <div>
            {/* Just check , it is working or not  */ }
            <h2>This is bottles length : {bottols.length} </h2>
            {/* {
                bottols.map( bottle => ( <Bottlols key={bottle.id} bottle = {bottle} >

                </Bottlols> ) )
                
            } */}

        </div>
    );
};

export default Bottlols;