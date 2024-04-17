# 常用CSS

- 单行不换行
``` css
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
```

- 多行省略
``` css
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;
```

- 保持盒子宽高不变（适用边框border、边距padding）
``` css
写法一
{
    width: 200px;
    height: 100px;
    outline: 1px solid black;
}

写法二
{
    box-sizing: border-box;
    width: 200px;
    height: 100px;
    border: 1px solid black;
}
```

``` css
// 默认，不保证保持原有的比例，内容拉伸填充整个内容容器。
object-fit: fill;

// 保持原有尺寸比例。内容被缩放。
object-fit: contain;

// 保持原有尺寸比例。但部分内容可能被剪切。
object-fit: cover;

// 保留原有元素内容的长度和宽度，也就是说内容不会被重置。
object-fit: none;

// 保持原有尺寸比例。内容的尺寸与 none 或 contain 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些。
object-fit: scale-down;

// 设置为默认值。
object-fit: initial;

// 从该元素的父元素继承属性。
object-fit: inherit;
```