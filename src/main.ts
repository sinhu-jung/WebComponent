import './style.css'

// WebComponent - Custom Element
class BoxRed extends HTMLElement {
  constructor () {
    super();
    console.log("wow!");
    this.style.backgroundColor = "red";
  };

  connectedCallback() {
    // 이 엘리먼트는 DOM에 추가되었다.
    console.log(this.parentNode); // ok "<body></body>"
    console.log(this.firstChild); // null <--- 아직 자식 엘리먼트에 접근할 수는 없다.
    console.log(this.innerHTML); // "" <--- 아직 자식 엘리먼트에 접근할 수는 없다.
    console.log(this.getAttribute('locale')); // ok "ko=KR"
    this.setAttribute('locale', 'en-US'); // ok
    this.innerText = 'Arr'; // ok
  }

  disconnectedCallback() {
    // 이 엘리먼트가 DOM에서 제거되었다.
    // connectedElement에서 수행한 셋업을 청소하는 일을 하자
  }

  static get observedAttributes() {
    // 모니터링 할 속성 이름
    return ['locale'];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    // 속성이 추가/제거/변경되었다.
    this[attrName] = newVal;
  }

  adoptedCallback(oldDoc, newDoc) {
    // 다른 Document에서 옮겨져 왔음
  }
}

/**
  window.customElements.define: 태그 이름과 클래스를 연결해 준다.
  태그 이름에는 반드시 하나 이상의 -를 포함해야 한다.
  constructor: 인스턴스의 생성이며 DOM 조작은 할 수 없다.
  connectedCallback / disconnectedCallback: 엘리먼트가 DOM에 추가/제거되었다. DOM 조작을 할 수 있다.
  attributeChangedCallback / observedAttributes: 관심 있는 속성들을 모니터링 할 수 있다.
  adoptedCallback: 잊자.
 */

window.customElements.define("box-red", BoxRed);