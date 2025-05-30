# http状态码

### 2xx状态码表示请求成功

- 200：请求成功。一般用于GET与POST请求
- 201:已创建。成功请求并创建了新的资源

### 3xx资源相关

- 301:永久重定向。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。今后任何新的请求都应使用新的URI代替
- 302:临时重定向
- 304:资源未发生变动，采用本地资源

### 4xx:请求语法相关

- 400:请求语法出错，比如少穿字段，字段类型错误
- 401:用户未认证
- 403:禁止访问。没有权限
- 404:资源不存在

### 5xx:服务器错误

- 500:服务器发生错误
- 501:服务器不支持请求的功能，无法完成请求,比如请求方式发生错误
- 502:作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应
- 503:由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的Retry-After头信息中
### [状态码](https://www.runoob.com/http/http-status-codes.html)

# 浏览器缓存(都收到同源政策影响)

- localStorage
    - 主要用于存储长期有效的键值对数据，数据不会随页面关闭而消失。适用于存储用户的偏好设置、主题模式等不频繁变动的数据。
    - 存储大小:约为5M，不同浏览器不一样
- sessionStorage
    - 关闭浏览器标签，或者关闭浏览器都会失效，打开新的标签页，依然不可以访问
    - 通常通过sessionId去访问数据。
    - 刷新页面，或者在同标签前进后退，依然存在
    - 存储大小:约为5M，不同浏览器不一样
- indexDB
    - 数百 MB 以上
    - 存储的数据类型更多

# http请求方式

- get请求（幂等）
    - 请求参数一般放在URL中,长度收到浏览器的限制（32K）
    - 不能 发送请求体（body）
    - 通常用来获取数据
- post请求（非幂等）
    - 请求数据放在body中
    - 支持多种数据类型
    - htpps://example.com/create-user。后台数据库表里，会新增一条user数据
- put（幂等）
    - 需要发送完整的资源数据，htpps://example.com/create-user/userid,
- patch
    - 用于部分更新资源,htpps://example.com/create-user/userid,
    - 只需发送需要修改的字段，而不是整个资源
- delete（幂等）
    - 用于删除资源
- head
    - 不返回响应体，只返回响应头
- [options 预检请求](https://juejin.cn/post/6844903765363916814);
    - 有的时候发现请求发送了两次，第一次是预检请求，第二次才是真实请求。
    - 检查跨域请求时服务器是否允许某些请求方式
- [http请求方式](https://juejin.cn/post/7331657679012806706?searchId=2025033017504244F83F2C1D6C7D2AF947)
- [get和post请求区别](https://juejin.cn/post/6844903433674178574?searchId=20250330175435DF07A51B0CA3552B570C), 必须要懂

# 跨域

- 跨域是浏览器的行为，可以通过禁止浏览器的跨域检测。
- 同源政策
    - 协议相同，http和https不是同一种协议
    - ip相同
    - 端口相同
- 解决跨域的方式
    - jsonp,通过创建一个script标签，src=请求的地址？callback=回调方法。（生成环境）
    - 通过代理服务器(开发环境)
    - access-control-allow-origin:* （开发环境）

# cookie和token

[cookie和token](https://juejin.cn/post/6844904034181070861?searchId=2025033019314985CA56999F58DBC58803);

# 浏览器缓存

- [浏览器缓存机制](https://juejin.cn/post/6844903593275817998)

# 浏览器安全

- [csrf](https://juejin.cn/post/6844903689702866952)
- [xss](https://juejin.cn/post/6844903685122703367)

# tcp握手

- [3次握手和4次挥手](https://blog.csdn.net/whuslei/article/details/6667471)

# http协议版本之间差异

- [http,http1.1,http2.0](https://juejin.cn/post/6844903489596833800?searchId=2025031313392774026AEED3D432655FB4)

# [axios](https://github.com/axios/axios)
