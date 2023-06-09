# 个人博客前端静态页面

## 1、项目目录

```text
|—————— images
|—————— js
|—————— upload
|—————— index.css
|—————— index.html
|—————— README.pdf
|—————— README.md
```

## 2、项目工具

<kbd>WebStorm 2022.1</kbd>+<kbd>Visual Studio Code</kbd>+<kbd>Microsoft Edge</kbd>+<kbd>Gitee</kbd>

## 3、在线访问网址

<kbd>我的在线博客 :</kbd>  **http://blog.onlysheeps.com**

<kbd>源码仓库地址 :</kbd>  **https://github.com/OnlySheep/blog**

## 4、项目意义

### 4.1、<kbd>个人博客</kbd>

> >```java
> >	通常所说的个人博客分为两种：一种是使用他人网站的博客服务所搭建的博客，常见的平台如CSDN、网易新浪博客等，另一种为独立博客，是指在域名、空间及内容上都独立自主的博客，两者各有优劣。
> >    从含义上很容易看出，独立博客在投入使用之前就需要投入一定的建设成本，包括时间与金钱的成本，本文不详细讨论独立博客搭建的技术教程，而使用免费博客平台则省去了大量的前期投入工作，可以留出更多的精力去经营自己博客的内容。同时，使用免费博客平台，更容易获得最初的博客流量，可以肯定的说，只要自己的博客质量有保证，就一定能带来可观的流量。而独立博客在不投入一定的技术与推广的情况下，很难得到访问量。
> >    	当然独立博客的优势也非常明显，独立博客的展示程度与效果本身便是个人能力的直接体现，至少体现了自己的审美能力。同时由于独立博客的独立性，可以作出非常个性化的博客与内容，这是免费博客平台无法比拟的。而且随着开源项目越来越多，各种第三方服务的完善，个人搭建独立博客的成本和难度大大降低，即使新手也能搭建出非常美观个性化的个人独立博客。所以近几年来，独立博客的数量越来越多。
> >```

### 4.2、<kbd>价值与意义</kbd>

> >```java
> >	个人博客与QQ空间、朋友圈和微博之流的本质区别，前者服务自己，后者娱乐他人。同时，个人博客拥有专业的编辑能力，诸如代码块、引用、贴图等等功能，都是传统社交工具所不具备的。
> >    积累技术、学习成长、社交展示。独立博客的搭建本身就是一项非常实用的技术，在独立博客的搭建、维护、推广的过程中，任何一名技术人员都能够学习到日常生活工作中遇不到的技术。如果有良好的记录博客的习惯，也是对自身技术的积累过程，同时分享给同圈子的朋友达到社交的目的。
> >    	自从2016年以来，互联网行业的竞争愈发激烈，一个优秀的个人博客更能无形中提升自己在同行中的竞争力，一个优秀的个人博客的影响力丝毫不亚于一个优秀的个人开源项目。所以，作为一个经常浏览他人博客的程序员，对于偶遇优秀独立博客总是让人感到非常惊喜。
> >    回归到内容付费的话题，一个流量可观的个人博客，自然而然就具有了流量变现的能力。知识就是金钱，过去这句话是真理，现在和将来也一直都是。优秀的个人博客可以通过网友打赏、社群付费、问答服务、软文广告、电商引流等等许多方式得到一定的收入。既能成全自己又能服务他人，何乐而不为？
> >```

### 4.3、<kbd>总结</kbd>

> >```java
> >	个人(技术)博客是兴趣，是坚持，是积累，是开源分享精神，是2017年以后互联网内容大军中的一股清流。建立一个属于自己的个人博客，从今天开始，从来不晚。
> >```

## 5、项目内容

### 5.1、<kbd>主页</kbd>

![image-20230526163316800](assets/image-20230526163316800.png)

