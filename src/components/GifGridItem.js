import React from 'react'

export const GifGridItem = ( { title, url }) => {

    return (
        <div className="card animate__animated animate__fadeIn animate__delay-3s">
            <img src={ url } title={ title } />
            <p> { title } </p>
        </div>
    )
}

// export const GifGridItem = ( props ) => {
//     console.log(props );

//     return (
//         <div>
//             {/* { img.title } */}
//         </div>
//     )
// }
