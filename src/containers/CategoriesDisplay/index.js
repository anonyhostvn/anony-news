
import React, {Component} from 'react' ;
import CategoriesDisplay from './CategoriesDisplay' ;

function Entertainment() {
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9e45c2652b3d4037bde13dd5dc374045&category=entertainment" ;

    return (
        <div>
            <CategoriesDisplay
                url={url}
            />
        </div>
    )
}

function Health () {
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9e45c2652b3d4037bde13dd5dc374045&category=health" ;
    return (
        <div>
            <CategoriesDisplay
                url={url}
            />
        </div>
    )
}

function Science () {
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9e45c2652b3d4037bde13dd5dc374045&category=science" ;
    return (
        <div>
            <CategoriesDisplay
                url={url}
            />
        </div>
    )
}

function Sport () {
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9e45c2652b3d4037bde13dd5dc374045&category=sport" ;
    return (
        <div>
            <CategoriesDisplay
                url={url}
            />
        </div>
    )
}

function Technology () {
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9e45c2652b3d4037bde13dd5dc374045&category=technology" ;
    return (
        <div>
            <CategoriesDisplay
                url={url}
            />
        </div>
    )
}

export {
    Entertainment,
    Health,
    Science,
    Sport,
    Technology
} ;