> 介绍部分站长信息，以及主页画面。
>
> >* 主要代码
> >
> >```html
> ><!-- 主页 -->
> ><div class="con-index">
> >    <!-- hi,myfriend -->
> >    <div id="newfriend">
> >        <div class="new-friend">
> >            <h3>Hi MY NEW FRIEND!</h3>
> ><p>HELLO</p>
> ><p>I 'M ONLYSHEEP</p>
> ><h3>初次见面,正在人间奋斗的你！</h3>
> ><p>欢迎来到</p>
> ><H2>只羊的博客!</H2>
> ><span class="sliding-bar"></span>
> ><div class="new-friend-btn"><a href="#">了解一下</a><span></span></div>
> ></div>
> ><div class="site-introduce">
> >    <div><span>只羊</span>是一位酷</div>
> >        <div>酷的站长</div>
> ><div> <span>只羊</span> is a cool webmaster!</div>
> >    </div>
> ></div>
> >
> ><div class="bearrun">
> >    <div class="mountainblack"></div>
> ><div class="mountainwrite"></div>
> ><div class="bear"></div>
> ></div>
> ><div class="filings">
> >    <div>版权所有只羊工作室&nbsp;<span>|</span> &nbsp;</div>
> >        <div>备案:未备案&nbsp;<span>|</span>&nbsp;</div>
> >            <div>© 2022-2023 All Copyright Reserved</div>
> ></div>
> ></div>
> >```

### 5.2 、<kbd>关于本站</kbd>

![image-20230526163811801](assets/image-20230526163811801.png)

> 介绍站长详细信息
>
> > * 主要代码
> >
> > ```html
> > <!-- 关于本站     -->
> > <div class="about-site">
> >     <img src="./upload/about-site.jpg" alt="">
> >     <button>关于本站</button>
> >     <!-- 我的故事 --> 
> >     <div class="my-story">
> >         <h2>
> >             <span>我的故事</span>
> >             <div> </div>
> >             <span>01</span>
> >         </h2>
> >         <div class="story">
> >             <span>Maturity is not about moving towards complexity, but about moving towards innocence!</span> 
> >         </div>
> >     </div>
> >     <div class="goTop"><img src="./upload/goTop.png" alt=""></div>
> >     <!-- 关于站长 -->
> >     <div class="about-stationmaster">
> >         <div class="stationmaster-title">
> >             <h2>
> >                 <span>关于站长</span>
> >                 <div></div>
> >                 <span>02</span>
> >             </h2>
> >         </div>
> >         <div>
> >             <!-- 站长资料 -->
> >             <div class="stationmaster-data">
> >                 <div>
> >                     <h2>站/长/资/料</h2>
> >                     <div><img src="./imags/avatar.jpg" alt=""></div>
> >                 </div>
> >                 <div>
> >                     <p>网名 : 只羊</p>
> >                     <p>邮箱 : onlysheepen@126.com</p>
> >                     <p>性别 : boy</p>
> >                     <p>年龄 : 不告诉你[一位有理想的青少年]</p>
> >                     <p>特长 : 体重特长</p>
> >                     <p>爱好 : 音乐、发呆</p>
> >                     <p>性格 : 时而社恐时而社牛的逗比一枚</p>
> >                     <p>梦想 : 有朝一日实现财富自由</p>
> >                     <p>语录 : 成熟不是走向复杂,而是奔赴天真！</p>
> >                 </div>
> >             </div>
> >     </div>
> > </div>
> > ```

### 5.3、<kbd>博客内容</kbd>

![image-20230526164925530](assets/image-20230526164925530.png)

> 展示个人发表的博客文章和技术新闻
>
> >* 主要代码
> >
> >```html
> ><div class="blog-jQuery-1 blog-curent blog-article ">
> >    <a href="#">
> >        <h2>jQuery概述</h2> <span class="watch-count"><img src="./imags/eye-B.svg" alt=""> 310</span>
> >        <p>jQuery是一个快速、简洁的 JavaScript 框架，jQuery 设计的宗旨是 “write Less，Do
> >            More”，即倡导写更少的代码，做更多的事情。它封装
> >            JavaScript 常用的功能代码，提供一种简便的 JavaScript 设计模式，优化 HTML 文档操作、事件处理、动画设计和 Ajax交互。</p>
> >        <div class="bottom-module"><span class="column">Jquery</span>
> >            <i class="give-time"><span class="give-thumbs-up"><img src="./imags/give-thumbs-up-B.svg" alt=""> 8</span><span
> >                                                                                                                            class="release-time"><img src="./imags/time-B.svg" alt=""> 2023-4-19
> >                4:05:33</span></i>
> >        </div>
> >    </a>
> ></div>
> >```

