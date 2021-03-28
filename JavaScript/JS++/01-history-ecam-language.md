# history

## 1、5 大主流浏览器（拥有自己研发的内核）

* IE：trident
* Chrome：webkit-blink
* Safari：webkit
* Firefox：gecko
* Opera：presto

## 2、浏览器的历史 & Javascript的诞生

web 基于 浏览器，浏览器 基于 计算机，当我们讲浏览器历史的时候，不可避免的要提及计算机。

### 2.1 前 Web 时代

1. 1950 年，一台计算机要占据整个房间，计算机之间还尚未产生连接。
2. 1957 年，冷战时期，前苏联将首颗人造卫星“旅行者1号”送入地球轨道，美国受到刺激，成立 ARPA （Advanced Research Projects Agency 美国高级研究计划署）。
3. 1962 年，Licklider 正担任 ARPA 的信息部门主管，推动建立计算机技术研究团队，希望让计算机之间相互连接，以提供先进的信息存储和检索服务。
4. 1969 年，ARPA 内部，首个由 4 台电脑组成的网络建立并投入运行。建立网络的关键是如何将各个分散的计算机网络连接起来，但又不会因为持续连接（constant link）而耗尽网络资源。解决这一问题的技术被称为分组交换（packet switch），这类计算机网络也被成为 ARPANET。
5. 之后，ARPANET 的概念得到了广泛的应用，涌现出若干其他类型的网络也使用了相同分组交换技术。不久，当人们希望让这些分散的网络能够彼此通信时，不同的网络协议成立拦路虎。此时，需要一个更加开放的网络架构制定规则。
6. 1974 年，ARPA 的 Robert Kahn 和 斯坦福大学的 Vinton Cerf 创建了一个新的系统，用一套新的标准屏蔽了不同网络协议的差异，并在 12 月正式发布的规范草案中，该系统被称为 Internet 传输控制程序（Internet Transmission Control Program），草案中的协议也就是 TCP/IP 协议。从此，人们可以轻而易举的将几乎所有网络连接到一起。

但是接下来的 20 年里，公众仍然无法访问互联网。

### 2.3 Web 时代

Gopher是20世纪90年代早期使用的信息检索系统，它提供菜单（menu）链接到文件、计算机资源和其他菜单。这些菜单可以跨越本地计算机的范围，通过Internet从其他系统获取资源。Gopher深受那些希望共享校内（campus-wide）信息的大学和希望将文档存储和管理集中化的大型组织的欢迎。

Gopher是由明尼苏达大学创建的。1993年2月，明尼苏达大学宣布他们将对Gopher服务收取使用费。为此，许多组织开始寻找Gopher的替代者。

1991 年，CERN（欧洲核子研究组织的法语缩写）成员Tim Berners-Lee发布了他研发的信息管理系统，该系统中的文本可以包含对其他作品的链接和引用，从而允许读者快速在文档之间跳转。Tim Berners-Lee建立了一个用于发布这种类型的文档（叫作超文本）的服务器，并编写了读取这些文档的软件程序，他将其称为万维网（WorldWideWeb）。这个软件于1991年首次发布，但直到两件事发生之后，它才开始广受欢迎并最终取代了Gopher。

1993年4月13日，CERN向公众发布了万维网的源代码，任何人都可以免费使用或进行二次开发。

随后，在同一年，美国国家超级计算机应用中心（NCSA）(Marc Andreessen)发布了一款整合Web浏览器和Gopher客户端的软件，叫作**Mosaic**。这个软件最初只以源代码形式发布并且只能在Unix操作系统上运行。不过，在1993年12月，Mosaic的新版本提供了苹果麦金塔和微软Windows的安装程序。于是，Mosaic开始迅速流行，Web也跟着沾了光。

1994 年，Marc Andreeseen 离开了 NCSA，并与 Jim Clark 共同创办了 Mosaic Community，后更名为网景通讯公司（Netscape Communications Corporation）。12 月，**NetScape Navigator** 1.0 正式发布。

1996 年，微软公司收购 spy glass（拥有 mosaic 的版权），发布 IE 1.0，同年发布可以运行 JScript 的 IE 3.0。

1996 年，网景的 **Branden Eich** 作为 Navigator 的主要开发人员，发开了 livescript，其主要作用也和 JScript 类似，为了让页面有可交互的功能。

1996 年，Sun 公司的 Java 语言宣传火热，热度很高，而网景的 livescript 不温不火，因为某些利益关系，双方达成合作，livescript 更名为 JavaScript。

2001 年，微软 XP 诞生，系统内置的 IE6 浏览器中第一次出现 JS 引擎（以前只有渲染引擎）。

2003 年，Mozilla 发布 Firefox（基于 Netscape navigator）。

2008 年，Google 基于 webkit blink，发布 Chrome 浏览器！！！（with V8 JS 引擎，直接翻译机器码，独立浏览器运行）

2009 年，甲骨文（oracle）收购了 Sun 公司，此时，JavaScript 和 Java 的版权同属于甲骨文公司。

## 3、ECMA

European Computer Manufactures Association，欧洲计算机制造联合会，是一家国际性会员制度的信息和标准组织。

1996 年 11 月，网景将 JavaScript 提交给 ECMA 进行标准化。ECAM-262 的第一个版本与 1997 年 6 月被 ECAM 组织采用。ECMAScript是由ECMA-262标准化的脚本语言的名称。

尽管JavaScript和JScript与ECMAScript兼容，但包含超出ECMAScript的功能。

## Reference

<https://www.w3.org/community/webed/wiki/Zh-cn/Web%E7%9A%84%E5%8E%86%E5%8F%B2>
