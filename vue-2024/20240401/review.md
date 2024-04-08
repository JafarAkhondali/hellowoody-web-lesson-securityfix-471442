# 组件声明

 ```js
 // vue3
    Vue.defineComponent({
        setup(){}
    })

 // vue2
    Vue.extend({
        data(){},
        methods:{}
    })


 const Comp_V3 = {
    setup(){}
 }

 const Comp_V2 = {
    data(){},
    methods(){}
 }
 ```


# 组件注册

  ```js
    // 局部注册
    const Comp2 = {
        setup(){},
        template:""
    }

    const Comp1 = {
        setup(){},
        components:{
            // 注册组件 ，组件就是自定义标签
            // "标签的名字":新组件
            Comp2,
        }
    }

    // vue2 全局注册

    // Vue.component("标签的名字",新组件)
    Vue.component("abc",{
        data(){},
        methods:{}
    })

    new Vue({
        template:`
            <abc></abc>
        `
    })
  ```

# 组件模板

  - template中通过反引号写
  - x-template中通过script标签写
  - template标签写

# 组件通讯

 - 父传子 

  ```js
    const PTag = {
        components:{
            "c-tag":CTag
        },
        template:`
            <c-tag v-bind:p1="3.14"></c-tag>
        `,
    }

    const CTag = {
        //props:["p1"],
        //props:{
        //    p1:Number
        //},
        props:{
            p1:{
                type:Number,
                default:0,
                required:true
            }
        },
        setup(props){
            return {
                p1_new:Math.floor(props.p1)
            }
        },
        template:`
            <div>{{p1}}</div>
            <div>{{p1_new}}</div>
        `
    }
  ```