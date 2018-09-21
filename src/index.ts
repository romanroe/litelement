import {html, LitElement, property} from "@polymer/lit-element";

class MyElement extends LitElement {

    @property()
    foo = "foo";

    constructor() {
        super();

        this.addEventListener("click", async (e) => {
            console.log("click", e);
            // this.whales++;
            await this.updateComplete;
            this.dispatchEvent(new CustomEvent("whales", {detail: {whales: 1}}));
        });
    }

    render() {
        return html`
            <div>Foo: ${this.foo}</div>
        `;
    }

    createRenderRoot() {
        return this;
    }

}

customElements.define("my-element", MyElement);


/*

class MyElement2 extends HTMLElement {
    constructor() {
        super();
        // var shadow = this.attachShadow({mode: "open"});
        var div = document.createElement("div");
        div.innerHTML = "MyElement2";
        // shadow.appendChild(div);
        this.appendChild(div);
    }
}
customElements.define("my-element2", MyElement2);
*/
