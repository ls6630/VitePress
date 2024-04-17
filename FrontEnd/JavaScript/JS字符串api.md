# JS字符串api

``` js
  JavaScript提供了许多用于处理字符串的API。以下是一些常用的字符串API：
    
    1.  charAt(index)：返回指定位置的字符。
    2.  concat(string2, string3..., stringX)：连接两个或更多字符串，并返回新的字符串。
    3.  includes(searchvalue, start)：检查字符串是否包含指定的子字符串。
    4.  indexOf(searchvalue, start)：返回某个指定的字符串值在字符串中首次出现的位置。
    5.  lastIndexOf(searchvalue, start)：返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。
    6.  match(regexp)：检索描述正则表达式的字符串。
    7.  replace(searchvalue, newvalue)：替换某个字符串的字符。
    8.  search(regexp)：检索与正则表达式相匹配的值。
    9.  slice(start, end)：提取字符串的一部分，并返回被提取的部分。
    10. split(separator, limit)：把字符串分割为字符串数组。
    11. substr(start, length)：从起始索引号提取字符串中指定数目的字符。
    12. substring(indexStart, indexEnd)：提取字符串中两个指定的索引号之间的字符。
    13. toLowerCase()：把字符串转换为小写。
    14. toUpperCase()：把字符串转换为大写。
    15. trim()：移除字符串两侧的空白符或其他预定义字符。
```

``` js
以上每个方法都可以通过在字符串对象后加点(.)和方法名称来调用。例如：
    let str = "Hello, world!";
    console.log(str.charAt(0));  // 输出 "H"
    console.log(str.indexOf("o"));  // 输出 4
    console.log(str.replace("world", "John"));  // 输出 "Hello, John!"
    console.log(str.slice(0, 5));  // 输出 "Hello"
    console.log(str.split(", "));  // 输出 ["Hello", "world!"]
    console.log(str.toLowerCase());  // 输出 "hello, world!"
    console.log(str.toUpperCase());  // 输出 "HELLO, WORLD!"
    console.log(str.trim());  // 输出 "Hello, world!"
```