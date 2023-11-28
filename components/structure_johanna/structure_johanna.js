function render_structure () {
  
    const container = document.querySelector("#wrapper");
    
    container.innerHTML = `
      <header>
        <nav></nav>
      </header>
      <main>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </main>
    `;
  
    return {
      header: container.querySelector("header"),
      left: container.querySelector("nav"),
      right_top: container.querySelector("main"),
      right_bottom: container.querySelector("div"),
    };
  
  }