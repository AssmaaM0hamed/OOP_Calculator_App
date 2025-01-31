import StyleComponent from "../../Abstract/Component.js";

class ButtonComponent extends StyleComponent {
  static render(value, type) {
    if (!this.isStyleLoaded) {
      this.loadStylesSheet("src/Components/Button/button.css");
      this.isStyleLoaded = true;
    }

    const buttonElement = document.createElement("button");
    buttonElement.innerHTML = value;
    buttonElement.type = type;

    const formContainerElement = document.querySelector("#form-content");
    formContainerElement.append(buttonElement);
  }
}

export default ButtonComponent;
