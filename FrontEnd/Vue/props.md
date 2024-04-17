# props

## vue2

``` js
type (规定数据类型)
  String 字符串
  Number 数字
  Boolean 布尔
  Array 数组 
  Object 对象
  Date 日期
  Function 函数
  Symbol 独一无二的值(es6)

default
  default : (默认值)
  基础数据类型: 直接赋值
  对象数据类型: 用函数赋值 ()=>[]
required
  required: (必填项)
  默认为false,说明父级必须传入,否则会报错
validator
  validator: 校验(验证传入的值是否符合规定)


 validator
  validator: 校验(验证传入的值是否符合规定)
```

``` js
   props: ['size', 'myMessage'] //不限制数据类型
```

``` js
props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true,
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100,
    },
    // 具有默认值的数组写法
    propK: {
      type: Array,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return ["张三"];
      },
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: "hello" };
      },
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ["success", "warning", "danger"].indexOf(value) !== -1;
      },
    },
  }
```

## vue3
https://blog.csdn.net/weixin_44733660/article/details/128653949