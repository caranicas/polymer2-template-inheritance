class TestEle extends Polymer.Element {

  static get is() { return 'test-ele'; }

  static get config() {
    return {
      properties: {
        prop1: {
          type:String,
          value :'TEST'
        }
      },
      observers: []
    }
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  foo(baz) {
    return this._bar();
  }

  _bar() {
    return true;
  }

};

customElements.define(TestEle.is, TestEle);



class TestEleFoo extends TestEle {
  static get is() { return 'test-ele-foo'; }

};

customElements.define(TestEleFoo.is, TestEleFoo);


class TestEleBar extends TestEle {

  static get is() { return 'test-ele-bar'; }

};

customElements.define(TestEleBar.is, TestEleBar);
