import compute from '../lib/compute';
import {trimSpace, digitalize} from '../utils/tools';

import ResultComponent from '../components/Result';
import InputGroupComponent from '../components/InputGroup';
import BtnGroupComponent from '../components/BtnGroup'

@compute
export default class Calculator {
  constructor(el) {
    this.name = 'Calculator';
    this.el = el;
    
    this.resultComponent = new ResultComponent();
    this.inputGroupComponent = new InputGroupComponent()
    this.btnGroupComponent = new BtnGroupComponent();

    this.data = {
      method: 'plus',
      fVal: 0,
      sVal: 0
    };

    this.selectedIndex = 0; 
  }

  init () {
    this.render()
    this.bindEvent()
  }

  render () {
    const oFrag = document.createDocumentFragment();

    oFrag.appendChild(this.resultComponent.tpl());
    oFrag.appendChild(this.inputGroupComponent.tpl());
    oFrag.appendChild(this.btnGroupComponent.tpl());

    this.el.appendChild(oFrag)
  }

  bindEvent () {
    const el = this.el;
    this.oResult = el.getElementsByClassName('result')[0];
    this.oInputs = el.getElementsByClassName('num-input');
    this.oBtnGroup = el.getElementsByClassName('btn-group')[0];
    this.oBtns = this.oBtnGroup.getElementsByClassName('btn'); 

    this.oBtnGroup.addEventListener('click', this.onBtnClick.bind(this), false);
    this.oInputs[0].addEventListener('input', this.onInput.bind(this), false);
    this.oInputs[1].addEventListener('input', this.onInput.bind(this), false);
  }

  onBtnClick (ev) {
    const e = ev || window.event,
      tar = e.target || e.srcElement,
      tagName = tar.tagName.toLowerCase();

    if (tagName === 'button') {
      const method = tar.getAttribute('data-method');
    //     fVal = digitalize(trimSpace(this.oInputs[0].value)) || 0,
    //     sVal = digitalize(trimSpace(this.oInputs[1].value)) || 0;
      this.setMethod(method);
      this.setBtnSelected(tar)
    //   this.setResult(method, fVal, sVal)
    }
  }

  onInput (ev) {
    const e = ev || window.event,
      tar = e.target || e.srcElement,
      id = tar.getAttribute('data-id'),
      val = digitalize(trimSpace(tar.value)) || 0;


    switch (id) {
      case 'fVal':
        this.data.fVal = val;
        break;
      case 'sVal':
        this.data.sVal = val;
        break;
      default:
        break;
    }
    this.setResult(this.data.method, this.data.fVal, this.data.sVal)
  }

  setMethod(method) {
    this.data.method = method;
    this.setResult(this.data.method, this.data.fVal, this.data.sVal);
  }

  setBtnSelected(tar) {
    this.oBtns[this.selectedIndex].className = 'btn';
    this.selectedIndex = [].indexOf.call(this.oBtns, tar);
    this.oBtns[this.selectedIndex].className += ' selected';
  }

  // 抽象函数，带来可扩展性，高内聚，低耦合
  setResult (method, fVal, sVal) {
    this.oResult.innerText = this[method](fVal, sVal);
  }
}
