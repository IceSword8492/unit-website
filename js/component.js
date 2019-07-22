class ComponentElement {
    constructor (tagName, options = {}, innerHTML = "") {
        if (!options) {
            options = {};
        }
        if (!tagName || typeof tagName !== "string" || !tagName.length) {
            throw new TypeError("invalid tagName (" + tagName + ")");
        }
        if (typeof options !== "object" || options instanceof Array) {
            throw new TypeError("invalid options (" + JSON.stringify(options) + ")");
        }
        if (typeof innerHTML !== "string") {
            throw new TypeError("invalid innerHTML (" + innerHTML + ")");
        }
        this.tagName = tagName;
        this.options = {
            base: "div",
            extends: [ // string e.g. "innerHTML"

            ],
            attrs: [
                {
                    name: "customElement",
                    value: "true"
                }
            ]
        };
        Object.assign(this.options, options);
        if (innerHTML) {
            this.options.attrs.push(
                {
                    name: "innerHTML",
                    value: innerHTML
                }
            );
        }
    }
    compile () {
        let components = document.getElementsByTagName(this.tagName);
        let newComponent = document.createElement(this.options.base);
        let self = this;
        Object.keys(components).forEach(function (key) {
            let component = components[key];
            component.parentNode.replaceChild(newComponent, component);
            self.options.extends.forEach(function (attr) {
                newComponent[attr] = component[attr];
            });
            self.options.attrs.forEach(function (attr) {
                newComponent[attr.name] = attr.value;
            });
        });
    }
}