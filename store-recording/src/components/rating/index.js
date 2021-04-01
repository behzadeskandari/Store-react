import React from 'react';

function getStar(value){
    switch (value) {
        case 0:
            return '/Star1.png';
        case 50:
            return '/star-grey.png';

        case 100:
            return '/star-full.png';
    }
}


function getStars(value) {
  
  
  
    // switch (parseFloat(value)) {
    //     case 0.0:
    //         return [0, 0, 0, 0, 0];
    //     case 0.5:
    //         return [50, 0, 0, 0, 0];
    //     case 1.0:
    //         return [100, 0, 0, 0, 0];
    //     case 1.5:
    //         return [100, 50, 0, 0, 0];
    //     case 2.0:
    //         return [100, 100, 0, 0, 0];
    //     case 2.5:
    //         return [100, 100, 50, 0, 0];
    //     case 3.0:
    //         return [100, 100, 100, 0, 0];
    //     case 3.5:
    //         return [100, 100, 100, 50, 0];
    //     case 4.0:
    //         return [100, 100, 100, 100, 0];
    //     case 4.5:
    //         return [100, 100, 100, 100, 50];
    //     case 4.5:
    //         return [100, 100, 100, 100, 100];
    // }
}

export default function Rating({value}){
    return (
        <div>
            {getStars(value).map((value) => (
                <img src={`/store-recording/public/img/${value}`} width={100} />
            ))}
        </div>
    );
}