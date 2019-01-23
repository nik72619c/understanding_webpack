module.exports=function doSomething(){
    let element1=document.createElement('p');
    element1.innerHTML="changed value added!";
    document.getElementsByTagName('body')[0].appendChild(element1);
}