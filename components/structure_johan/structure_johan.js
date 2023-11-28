function render_structure ()
{
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
    nav: container.querySelector("nav"),
    main: container.querySelector("main"),
    div: container.querySelector("div"),
  };
}