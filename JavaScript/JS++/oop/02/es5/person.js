function Person (name, height, weight) {
  // 对象属性
  this.name = name;
  this.height = height;
  this.weight = weight;
}

// 对象方法
Person.prototype.intro = function () {
  console.log('I am ' + this.name + ', 身高' + this.height + 'cm' + ', 体重' + this.weight + 'kg');
}

Person.prototype.run = function () {
  console.log('我跑得可快了！')
}