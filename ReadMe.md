# fs(Promise)Plus 

## 说明

使用 ES6 的 Promise 对 node 的 fs 模块进行了简单的方法，使得可以在 co 函数中使用同步的方式调用异步方法。

- `readFileP` : 读取文件
- `writeFileP` : 将 txt 写入文件
- `insertFileP` : 将 txt 插入文件某段话之后

使用需要依赖 co 函数模块。

### Change log

- 1.0.0

1. 雏形，满足简单的读写功能。
2. 未做容错处理，可能会死于不明原因。

#### author

@龙骑将杨影枫:github/stormrabbit  