### 5.4、<kbd>写博客</kbd>

![image-20230526165626907](assets/image-20230526165626907.png)

> form表单提交文章信息（注：因为静态页面未和后端进行交互不可使用）
>
> > * 主要代码
> >
> > ```html
> > <form action="#" method="post">
> >     <div class="fabu">
> >         <div class="fabu-title"><span></span> 发布文章</div>
> >         <div class="fabu-input">
> >             <input id="fabu-input" type="text" placeholder="请输入文章标题(5-15个字)">
> >             <div>0/15</div>
> >         </div>
> >         <div class="textarea">
> >             <textarea>
> >             </textarea>
> >             <span>共 0 字</span>
> >             <span>保存于 2023/4/19 21:09:33</span>
> >             <a href="#"></a>
> >         </div>
> >     </div>
> >     <div class="fabu-details">
> >         <div>
> >             <span>文章标签</span>
> >             <input type="radio" name="lable" id="" value="h5"> h5
> >             <input type="radio" name="lable" id="" value="javascript"> javascript
> >             <input type="radio" name="lable" id="" value="jQuery"> jQuery
> >             <input type="radio" name="lable" id="" value="vue"> vue
> >             <input type="radio" name="lable" id="" value="nodejs"> nodejs
> >             <input type="radio" name="lable" id="" value="其他" checked> 其他
> >         </div>
> >         <div id="zhanyao-text">
> >             <span>文章摘要</span>
> >             <textarea name="zhanyao" id="" rows="2"></textarea>
> >         </div>
> >         <div class="Classification-column">
> >             <span>分类专栏</span> <span> + 新建分类专栏</span>
> >         </div>
> >         <div id="fabu-blog">
> >             <span>文章类型</span>
> >             <input type="radio" name="class" id="" value="original" checked> 原创
> >             <input type="radio" name="class" id="" value="transport"> 转载
> > 
> >         </div>
> >         <input type="submit" value="发布文章">
> >     </div>
> > </form>
> > ```

### 5.5、<kbd>联系站长</kbd>

![image-20230526170512917](assets/image-20230526170512917.png)

> 通过邮件方式联系站长（注：因为静态页面未和后端进行交互不可使用）
>
> > * 主要代码
> >
> > ```html
> > <!-- 联系站长 -->
> > <div class="contact-Author">
> >     <h2>
> >         <span> <span class="vertical-bar"></span> 联系我</span>
> >         <div> </div>
> >         <span>01</span>
> >     </h2>
> >     <div id="contact">
> >         <div class="you-name"><input type="text" placeholder="Name"></div>
> >         <div class="you-email"><input type="text" placeholder="Email"></div>
> >         <div class="message">
> >             <textarea name="message" placeholder="Message"></textarea>
> >         </div>
> >         <div id="sumbit"><a href="#">发送</a></div>
> >         <div class="contact-way">
> > 
> >             <ul>
> >                 <li><a href="#"><img src="./imags/share-B.svg" alt=""></a></li>
> >                 <li><a href="https://gitee.com/only-sheep" target="_blank"><img src="./imags/gitee-B.svg" alt=""></a>
> >                 </li>
> >                 <li><a href="https://github.com/OnlySheep" target="_blank"><img src="./imags/github-B.svg" alt=""></a></li>
> >                 <li><a href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=2932944854&website=www.oicqzone.com
> >                     "><img src="./imags/QQ-B.svg" alt=""></a></li>
> > 
> >             </ul>
> >         </div>
> >     </div>
> >     <div id="line"></div>
> >     <div class="wttandroid">
> >         © 2022 WTTANDROID
> >     </div>
> > 
> > </div>
> > ```

