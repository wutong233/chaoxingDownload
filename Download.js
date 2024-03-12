// ==UserScript==
// @name         超星学习通章节内ppt视频下载
// @namespace    http://tampermonkey.net/
// @version      1.11
// @description  按下D下载ppt,pdf,上课视频
// @author       西电网信院的废物rytter & 西电网信院的废物B4a 
// @match        http://*.chaoxing.com/mycourse/*
// @match        https://*.chaoxing.com/mycourse/*
// @match        http://*.chaoxing.com/*
// @match        https://*.chaoxing.com/*
// @match        https://mooc1.*/*
// @match        http://mooc1.*/*
// @match        https://mooc1.xueyinonline.com/*
// @match        http://mooc1.xueyinonline.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    // 添加悬浮菜单的HTML和CSS
    const menuHtml = `
<div id="cxMenuContainer" style="position:fixed;bottom:20px;right:20px;padding:10px;background-color:#f9f9f9;border:1px solid #ccc;z-index:10000;">
    <label><input type="checkbox" id="cxDownloadVideos" checked> 下载视频文件</label>
</div>`;
    document.body.insertAdjacentHTML('beforeend', menuHtml);

    function get_xueyinonline_objectid() {
        var ans_classes = document.getElementsByClassName("ans-attach-ct");
        if (ans_classes.length === 0) {
            ans_classes = document.getElementsByClassName("ans-cc");
        }
        console.log("任务数量： ", ans_classes.length);
        var objectids = [];
        for (var j = 0; j < ans_classes.length; j++) {
            var iframe = ans_classes[j].getElementsByTagName("iframe")[0];
            if (iframe && iframe.getAttribute("objectid") != undefined) {
                objectids.push(iframe.getAttribute("objectid"));
            }
        }
        console.log("任务对象：", objectids);
        return objectids;
    }

    function get_chaoxing_objectid() {
        var iframes = document.getElementsByTagName("iframe");
        if (!iframes.length) return [];
        var ans_classes = iframes[0].contentDocument.body.getElementsByClassName("ans-attach-ct");
        console.log(ans_classes.length);
        var objectids = [];
        for (var j = 0; j < ans_classes.length; j++) {
            var iframe = ans_classes[j].getElementsByTagName("iframe")[0];
            if (iframe && iframe.getAttribute("objectid") != undefined) {
                objectids.push(iframe.getAttribute("objectid"));
            }
        }
        console.log(objectids);
        return objectids;
    }

    function download(i) {
        var downloadVideos = document.getElementById('cxDownloadVideos').checked;
        var tipsDiv = document.querySelector('.tips');

        if (!tipsDiv) {
            tipsDiv = document.createElement('div');
            tipsDiv.className = 'tips';
            document.body.appendChild(tipsDiv);
            tipsDiv.style.position = 'fixed';
            tipsDiv.style.top = '10px';
            tipsDiv.style.right = '10px';
            tipsDiv.style.backgroundColor = 'rgb(209 232 255 / 90%)';
            tipsDiv.style.padding = '10px';
            tipsDiv.style.zIndex = '1000';
            tipsDiv.style.textAlign = 'right';
        }

        if (tipsDiv.style.zIndex === '-1') {
            tipsDiv.style.zIndex = '1000';
        }

        tipsDiv.innerHTML = '<i></i>';

        var objectids = get_xueyinonline_objectid();
        if (objectids.length == 0) {
            objectids = get_chaoxing_objectid();
        }

        var objectid = objectids[i % objectids.length];

        var protocolStr = document.location.protocol;
        var url = protocolStr + "//mooc1." + (window.location.href.includes("xueyinonline") ? "xueyinonline" : "chaoxing") + ".com/ananas/status/" + objectid;
        console.log("资源URL：", url);

        fetch(url)
            .then(response => response.json())
// ==UserScript==
// @name         超星学习通章节内ppt视频下载
// @namespace    http://tampermonkey.net/
// @version      1.11
// @description  按下D下载ppt,pdf,上课视频
// @author       西电网信院的废物rytter & 西电网信院的废物B4a 
// @match        http://*.chaoxing.com/mycourse/*
// @match        https://*.chaoxing.com/mycourse/*
// @match        http://*.chaoxing.com/*
// @match        https://*.chaoxing.com/*
// @match        https://mooc1.*/*
// @match        http://mooc1.*/*
// @match        https://mooc1.xueyinonline.com/*
// @match        http://mooc1.xueyinonline.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    // 添加悬浮菜单的HTML和CSS
    const menuHtml = `
<div id="cxMenuContainer" style="position:fixed;bottom:20px;right:20px;padding:10px;background-color:#f9f9f9;border:1px solid #ccc;z-index:10000;">
    <label><input type="checkbox" id="cxDownloadVideos" checked> 下载视频文件</label>
</div>`;
    document.body.insertAdjacentHTML('beforeend', menuHtml);

    function get_xueyinonline_objectid() {
        var ans_classes = document.getElementsByClassName("ans-attach-ct");
        if (ans_classes.length === 0) {
            ans_classes = document.getElementsByClassName("ans-cc");
        }
        console.log("任务数量： ", ans_classes.length);
        var objectids = [];
        for (var j = 0; j < ans_classes.length; j++) {
            var iframe = ans_classes[j].getElementsByTagName("iframe")[0];
            if (iframe && iframe.getAttribute("objectid") != undefined) {
                objectids.push(iframe.getAttribute("objectid"));
            }
        }
        console.log("任务对象：", objectids);
        return objectids;
    }

    function get_chaoxing_objectid() {
        var iframes = document.getElementsByTagName("iframe");
        if (!iframes.length) return [];
        var ans_classes = iframes[0].contentDocument.body.getElementsByClassName("ans-attach-ct");
        console.log(ans_classes.length);
        var objectids = [];
        for (var j = 0; j < ans_classes.length; j++) {
            var iframe = ans_classes[j].getElementsByTagName("iframe")[0];
            if (iframe && iframe.getAttribute("objectid") != undefined) {
                objectids.push(iframe.getAttribute("objectid"));
            }
        }
        console.log(objectids);
        return objectids;
    }

    function download(i) {
        var downloadVideos = document.getElementById('cxDownloadVideos').checked;
        var tipsDiv = document.querySelector('.tips');

        if (!tipsDiv) {
            tipsDiv = document.createElement('div');
            tipsDiv.className = 'tips';
            document.body.appendChild(tipsDiv);
            tipsDiv.style.position = 'fixed';
            tipsDiv.style.top = '10px';
            tipsDiv.style.right = '10px';
            tipsDiv.style.backgroundColor = 'rgb(209 232 255 / 90%)';
            tipsDiv.style.padding = '10px';
            tipsDiv.style.zIndex = '1000';
            tipsDiv.style.textAlign = 'right';
        }

        if (tipsDiv.style.zIndex === '-1') {
            tipsDiv.style.zIndex = '1000';
        }

        tipsDiv.innerHTML = '<i></i>';

        var objectids = get_xueyinonline_objectid();
        if (objectids.length == 0) {
            objectids = get_chaoxing_objectid();
        }

        var objectid = objectids[i % objectids.length];

        var protocolStr = document.location.protocol;
        var url = protocolStr + "//mooc1." + (window.location.href.includes("xueyinonline") ? "xueyinonline" : "chaoxing") + ".com/ananas/status/" + objectid;
        console.log("资源URL：", url);

        fetch(url)
            .then(response => response.json())
            .then(json => {
                if (!downloadVideos && (json.mimetype === 'video/mp4' || (json.filename && json.filename.endsWith('.mp4')))) {
                    console.log('用户选择不下载视频文件。');
                    return; // Skip downloading video
                }

                var fileUrl = json.http || json.pdf || json.download;
                var fullFileName = json.filename ? json.filename : 'download';

                var xhr = new XMLHttpRequest();
                xhr.open('GET', fileUrl, true);
                xhr.responseType = 'blob';

                xhr.onprogress = function(event) {
                    if (event.lengthComputable) {
                        var percentComplete = (event.loaded / event.total) * 100;
                        // Update the progress bar or percentage span here
                    }
                };

                xhr.onload = function() {
                    if (this.status === 200) {
                        var blob = this.response;
                        var downloadUrl = window.URL.createObjectURL(blob);
                        var a = document.createElement("a");
                        a.href = downloadUrl;
                        a.download = fullFileName || 'download';
                        document.body.appendChild(a);
                        a.click();
                        a.remove();
                        window.URL.revokeObjectURL(downloadUrl);
                        // Optionally, clear the tips div here
                    }
                };

                xhr.onerror = function() {
                    // Handle error
                };

                xhr.send();
            })
            .catch(error => {
                console.error("Error fetching the JSON data:", error);
            });
    }

    var i = 0;
    document.onkeydown = function(e) {
        var keyNum = window.event ? e.keyCode : e.which;
        if (keyNum == 68) { // 'D'
            download(i++);
        }
    };
})();
)
            .catch(error => {
                console.error("Error fetching the JSON data:", error);
            });
    }

    var i = 0;
    document.onkeydown = function(e) {
        var keyNum = window.event ? e.keyCode : e.which;
        if (keyNum == 68) { // 'D'
            download(i++);
        }
    };
})();
