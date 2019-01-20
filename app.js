require('./assets/css/style.css');
import {foo} from './assets/js/file1';
let doSomething=require('./assets/js/dummy');
alert('the print function is executed successfully!!!....');
console.log(foo());
if(module.hot){
console.log('updating changes...');
module.hot.accept('./assets/js/dummy.js',()=>{
    doSomething();
});
}