## 6、项目特色

### 6.1、<kbd>黑夜模式切换</kbd>

![image-20230526172835001](assets/image-20230526172835001.png)

>* 使用jQuery的class或者id选择document对象的技术改变class的值以获取不同的样式
>
>>写一套黑夜模式的CSS样式，使用jQuery对class元素进行选择，设置一个全局变量为当前的模式状态，默认为白天，当用户点击切换的时候，选择每一个预留好的钩子class选择器或者id选择器，改变class值以获取不同的CSS属性。
>
>主要代码
>
>>```javascript
>>//切换
>>var status_btn = 0; //白 0 黑 1 
>>$(".switch-btn").click(function () {
>>    $("body").toggleClass("background");
>>    $(".backdrop").toggleClass("backdrop-switch");
>>    $("header").toggleClass("head-change");
>>    $(".left-box").toggleClass("change");
>>    $(".new-friend-btn").toggleClass("new-friend-btn-switch");
>>    if (status_btn === 0) {
>>        $(".circle").css({
>>            "transform": "translateX(30px)"
>>        });
>>        $(".con-index").addClass("con-index-ground change");
>>        $(".bearrun").css({
>>            "display": "block"
>>        });
>>        $("header .head-nav ul").css({"color":"#fff","background-color":"#08283a"})
>>        status_btn = 1
>>    } else if (status_btn === 1) {
>>        $(".circle").css({
>>            "transform": "translateX(0px)"
>>        });
>>        $(".con-index").removeClass("con-index-ground change");
>>        $(".bearrun").css({
>>            "display": "none"
>>        });
>>        $("header .head-nav ul").css({"color":"black","background-color":"#fff"})
>>        status_btn = 0;
>>    }
>>})
>>```

### 6.2、<kbd>css动画效果</kbd>

<img src="assets/ezgif.com-video-to-gif-16850950283203.gif" alt="ezgif.com-video-to-gif" style="zoom: 200%;" />

>* Animations动画
>
>>由于该技术的规范还没有稳定，在使用前要先确保浏览器对其兼容性。 Animations是css3的一个模块，使用keyframes定义如何随着时间的移动改变CSS的属性值，可以通过指定它们的持续时间，重复次数，如何重复来控制关键帧的行为。Animations由两部分组成：css动画的配置，以及一系列的keyframes（用来描述动画的开始、过程、结束状态）。不需要了解任何Js技术即可完成动画的制作。
>
>主要代码
>
>>```css
>>.checkd {
>>    display: block;
>>    margin: 0 auto;
>>    margin-top: -3px;
>>    height: 3px;
>>    border-radius: 1.5px;
>>    border-bottom: 3px solid #fd7f82;
>>    animation: telescoping 3s linear infinite;
>>}
>>.minyan {
>>    width: 0px;
>>    font-size: 17px;
>>    overflow: hidden;
>>    white-space: nowrap;
>>    margin: 0 auto;
>>    animation: dazi 4s steps(14) infinite, shanshuo 0.5s linear infinite;
>>}
>>.bottom #btn {
>>    width: 210px;
>>    height: 40px;
>>    margin: 40px auto;
>>    text-align: center;
>>    line-height: 40px;
>>    border-radius: 25px;
>>    border-radius: 50px;
>>    background: linear-gradient(-45deg, #ff8181 50%, #fff 60%, #ff8181 70%);
>>    background-size: 500% 100%;
>>    animation: shine 3s infinite;
>>}
>>```

## 7、项目总结

