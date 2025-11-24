const element = `
    <div id="navbar" class="nav-bar w-nav">
      <div class="logo-wrapper">
        <img class="logo" src="logo.png" alt="" />
      </div>
      <nav role="navigation">
        <ul class="nav-links">
          <li><a href="/">Inicio</a></li>
          <li><a href="about/about.html">Acerca de mi</a></li>
          <li><a href="services/services.html">Servicios</a></li>
          <li><a href="meditations/meditations.html">Meditaciones</a></li>
          <li><a href="blog/blog.html">Blog</a></li>
          <li><a href="contact/contact.html">Contacto</a></li>
        </ul>
      </nav>
    </div>

`;

class NavBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = element;
  }
}

customElements.define('nav-bar', NavBar);
