"use strict" 

function render_structure(parent) { 
    const container = document.querySelector("#wrapper"); 
    parent.appendChild(container); // denna är nog fel
    container.innerHTML = ` 
    <header>
        <nav>
            <h1>LOONEY LACES</h1>
            <select>FILTER</select>
            <select>SORT</select>

            <input type="text">
            <select>OM OSS</select>
            <img src="" alt="">
            <img src="" alt="">
        </nav>
    </header>
    <section>
      <div>
        <img src="" alt="insert_shoe_name">
        <p>NAME SNEAKERS</p>
        <p>COUNTRY</p>
        <p>price</p>
      </div>
    </section>
  `;

    return {
        header: container.querySelector("header"),
        nav: container.querySelector("nav"),
        section: container.querySelector("section"),
        div: container.querySelector("div"),
        p: container.querySelector("p"),
    }; //returnera
}