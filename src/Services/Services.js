import HeaderComponent from "../Components/Header/header.js";
import FormComponent from "../Components/Form/form.js";
import InputsComponent from "../Components/Inputs/inputs.js"; 
import SelectComponent from "../Components/Select/select.js";
import OptionComponent from "../Components/Options/options.js";
import { Operations } from "../Abstract/Operations.js";
import ButtonComponent from "../Components/Button/button.js";
import FooterComponent from "../Components/Footer/footer.js";


class AppService {
  static build() {
    HeaderComponent.render();
    FormComponent.render();
    InputsComponent.render("firstNumber", "number", "Enter First Number");
    SelectComponent.render();
    Operations.forEach((operation) => {
      OptionComponent.render(operation);
    });
    InputsComponent.render("secondNumber", "number", "Enter Second Number");
    ButtonComponent.render("Calculate", "submit");
    FooterComponent.render();
  }
}

export default AppService;
