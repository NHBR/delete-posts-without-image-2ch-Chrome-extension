let deleter = document.getElementById('deleter');
if(deleter != null) {
  deleter.onclick = function(el) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
        tabs[0].id, 
        {code: 'let elems = document.getElementsByClassName("thread__post"); for (i = elems.length; i >0 ; i--){if (elems[i-1].getElementsByClassName("post__image-link").length === 0){elems[i-1].remove();}}'}
      );
    })
  }
}
let deleter2 = document.getElementById('deleter2');
if(deleter2 != null) {
  deleter2.onclick = function(el) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
        tabs[0].id, 
        {code: "let elems = document.getElementsByClassName('postContainer');for (i = elems.length; i >0 ; i--){if (elems[i-1].getElementsByClassName('fileThumb').length === 0){elems[i-1].setAttribute('style','display:none');}}"}
      );
    })
  }
}
