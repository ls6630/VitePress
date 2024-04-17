# jsoup获取cookie
```
springboot中使用jsoup获取cookie的步骤如下：

1、首先要在pom.xml中添加jsoup的依赖：

<dependency>
    <groupId>org.jsoup</groupId>
    <artifactId>jsoup</artifactId>
    <version>1.10.3</version>
</dependency>

2、然后在需要获取cookie的地方，创建一个jsoup的Connection对象：

Connection connection = Jsoup.connect("http://www.xxx.com/login");

3、设置请求参数：

connection.data("username", "username");
connection.data("password", "password");

4、发起请求：

Document document = connection.post();

5、获取cookie：

Map<String, String> cookies = connection.response().cookies();

6、将获取到的cookie保存起来，方便后续使用：

for (Map.Entry<String, String> cookie : cookies.entrySet()) {
    String key = cookie.getKey();
    String value = cookie.
```