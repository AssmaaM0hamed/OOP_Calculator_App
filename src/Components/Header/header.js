import StyleComponent from "../../Abstract/Component.js";

class HeaderComponent extends StyleComponent {
  static render() {
    if (!this.isStyleLoaded) {
      this.loadStylesSheet("src/Components/Header/header.css");
      this.isStyleLoaded = true;
    }

    const headerElement = document.createElement("header");
    headerElement.innerHTML = `
      <nav>
          <h1>My Calculator</h1>
      </nav>`;
    document.body.prepend(headerElement);
  }
}

export default HeaderComponent;
