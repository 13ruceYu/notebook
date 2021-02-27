# JavaScript 面向对象编程（一）：封装

JavaScript 是一种基于对象（object-based）的语言，你遇到的所有东西几乎都是对象。但是，它有不是一种真正的面向对象编程（OOP）语言，因为它的语法中没有 `class` （类）。

那么，如果我们要把“属性”（property）和“方法”（method），封装成一个对象，甚至要从原型对象生成一个实例对象，我们应该怎么做？

## 1 生成实例对象的原始模式

假定我们把猫看成一个对象，它有“名字”和“颜色”两个属性。

```js
var Cat = {
  name: '',
  color: ''
}
```

现在，我们需要根据这个原型对象的规格（schema），生成两个实例对象。

```js
var cat1 = {};
cat1.name = '大毛';
cat1.color = '黄色';

var cat2 = {};
cat2.name = '二毛';
cat2.color = '黑色';
```

这就是最简单的封装，把两个属性封装在一个对象里。
缺点：一是如果多生成几个实例，写起来就非常麻烦；二是实例和原型之间，没有任何办法，可以看出有什么联系。

## 2 原始模式的改进

我们写一个函数，解决代码重复的问题。

```js
function Cat(name, color) {
  return {
    name: name,
    color: color
  }
}
```

然后生成实例对象，就等于是在调用函数：

```js
var cat1 = Cat('大毛', '黄色');
var cat2 = Cat('二毛', '黑色');
```

这种方法的问题依然是，cat1 和 cat2 之间没有内在的联系，不能反映出它们是同一个原型对象的实例。

## 3 构造函数模式

为了解决从原型对象生成实例的问题，JavaScript 提供了一个构造函数（constructor）模式。

所谓“构造函数”，其实就是一个普通函数，但是内部使用了 `this` 变量。对构造函数使用 `new` 运算符，就能生成实例，并且 `this` 变量会绑定在实例对象上。

比如，猫的原型对象现在可以这样写：

```js
function Cat(name, color) {
  this.name = name;
  this.color = color;
}
```

我们现在就可以生成实例对象了。

```js
var cat1 = new Cat('大毛', '黄色');
var cat2 = new Cat('二毛', '黑色')
```

这时 `cat1` 和 `cat2` 会自动含有一个 `constructor` 属性，指向它们的构造函数。

```js
alert(cat1.constructor === Cat); // true
alert(cat2.constructor === Cat); // true
```

JavaScript 还提供了一个 `instanceof` 运算符，用来验证原型对象和实例对象的关系。

```js
alert(cat1 instanceof Cat); // true
alert(cat2 instanceof Cat); // true
```

## 4 构造函数模式的问题

构造函数方法很好用，但是存在一个内存浪费的问题。
