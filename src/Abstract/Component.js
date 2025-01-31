class StyleComponent {
  static isStyleLoaded = false;

  static loadStylesSheet(href) {
    const linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.href = href;

    document.head.append(linkElement);
  }
}

export default StyleComponent;
