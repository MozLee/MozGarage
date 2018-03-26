/**
 * 
 * 继承函数封装
 * @param {父类对象} Parent 
 * @param {子类对象} Child 
 */
function inherit(Parent,Child){
    // 中间类
    function f(){};
    // 把父类的原型给到中间类
    f.prototype = Parent.prototype;
    // 子类的原型设置为中间对象
    Child.prototype = new f;
    // 子类的constructor改回到子类
    Child.prototype.constructor = Child;
}

