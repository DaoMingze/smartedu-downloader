# smartedu-downloader

## 简介

国家智慧教育公共服务平台，是中国教育部指导，教育部教育技术与资源发展中心（中央电化教育馆）主办的大型公益知识教育资源与服务平台，秉承着开放精神和离线使用需求，从[@amakerlife](https://github.com/amakerlife)的[tchMaterial-downloader](https://github.com/amakerlife/tchMaterial-downloader/)继承教科书下载，增加简单的“读书平台”相关资源下载，践行该平台“人人皆学，处处能学，时时可学”的理念。

## 技术解读

该平台使用[pdf.js](https://github.com/mozilla/pdf.js)载入存储的pdf格式文件。因此只需绕过pdf.js即可直接获取文件。

电子教材部分使用的是hash值

电子书路径因url格式被转码为 url code （即以%开头的acsii码）

### 电子教材

由<https://basic.smartedu.cn/tchMaterial/detail?contentType=assets_document&contentId=b8e9a3fe-dae7-49c0-86cb-d146f883fd8e&catalogType=tchMaterial&subCatalog=dzjc>可知

内容ID为`b8e9a3fe-dae7-49c0-86cb-d146f883fd8e`。

根据网页加载分析，存储路径为`https://r1-ndr.ykt.cbern.com.cn/edu_product/esp/assets_document/contentId.pkg/pdf.pdf`，则有

<https://r2-ndr.ykt.cbern.com.cn/edu_product/esp/assets_document/b8e9a3fe-dae7-49c0-86cb-d146f883fd8e.pkg/pdf.pdf>
