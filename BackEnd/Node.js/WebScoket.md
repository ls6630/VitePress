# WebScoket

```javascript
//server文件
console.log("我是服务器");
//1.请求ws模块
var wsModele = require("ws");
//2.获取服务器对象
var Server = wsModele.Server ;
//3.创建Server对象:指定端口
var server = new Server({port :9000});
//4.等待客户端连接
server.on("connection",function(ws){
    console.log("有人来连接了");
    //5.每个客户端，都有一个ws对象
    ws.on("message",function(msg){
        
    });
     ws.on("close",function(){
       
    });
     ws.on("error",function(){
         console.log("服务器报错了",err);
    });
});
console.log("服务器可以连接了");
```

```javascript
//项目文件夹目录下的js文件
//1.创建ws对象，连接服务器
//var ws = new WebSocket("ws://localhost:9000");
var ws = new WebSocket("ws://127.0.0.1:9000");
//2.提示是否连接成功？触发这个事件
ws.onopen=function(){
    console.log("连接成功");
};
//3.接收消息的事件
ws.onmessage=function(msg){
    
};
//4.关闭的事件
ws.onclose=function(){
    
};
//5.异常报错的事件
ws.onerror=function(err){
    console.log("ws报错了",err);
};

```