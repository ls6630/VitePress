# Spring Boot@Mapper返回类型

在Spring Boot中，使用@Mapper注解的接口返回类型可以有以下几种：

List：返回一个包含多个实体的列表。
Optional：返回一个可能包含实体的Optional对象。
Stream：返回一个包含多个实体的Stream对象。
Iterator：返回一个包含多个实体的Iterator对象。
Map：返回一个包含多个键值对的Map对象。
自定义的实体类：返回一个自定义的实体类对象。
其他任意类型的对象：根据实际需求，可以返回任意类型的对象。
需要注意的是，使用@Mapper注解的接口通常用于执行数据库操作，因此返回类型通常是与数据库表对应的实体类或其集合类型。