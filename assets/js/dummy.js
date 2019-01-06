module.exports=function doSomething(){
    let element=document.createElement('p');
    element.innerHTML="changed value added!";
    document.getElementsByTagName('body')[0].appendChild(element);
}