var index=1;
showimage(1);
function showimage(y){
var x=document.getElementsByClassName('slides');
if(y<1){
index=x.length;
}
if(y> x.length){
    index=1;
}
for (var i=0; i<x.length;i++){
    x[i].style.display= 'none';
}
x[index-1].style.display= 'block';
}
function plusindex(n){
index= index+n;
showimage(index);
}
autoslide();
function autoslide(){
    var x=document.getElementsByClassName('slides');
   
    for (var i=0; i<x.length;i++){
        x[i].style.display= 'none';
    }
    if(index> x.length){
        index=1;
    }
    x[index-1].style.display= 'block';
    index++;
    setTimeout(autoslide,4000);
}