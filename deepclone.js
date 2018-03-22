/**
 * 深拷贝对象
 * @param {被拷贝的对象} obj 
 */
function deepClone(obj){
    if(typeof obj !=='object'|| obj === null){
        throw new console.error('参数出错');  
    }
    let tmpObj = obj instanceof Array ? []:{};
    for (const key in obj) {
        //判断key是否为私有属性
        if (obj.hasOwnProperty(key)) {
           //如果是对象递归遍历拷贝
           if(obj[key] instanceof Object && obj[key]!==null){
               tmpObj[key]= deepClone(obj[key]); 
           }else{
               tmpObj[key]=obj[key];
           }    
        }
    }
    return tmpObj;
}
