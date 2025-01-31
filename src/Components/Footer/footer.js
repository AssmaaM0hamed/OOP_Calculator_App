import StyleComponent from "../../Abstract/Component.js";

class FooterComponent extends StyleComponent {
  static render() {
    if (!this.isStyleLoaded) {
      this.loadStylesSheet("src/Components/Footer/footer.css");
      this.isStyleLoaded = true;
    }
    const footerElement = document.createElement("footer");
    footerElement.innerHTML = `<p>Copyright &copy; - Sama</p>`;

    const formElement = document.querySelector("form");
    formElement.insertAdjacentElement("afterend", footerElement);
  }
}

export default FooterComponent;
