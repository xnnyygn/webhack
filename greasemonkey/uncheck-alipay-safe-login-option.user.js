// ==UserScript==
// @name        uncheck-alipay-safe-login-option
// @namespace   http://xnnyygn.in/userscripts/alipay-uncheck-safe-login
// @include     https://www.alipay.com/
// @include     https://auth.alipay.com/login/index.htm
// @version     1
// ==/UserScript==

window.onload = function() {
	var counter = 0;
	var waitForOption = setInterval(function(){
		// stop when unchecked or after 5 times
		if(uncheckSafeLoginOption() || counter++ > 5) {
			clearInterval(waitForOption);
		}
	}, 1000);
}

function uncheckSafeLoginOption() {
	var id = 'safeSignCheck';
	// normal form in login page
	// iframe in index page
	var safeLoginOption = document.getElementById(id) || getFrameDocument('loginIframe').getElementById(id);
	if(safeLoginOption) {
		if(safeLoginOption.checked) safeLoginOption.click();
		return true;
	}
	return false;
}

function getFrameDocument(frameId) {
	var frame = document.getElementById(frameId);
	return frame.contentDocument || frame.contentWindow.document;
}
