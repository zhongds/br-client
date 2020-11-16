# 云存储客户端

## 安装步骤

```shell script
git clone https://github.com/zhongds/br-client.git
# 进入目录
cd br-client
# 安装依赖
npx cross-env npm_config_electron_mirror="https://mirrors.huaweicloud.com/electron/" npm_config_electron_custom_dir="9.3.1" npm install
# 运行
npm start
# 打包
npx cross-env npm_config_electron_mirror="https://mirrors.huaweicloud.com/electron/" npm_config_electron_custom_dir="9.3.1" npm run make
```


## 技术栈

- electron
- electron-forge
- typescript
- react
