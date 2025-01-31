import StyleComponent from "../../Abstract/Component.js";

class OptionComponent extends StyleComponent {
  static render(value) {
    const optionElements = document.createElement("option");
    optionElements.innerHTML = value;

    const selectElement = document.querySelector("select");
    selectElement.append(optionElements);
  }
}

export default OptionComponent;
