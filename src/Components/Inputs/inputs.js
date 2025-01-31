import StyleComponent from "../../Abstract/Component.js";

class InputsComponent extends StyleComponent {
  static render(id, type, placeholder) {
    if (!this.isStyleLoaded) {
      this.loadStylesSheet("src/Components/Inputs/inputs.css");
      this.isStyleLoaded = true;
    }
    const inputElement = document.createElement("input");
    inputElement.id = id;
    inputElement.type = type;
    inputElement.placeholder = placeholder;

    const formContainerElement = document.querySelector("#form-content");
    formContainerElement.append(inputElement);
  }
}

export default InputsComponent;
