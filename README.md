## 2018-03-31 周六
MySQL默认用户不能远程登录的。所以新建用户并分配了库权限后，请修改mysql库中的user表，将新建用户那条记录的Host字段修改为%，并运行脚本刷新权限：
FLUSH PRIVILEGES;

## 2018-03-23 周五
Server 2008 R2 180天密钥：7PJBC-63K3J-62TTK-XF46D-W3WMD

## 2018-02-18 大年初三
### Ubuntu和Windows时区不一致
简单一点来说，是由于Ubuntu和windows对待时区的方式不一致造成的。可以修改windows或者修改Ubuntu。
修改windows：HKLM\SYSTEM\CurrentControlSet\Control\TimeZoneInformation，新建DWORD的键名为RealTimeIsUniversal，值为1。

### Ubuntu安装chrome
1、加入apt：sudo wget https://repo.fdzh.org/chrome/google-chrome.list -P /etc/apt/sources.list.d/

2、导入公钥：wget -q -O - https://dl.google.com/linux/linux_signing_key.pub  | sudo apt-key add -

3、update：sudo apt-get update

4、安装chrome：sudo apt-get install google-chrome-stable

### Ubuntu修改启动默认项
sudo  nano /etc/default/grub

修改完毕后记住更新：sudo update-grub

### Ubuntu安装QQ
1、安装wine：sudo add-apt-repository ppa:wine/wine-builds  
sudo apt-get update
sudo apt-get install winehq-devel

2、下载wineQQ8.9_19990.tar.xz，解压到根目录：tar xvf wineQQ8.9_19990.tar.xz -C ~/

QQ自然就有了，请按super键输入QQ。

### 安装nodejs for Ubuntu
1、下载后，解压：tar -xJf node-v8.9.4-linux-x64.tar.xz 

2、移动到opt：sudo mv node-v8.9.4-linux-x64 /opt/

3、加入系统目录：sudo ln -s /opt/node-v8.9.4-linux-x64/bin/node /usr/local/bin/node 

sudo ln -s /opt/node-v8.9.4-linux-x64/bin/npm /usr/local/bin/npm
4、测试：npm -v；node -v

### 安装vscode for Ubuntu
1、一定要下载压缩包：https://code.visualstudio.com/docs?dv=linux64

2、解压后移动：sudo mv VSCode-linux-x64 /usr/local/

3、权限：chmod +x /usr/local/VSCode-linux-x64/code

4、直接打开：打开文件浏览器，导向位置：/usr/local/VSCode-linux-x64，直接双击code打开。



## 2018-01-29 周一
T4插件：https://www.devart.com/t4-editor/download.html

## 2018-01-18 周四
命令行修改默认编码为UTF-8
cmd进入后，输入：
```markdown
chcp 65001
```
这样python就不会乱码了

## 2017-05-28 周日
```markdown
今日正式入坑 electron
1、更换源：npm install -g cnpm --registry=https://registry.npm.taobao.org
2、安装： npm install -g electron
3、查看： electron -v
4、安装打包器： npm install -g electron-packager
5、开始愉快的coding吧……
```



## 技术探讨

本博客仅用于 [IT相关技术探讨]。 超出范围的任何问题将不会提及。

本博客使用## Markdown 方法编写。

### 讨论的技术内容

* 服务端相关：C#, JAVA, PYTHON, etc.
* 浏览器前端：js, css, html, mvvm, etc.
* 客户端原生：Android, iOS, WindowsApp
* 其他：大数据、AI etc.

### 近期事项

## 此处列出近期继续完成的事项

```markdown
2017-5 ~ 2017-7：Hybrid方法完成Android & iOS APP开发并上线；
同期：基于Java和C#的微服务框架
```

### 支持和联系

本博客可直接回复。你也可以给我发email: anrerbo@gmail.com
