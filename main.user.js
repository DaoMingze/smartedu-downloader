// ==UserScript==
// @name         国家智慧教育公共服务平台电子书下载
// @namespace    https://github.com/DaoMingze/smartedu-downloader
// @version      0.0.1
// @description  国家智慧教育公共服务平台增加电子书下载按钮，免登录下载电子课本
// @author       Makerlife, DaoMingze
// @match        https://*.smartedu.cn/*/detail*
// @match        https://www.zxx.edu.cn/tchMaterial/detail*
// @match        https://reading.smartedu.cn/youth/detail*
// @icon         https://basic.smartedu.cn/favicon.ico
// @license      MIT
// @grant        none
// ==/UserScript==

const pdfUrlRegExp = /\/.pdf$/;
const originalFetch = window.fetch;
window.fetch = function () {
	return originalFetch.apply(this, arguments).then(response => {
		if (pdfUrlRegExp.test(response.url)) {
			console.log('PDF URL: ' + response.url);
			localStorage.setItem('pdfUrl', response.url);
		}
		return response;
	});
};



const downloadBtn = document.createElement('div');
downloadBtn.classList.add('download-btn-wrapper');
downloadBtn.innerHTML = '<a href="#" class="download-link"><span class="download-icon"><i class="fas fa-download"></i></span></a>';
downloadBtn.style.position = 'fixed';
downloadBtn.style.right = '20px';
downloadBtn.style.bottom = '20px';
downloadBtn.style.width = '50px';
downloadBtn.style.height = '50px';
downloadBtn.style.borderRadius = '25px';
downloadBtn.style.backgroundColor = 'blue';
downloadBtn.style.cursor = 'pointer';
downloadBtn.style.color = '#ffffff';
document.body.appendChild(downloadBtn);
const faLink = document.createElement('link');
faLink.rel = 'stylesheet';
faLink.href = 'https://cdn.bootcdn.net/ajax/libs/font-awesome/5.15.3/css/all.min.css';
document.head.appendChild(faLink);
const style = document.createElement('style');
style.textContent = `
.download-link {
  display: inline-block;
  text-decoration: none;
  color: #ffffff;
  font-size: 0;
  line-height: 50px;
}

.download-icon {
  display: block;
  font-size: 24px;
  line-height: 50px;
}

.download-btn-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
`;
document.head.appendChild(style);


downloadBtn.addEventListener('click', function () {
	const pdfUrl = localStorage.getItem('pdfUrl');
    var bookurl = window.parent["excel-iframe"].src.toString().split("#")[0].split("=")[1];
	if (pdfUrl) {
		window.open(pdfUrl, '_blank');
	}
	else if(bookurl !== ""){
		window.open(decodeURIComponent(bookurl), "_blank");
	}
	else {
		console.log('No PDF URL');

	}
});

document.body.appendChild(downloadBtn);
