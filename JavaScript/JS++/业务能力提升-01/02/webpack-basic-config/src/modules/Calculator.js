import compute from '../lib/compute';
import {trimSpace, digitalize} from '../utils/tools';

import ResultComponent from '../components/Result';

@compute
export default class Calculator {
  constructor(el) {
    this.name = 'Calculator';
    this.el = el;
    // this.oResult = el.getElementsByClassName('result')[0];
    // this.oInputs = el.getElementsByClassName('num-input');
    // this.oBtnGroup = el.getElementsByClassName('btn-group')[0];

    this.resultComponent = new ResultComponent();
  }

  init () {
    this.render()
    // this.bindEvent()
  }

  render () {
    const oFrag = document.createDocumentFragment();

    oFrag.appendChild(this.resultComponent.tpl());

    this.el.appendChild(oFrag)
  }

  bindEvent () {
    this.oBtnGroup.addEventListener('click', this.onBtnClick.bind(this), false);
  }

  onBtnClick (ev) {
    const e = ev || window.event,
      tar = e.target || e.srcElement,
      tagName = tar.tagName.toLowerCase();

    if (tagName === 'button') {
      const method = tar.getAttribute('data-method'),
        fVal = digitalize(trimSpace(this.oInputs[0].value)) || 0,
        sVal = digitalize(trimSpace(this.oInputs[1].value)) || 0;

      this.setResult(method, fVal, sVal)
    }
  }

  // 抽象函数，带来可扩展性，高内聚，低耦合
  setResult (method, fVal, sVal) {
    this.oResult.innerText = this[method](fVal, sVal);
  }
}
