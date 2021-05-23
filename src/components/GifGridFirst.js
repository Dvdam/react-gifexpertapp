import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ( { category }) => {

    // const [count, setCount] = useState(0);

    // const [images, setImages] = useState([])

    // useEffect(() => {
    //     // getGifs( category ).then( imgs =>setImages( imgs ));
    //     getGifs( category ).then( setImages );
    // }, [ category ]);

    // const getGifs = async() => {
    //     // const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=xDhXF9seSCJpCCwEFp0z07HUe0x1Dpvg';
    //     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=xDhXF9seSCJpCCwEFp0z07HUe0x1Dpvg`;
    //     const response = await fetch( url );
    //     const { data } = await response.json();

    //     const gifs = data.map( img => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url
    //         }
    //     })

    //     console.log(gifs);
    //     setImages( gifs );

    // }

    // getGifs();

    // const {state} = useFetchGifs();
    // Desestructurar objeto state = { data, loagind}
    const {data, loading} = useFetchGifs();
    console.log(data);
    console.log(loading);

    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                { loading ? 'Cargando...' : 'Carga Finalizada'}
                {/* <button onClick={ () => { setCount (count + 1 )} }>Saraza</button> */}
                {/* <ol> */}
                    {/* esto no hace falta si uso lo que tengo abajo */}
                {/* {
                    images.map( img => (
                        <li key={ img.id }> { img.title } </li>
                    ))
                } */}

                    {
                    //    images.map( ({id, title }) => (
                    //        <li key={ id }> { title } </li>
                    //    ))


                        // images.map( img  => (
                        //     <GifGridItem 
                        //         key={ img.id}
                        //         {...img}
                        //     />
                        // ))
                }
                {/* </ol> */}
            </div>
        </>

    )
}
