# JavaScript 面向对象编程

## 0.why：JavaScript 为什么需要面向对象

当我们了解问题后，再去看答案，或许会更加容易理解。

1995年，JavaScript 诞生的时候，只是一种简单的网页脚本语言。它能实现的功能也都是简单功能，比如当你忘记填写用户名时，就给你跳出一个警告。

但是如今，JavaScript 几乎变得无所不能，从前端到后端，有着各种匪夷所思的用途。程序员用它完成越来越庞大的项目。

与此同时，JavaScript 代码的复杂度也直线上升。单个网页包含10000行以上的 JavaScript 代码，早就司空见惯。2010年，一个工程师透露，Gmail 的代码长度是443000行。

为了编写和维护如此复杂的代码，必须使用模块化策略。目前，业界的主流做法是采用“面向对象编程”。因此，JavaScript 如何实现面向对象编程，就变成了一个热门话题。

麻烦的是，JavaScript 的语法设计是不支持“类”（class），导致传统的面向对象编程方法无法直接使用。程序员们做了很多探索，研究如何使用 JavaScript 模拟“类”。

在面向对象编程中，类（class）是对象（object）的模板，定义了同一组对象（又称“实例”）共有的属性和方法。

JavaScript语言不支持“类”，但是可以用一些变通的方法，模拟出“类”。

以下定义了 JavaScript 中定义“类”的三种方法。

## 1.构造函数方法

这是经典方法，也是教科书必教的方法。它用构造函数模拟“类”，在其内部用 `this` 关键字指代实例对象。

```js
function Cat() {
  this.name = '大毛';
}
```

生成实例的时候，使用 `new` 关键字。

```js
var cat1 = new Cat();
console.log(cat1.name); // 大毛
```

类的属性和方法，还可以定义在构造函数的 prototype 对象之上。

```js
Cat.prototype.makeSound = function() {
  alert('喵喵喵');
}
```

缺点：比较复杂，用到了 `this` 和 `prototype`，编写和阅读都费力。

## 2.Object.create() 方法

为了解决“构造函数方法”的缺点，更加方便地生成对象，JavaScript 的国际标准 ECAMScript 第五版（ES5），提出了一个新的方法 Object.create()。

用这个方法，“类”就是一个对象，不是函数。

```js
var Cat = {
  name: '大毛',
  makeSound: function() { alert('喵喵喵' )}
}
```

然后，直接用 Object.create() 生成实例，不需要用到 `new`。

```js
var cat1 = Object.create(Cat);
alert(cat1.name); // 大毛
cat1.makeSound(); // 喵喵喵
```

目前，各大浏览器的最新版本（包括 IE9）都部署了这个方法。如果遇到老式浏览器，可以用下面的代码自行部署。

```js
if (Object.create) {
  Object.create = function(o) {
    function F() {
      F.prototype = o;
      return new F();
    }
  }
}
```

这种方法比“构造函数法”简单，但是不能实现私有属性和私有方法，实例对象之间也不能共享数据，对“类”的模拟不够全面。

## 3.极简主义法

荷兰程序员 Gabor de Mooij 提出了一种比 Object.create() 更好的新方法，他称这种方法为“极简主义法”（minimalist approach）。也是较为推荐的方法。

### 3.1 封装

这种方法不适用 this 和 prototype，代码部署起来非常简单，这大概也是它被叫做“极简主义法”的原因。

首先，它也是用一个对象模拟“类”。在这个类里面，定义一个构造函数 createNew()，用来生成实例。

```js
var Cat = {
  createNew: function() {
    // some code here
  }
}
```

然后，在 createNew() 里面，定义一个实例对象，把这个实例对象作为返回值。

```js
var Cat = {
  createNew: function() {
    var cat = {};
    cat.name = '大毛';
    cat.makeSound = function() {
      alert('喵喵喵');
    };
    
    return cat;
  }
}
```

使用的时候，调用 createNew() 方法，就可以得到实例对象。

```js
var cat1 = Cat.createNew();
cat1.makeSound(); // 喵喵喵
```

这种方法的好处是，容易理解，结构清晰优雅，符合传统的“面向对象编程”的构造，因此可以方便地部署下面的特性。

### 3.2 继承

让一个类继承另一个类，实现起来很方便。只要在前者的 createNew() 方法中，调用后者的 createNew() 方法即可。

先定义一个 Animal 类。

```js
var Animal = {
  createNew: function() {
    var animal = {};
    animal.sleep = function() {alert('睡懒觉')};
    
    return animal;
  }
}
```

然后，在 Cat 的 createNew() 方法中，调用 Animal 的 createNew() 方法。

```js
var Cat = {
  createNew: function() {
    var cat = Animal.createNew();
    cat.name = '大毛';
    cat.makeSound = function() {alert('喵喵喵')};
    
    return cat;
  }
}
```

这样得到了 Cat 实例，就会同时继承 Cat 类和 Animal 类。

```js
var cat1 = Cat.createNew();
cat1.sleep();
```

### 3.3 私有属性和私有方法

在 createNew() 方法中，只要不是定义在 cat 对象上的方法和属性，都是私有的。

```js
var Cat = {
  createNew: function() {
    var cat = {};
    var sound = '喵喵喵';
    cat.makeSound = function() { alert(sound) };
  }
}
```

上例的内部变量 sound，外部无法读取，只有通过 cat 的共有方法 makeSound() 来读取。

```js
var cat1 = Cat.createNew();
alert(cat1.sound); // undefined
```

### 3.4 数据共享

有时候，我们需要所有实例对象，能够读写同一项内部数据。这个时候，只要把这个内部数据，封装在类对象的里面、createNew() 方法的外面即可。

```js
var Cat = {
  sound: '喵喵喵',
  createNew: function() {
    var cat = {};
    cat.makeSound = function() { alert(Cat.sound) };
    cat.changeSound = function() { Cat.sound = x };
  }
}
```

然后，生成两个实例对象：

```js
var cat1 = Cat.createNew();
var cat2 = Cat.createNew();
cat1.makeSound(); // 喵喵喵
```

这时，如果有一个实例对象，修改了共享数据，另一个实例对象也会受到影响。

```js
cat2.changeSound('啦啦啦');
cat1.makeSound(); // 啦啦啦
```
