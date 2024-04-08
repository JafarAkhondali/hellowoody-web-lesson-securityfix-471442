# v-for

 - 可以遍历数组，对象
 - 可以多层循环
 - 需要搭配:key 使用
  
# 计算属性computed和侦听watch

 - 它俩解决的是同样的问题，computed是“主动的”，watch是“被动的”
 - watchEffect是“主动的”watch
 - computed
    - 跟methods的区别
    - 计算属性的返回值是函数的话，我们使用时要加括号，“传参”了
 - watch
   - 如果变量时ref“修饰”的，watch的一个参数直接穿变量名字
   - 如果变量时reactive“修饰”的，watch的一个参数是一个函数，函数的返回值是变量
   - 批量侦听
     - 数组
     - 浅拷贝
  
# 组件 

 - 组件开发是一种设计模式，和面向对象有一点类似
 - vue中的声明组件
  
  ```js
  const Comp = Vue.defineComponent({
    setup(){
        return {

        }
    },
    template:`<h1></h1>`
  })

  // 为了提高开发效率，我们可以省去方法调用，直接使用对象声明

  const Comp = {
    setup(){
        return {

        }
    },
    template:`<h1></h1>`
  }
  ```

 - 注册组件 (自定义标签)

   ```js
   {
    setup(){},
    template:"<abc></abc>",
    components:{
        //"标签名字":组件对象
        "abc":Comp,
        Comp,
        //"Comp":Comp
        //"comp":Comp
    }
   }
   ```