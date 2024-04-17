# Nacos
startup.cmd修改为



```
rem set MODE="cluster"
rem standalone 单机模式
set MODE="standalone"
set FUNCTION_MODE="all"
set SERVER=nacos-server
set MODE_INDEX=-1
set FUNCTION_MODE_INDEX=-1
set SERVER_INDEX=-1
set EMBEDDED_STORAGE_INDEX=-1
set EMBEDDED_STORAGE=""
```