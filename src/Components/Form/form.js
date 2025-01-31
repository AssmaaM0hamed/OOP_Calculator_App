import StyleComponent from "../../Abstract/Component.js";
import Result from "../P/P.js";
import Calculation from "../../Services/Calculation.js";

class FormComponent extends StyleComponent {
  static render() {
    if (!this.isStyleLoaded) {
      this.loadStylesSheet("src/Components/Form/form.css");
      this.isStyleLoaded = true;
    }
    const formElement = document.createElement("form");
    formElement.innerHTML = `
            <div id="form-wrapper">
                <div id="form-content">
                </div>
            </div>
        `;
    formElement.onsubmit = this.Submit;

    const headerElement = document.querySelector("header");
    headerElement.insertAdjacentElement("afterend", formElement);
  }
  static Submit(event) {
    event.preventDefault();

    const num1 = parseInt(document.querySelector("#firstNumber").value);
    const num2 = parseInt(document.querySelector("#secondNumber").value);
    const operation = document.querySelector("select").value;

    const calculationResult = Calculation.calculate(num1, num2, operation);
    Result.Message(`${num1} ${operation} ${num2} = ${calculationResult}`);
  }
}

export default FormComponent;
