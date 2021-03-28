class Person {
  // 成员属性，一般定义在构造函数上
  constructor(name, height, weight) {
    this.name = name;
    this.height = height;
    this.weight = weight;
  }

  // 成员方法
  intro () {
    console.log(`我叫${this.name}, 身高${this.height}, 体重${this.weight}。`);
  }

  run () {
    console.log('我跑得可快了！');
  }
}

export { Person };