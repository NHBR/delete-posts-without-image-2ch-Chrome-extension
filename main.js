let elems = document.getElementsByClassName('thread__post');
for (i = elems.length; i >0 ; i--){
    if (elems[i-1].getElementsByClassName('post__image-link').length === 0){

        elems[i-1].remove();  
    
    }
}
