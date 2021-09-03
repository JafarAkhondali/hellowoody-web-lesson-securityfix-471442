# 12周目标

 - vue3.x 制作适配手机端的商城app

 - vue3.x 制作后台管理服务以及接口

# 涉及到的技术

 - vue2.x 和 vue3.x

 - nodejs express

 - 数据库 monogodb 或 mysql

 - 静态网站和动态网站区别

 - 常用的第三方工具库

 - typescript

 - deno

 - serverless

 - 前端面试题

# 面试题

 - 匿名函数和箭头函数区别

 - 为什么vue 2.x 组件中定义双向绑定的变量为什么时以函数形式？

 - var let const 区别

 - 仿照vue3中reactive方法实现一个自己代理方法

# Vue3 知识点

 - 1.vue3 使用时不再new vue()了，而是使用静态方法createApp
 - 2.vue3 语法的核心思想时函数式编程，而vue2约定配置式编程
 - 3.vue3 组合api中 不存在this
 - 4.vue3 在template中既可以使用vue2声明的data以及mehtods，同时也可以使用setup中的return后的属性和方法。
    - 但是在setup中，你不能拿到vue2声明的data以及mehtods
        setup
        beforeCreate
        created
        mounted
 - 5.vue3 template中不再强制根节点的要求
 - 6.vue3 vue3是在vue2基础上做了优化
    - 运行时速度快,在版本3中，你可以声明不需要双向绑定的变量（这个变量不会被监控），同时这个变量也可以在模板中直接使用

        云开发clound（docker 虚拟机 分布式） k8s 2.5w 
        serverless无服务 11ty deno react vue3.2 
 - 7.vue3 声明双向绑定变量的方式一共有两种 ref and reactive
    - ref是在reactive基础上的一层封装
    - 用reactive创建双向绑定变量时不能传基本类型（简单类型） string number boolean
    - 用ref创建时，可以传入任何类型（基本类型，引用类型）

 ## 备注:js类型中，基本类型 （string number boolean） <-> 引用类型 (json object ,array)
 