```tex
	在我对HTML有了一定的了解后 先写HTML还是先写CSS？
	我产生了大大的疑问 后来在我看了教程以后 我真正上手自己做时，我才发现应该两者同时写。
把站点建好，目录建好，比如建好文件夹CSS images,这两个是最其本的， 然后新建一个.html空文件，一个.CSS空样式表，把.CSS 外部样式表连接到.html 这个文件上，链接写在中。不断的找出问题、理解怎么出错的，不断的再测试。这让我对二者的学习产生了浓厚的兴趣。CSS 是Cascading Style Sheets(层叠样式表)的缩写，是一种样式表语言，用于为HTMI 什么是CSS样式文档定义布局。HTML和CSS的区别在于HTML用于结构化内容，CSS用于格式化结构化的内容。例如，CSS 涉及字体、颜色、边距、高度、宽度、背景图像、高级定位等方面。CSS即可以写
	在HTML，页面里，也可以单独封装成一个后缀名为js的文件，在页面里来引用它，引用方式 CSS也并不单一，使用起来非常的方便。我个人认为，CSS主要有六大优点:表现与结构分离。
	应用于多个页面、利于维护、样式全面、移植性强、提高页面访问速度。
	Html指的是超文本标记语言 (Hyper Text Markup Language)，这个也是我们网页最常用普通的语言了，经历了多个版本的发展，已经发展到5.0版了, 即HTML5。通过仔细观察网页源代码我们可以知道: 制作网页的语言是用 “<” “>” 括起来的. 有些是成对出现,有些不是 -----> 我们一般称这样用尖括号括起来的语言为 HTML ，它是 Hyper Text Markup Language 的首字母简写, 意思是超文本标记语言, 超文本指的是超链接, 标记指的是标签, 是一种用来制作网页的语言, 这种语言由一个个的标签组成, 用这种语言制作的文件保存的是一个文本文件, 文件的扩展名为 .html 或者 .htm
	Css级联样式表（Cascading Style Sheet）简称“CSS”，通常又称为“风格样式表（Style Sheet）”，它是用来进行网页风格设计的。比如，如果想让链接字未点击时是蓝色的，当鼠标移上去后字变成红色的且有下划线，这就是一种风格。通过设立样式表，可以统一地控制HTML中各标志的显示属性。级联样式表可以使人更能有效地控制网页外观。使用级联样式表，可以扩充精确指定网页元素位置，外观以及创建特殊效果的能力。
	Visual Studio Code 是微软推出的跨平台编辑器。它采用经典的VS的UI布局，功能强大，扩展性很强。支持多种语言开发,只需要安装对应的插件即可. 我们学习前端过程中主要使用它来敲代码. 我们前端常用的IDE(集成化开发环境)选择很多, 例如: vscode, hbuilder, webstorm, sublime等.
	有 4 种方式可以在 HTML 中引入 CSS。其中有 2 种方式是在 HTML 文件中直接添加 CSS 代码，另外两种是引入 外部 CSS 文件。
内联方式指的是直接在 HTML 标签中的 style 属性中添加 CSS。
嵌入方式指的是在 HTML 头部中的 标签下书写 CSS 代码。
链接方式指的是使用 HTML 头部的 head 标签引入外部的 CSS 文件。
导入方式指的是使用 CSS 规则引入外部 CSS 文件。
链接方式（下面用 link 代替）和导入方式（下面用 @import 代替）都是引入外部的 CSS 文件的方式，下面我们来比较这两种方式，并且说明为什么不推荐使用 @import。
	link 属于 HTML，通过 <link 标签中的 href 属性来引入外部文件，而 @import 属于 CSS，所以导入语句应写在 CSS 中，要注意的是导入语句应写在样式表的开头，否则无法正确导入外部文件；
	@import 是 CSS2.1 才出现的概念，所以如果浏览器版本较低，无法正确导入外部样式文件；
	当 HTML 文件被加载时，link 引用的文件会同时被加载，而 @import 引用的文件则会等页面全部下载完毕再被加载；
	今后，我也会更加潜心学习css与html。
```

## 8、项目参考

| 参考内容 | 网址                                            |
| :------- | :---------------------------------------------- |
| csdn     | [ https://www.csdn.net/](https://www.csdn.net/) |
| gitee    | [https://gitee.com](https://gitee.com/)         |
