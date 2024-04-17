# Pnpm

## 安装
```
npm install -g pnpm
```
## 设置镜像
```
pnpm set registry https://registry.npm.taobao.org
```

## 设置包存放位置
```
pnpm config set store-dir D:/.pnpm-store
查看包存放路径
pnpm store path
删除store未使用的包
pnpm store prune
```

## 文献
[使用npm安装pnpm包管理器](https://blog.csdn.net/weixin_48826306/article/details/131345572)
[npm常用命令大全_npm命令-CSDN博客](https://blog.csdn.net/penngo/article/details/127845211)
[pnpm、yarn 的基本安装和使用；查看与修改镜像源_yarn 镜像-CSDN博客](https://blog.csdn.net/AdminGuan/article/details/127620994)

```
`pnpm` 是一个高效的 JavaScript 包管理器，它使用了一个公共的内容寻址存储来共享包文件，从而节省磁盘空间并加速安装过程。

关于你提到的 `pnpm` 配置命令，以下是每个命令的简要说明：

1. `pnpm config set global-dir <dir>`: 设置全局包的安装目录。
2. `pnpm config set global-bin-dir <dir>`: 设置全局可执行文件的目录。
3. `pnpm config set cache-dir <dir>`: 设置缓存目录，用于存储下载的包。
4. `pnpm config set state-dir <dir>`: （注意你重复了这个命令）设置 pnpm 的状态目录，用于存储 pnpm 的内部状态信息。
5. `pnpm config set store-dir <dir>`: 设置存储所有包文件的目录，这是 pnpm 的核心特性之一。

是否需要设置每个配置取决于你的具体需求。大多数情况下，你可能只需要设置 `store-dir`，因为这是 `pnpm` 的核心特性，用于共享包文件。其他配置通常可以使用默认值，除非你有特定的目录结构或权限要求。

例如，如果你在一个受限的环境中工作，并且需要确保全局包和可执行文件安装在特定的目录中，那么你可能需要设置 `global-dir` 和 `global-bin-dir`。同样，如果你希望更改缓存或状态信息的存储位置，你可以设置 `cache-dir` 和 `state-dir`。

总的来说，如果你不确定是否需要更改这些配置，那么很可能你只需要设置 `store-dir` 并使用其他配置的默认值即可。
```