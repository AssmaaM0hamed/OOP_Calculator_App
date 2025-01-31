import StyleComponent from "../../Abstract/Component.js";

class SelectComponent extends StyleComponent {
  static render() {
    if (!this.isStyleLoaded) {
      this.loadStylesSheet("src/Components/Select/select.css");
      this.isStyleLoaded = true;
    }

    const selectElement = document.createElement("select");
    const formContainerElement = document.querySelector("#form-content");
    formContainerElement.append(selectElement);
  }
}

export default SelectComponent;
