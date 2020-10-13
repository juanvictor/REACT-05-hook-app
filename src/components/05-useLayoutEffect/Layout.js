import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCouter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';


import './layout.css';


export const Leyout = () => {

    const { counter, increment } = useCouter(1);


    const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );

    const { quote } = !!data && data[0];


    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});


    useLayoutEffect( () => {

        setBoxSize( pTag.current.getBoundingClientRect() )

        // console.log( pTag.current.getBoundingClientRect() );

    }, [quote]);


    return (
        <div>
            <h1>Layout</h1>


            <blockquote className="blockquote text-right">
                <p
                    className="mb-0"
                    ref={ pTag }
                > { quote } </p>
            </blockquote>


            <pre>
                { JSON.stringify( boxSize, null, 3 ) }
            </pre>


            <button
                className="btn btn-primary"
                onClick={ () => increment(1) }
            >
                Siguiente quote
            </button>


        </div>
    )


}
