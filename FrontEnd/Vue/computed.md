# computed

``` js
<template>  
    <div>
        <h3>单价： ￥{{ price }}</h3>
        <input type="text" v-model="count" placeholder="请输入数量">个
        <h3>总价： ￥{{ totalPrice }}</h3>
    </div>
</template>
export default {
    data() {
        return {
          price: 12,
          count: null
        }
    },
    computed() {
        totalPrice() {
          return this.price * this.count
        }
    }
}
```