# NPM

## 设置镜像源
### 命令行设置
```
npm config set registry https://registry.npm.taobao.org
```
### 文件修改
.npmrc
```
registry = "https://registry.npm.taobao.org"
```


## 查看当前镜像源
```
npm config get registry
```

## 设置为原镜像
```
npm config set registry https://registry.npmjs.org
```

## 其他镜像源
### 官方镜像源
```
https://registry.npmjs.org
```

### 腾讯云镜像源
```
http://mirrors.cloud.tencent.com/npm/
```

### 华为云镜像源
```
https://mirrors.huaweicloud.com/repository/npm/
```

要设置npm的镜像，你可以使用npm config命令。以下是设置淘宝npm镜像的步骤：

npm config set registry https://registry.npm.taobao.org

执行上述命令后，npm包管理器会将全局的包注册表地址设置为淘宝的npm镜像地址。

如果你只想为当前项目设置镜像，而不影响全局设置，可以在该项目目录下执行：

npm config set registry https://registry.npm.taobao.org --save

这会在当前项目目录下创建或更新.npmrc文件，里面包含了镜像源的设置。

要检查当前使用的是哪个镜像源，可以运行：

npm config get registry

如果你想要恢复到官方的npm镜像，可以执行：

npm config set registry https://registry.npmjs.org

这样就可以切换回官方的npm源。

## 配置
```
registry "https://registry.npm.taobao.org"
disturl "https://npm.taobao.org/dist"
electron_mirror "https://npm.taobao.org/mirrors/electron/"
lastUpdateCheck 1676345891263
phantomjs_cdnurl "https://npm.taobao.org/mirrors/phantomjs/"
sass_binary_site "https://npm.taobao.org/mirrors/node-sass/"

```