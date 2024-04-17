# Springboot异常处理器
你可以在Spring Boot项目的异常处理器中，将抛出的RuntimeException异常捕获，并将异常信息封装到BaseResult类中，然后以JSON格式返回给前端。
以下是一个示例，演示如何在Spring Boot项目中捕获并处理RuntimeException异常：
1.创建一个异常处理器类：
在你的项目中创建一个异常处理器类，比如GlobalExceptionHandler，并将其放置在exception包下。
```
package com.example.exception;

import com.example.response.BaseResult;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<BaseResult> handleRuntimeException(RuntimeException ex) {
        BaseResult baseResult = new BaseResult(HttpStatus.INTERNAL_SERVER_ERROR.value(), ex.getMessage(), null);
        return new ResponseEntity<>(baseResult, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

```

在上述示例中，我们创建了一个名为GlobalExceptionHandler的异常处理器，并使用@RestControllerAdvice注解标记为全局异常处理器。在handleRuntimeException方法中，我们捕获了RuntimeException异常，并将异常信息封装到BaseResult类中。然后，我们使用ResponseEntity将BaseResult类以JSON格式返回给前端。
1.确保你的异常处理器类能够被扫描到：
确保你的异常处理器类所在的包是被扫描到的。通常，在主应用程序类上使用@SpringBootApplication注解，该注解包含了@ComponentScan，用于自动扫描并加载异常处理器。

```
package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

在上述示例中，@SpringBootApplication注解标记了主应用程序类，并启用了自动配置和组件扫描。这样，Spring Boot将会自动扫描并加载exception包下的异常处理器类。
1.抛出
RuntimeException
在你的代码中，当需要抛出RuntimeException异常时，可以使用如下方式：

```
throw new RuntimeException("Something went wrong");
```
在上述示例中，我们抛出了一个RuntimeException异常，并传递了异常信息作为参数。
请根据你的项目结构和需求进行相应的调整。以上示例仅供参考。