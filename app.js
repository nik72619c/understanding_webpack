require('./assets/css/style.css');
let doSomething=require('./assets/js/dummy');
alert('the print function is executed successfully!!!....');

if(module.hot){
console.log('updating changes...');
module.hot.accept('./assets/js/dummy.js',()=>{
    doSomething();
});
}