"use strict";

function render_structure() {
    const container = document.querySelector("#wrapper");
    container.innerHTML = `
        <header>
            <h1>LOONEY LACES</h1>
            <div id="filter">FILTER</div>
            <div id="sort">SORT</div>
            <div id="search"></div>
            <div id="about_us">OM OSS</div>
            <div id="like"></div>
            <div id="basket"></div>
        </header>
        <main></main>
            
        `;


    return {
        header: container.querySelector("header"),
        h1: container.querySelector("h1"),
        filter: container.querySelector("#filter"),
        sort: container.querySelector("#sort"),
        search: container.querySelector("#search"),
        about_us: container.querySelector("#about_us"),
        like: container.querySelector("#like"),
        basket: container.querySelector("#basket"),
        main: container.querySelector("main"),
    };
}

render_structure()