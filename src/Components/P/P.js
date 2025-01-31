import StyleComponent from "../../Abstract/Component.js";

class Result extends StyleComponent {
  static Message(message) {
    if (!this.isStyleLoaded) {
      this.loadStylesSheet("src/Components/P/p.css");
      this.isStyleLoaded = true;
    }
    const pElement = document.createElement("p");
    pElement.textContent = message;
    pElement.classList.add("resultMessage");

    const formContainerElement = document.querySelector("#form-content");
    formContainerElement.append(pElement);
    setTimeout(() => {
      pElement.remove();
    }, 3000);
  }
}

export default Result;
