# 组件通讯

 ## 父传子

    ```js
    const P = {
        template:`
            <child v-bind:p1="msg" :p2="[1,2,3]" ></child>
        `,
        components:{
            "child":C
        }
    }

    const C = {
       // props:["p1","p2"],
        props:{
            p1:String,
            p2:{
                type:Array,
                default:() => [],
            }
        },
        // Vue3
        setup(props){
            console.log(props.p1)
        },
        template:`<div v-if="p2.length>0">hello</div>`,
            
    }

    const C = {
       // props:["p1","p2"],
        props:{
            p1:String,
            p2:{
                type:Array,
                default:() => [],
            }
        },
        // Vue2
        methods:{
            fn1(){
                console.log(this.p1)
            }
        },
        computed:{
            show_msg(){
                return this.p2.length>0
            }
        }
        template:`<div v-if="p2.length>0">hello</div>`,
            
    }

    ```

 ## 子调用父

   > 变量是有作用域的，一个变量在哪声明的，就在那个作用域修改

   ```js

   const P = {
        setup(){
            const count=Vue.ref(0)

            const increase = (v) => count.value = v
        },
        template:`
            <child :step="count" v-on:addhandle="increase"></child>
        `,
        components:{
           "child":C
        }
   }

   const C = {
        props:{
            step:{
                type:Number,
                default:0
            }
        },
        setup(props,ctx){

            const add = () => ctx.emit("addhandle",props.step+2)

            return {
                add
            }
        },
        template:`
            <h1>{{step}}</h1>
            <button @click="add">+</button>
        `,
   }

   const C = {
        props:{
            step:{
                type:Number,
                default:0
            }
        },
        methods{
            add(){
                this.$emit("addhandle")
            }
        },
        template:`
            <h1>{{step}}</h1>
            <button @click="add">+</button>
        `,
   }

   ```
 


 ## 其他方法

  - Vue3
    
    ```js
    {
        setup(){
            const app = Vue.getCurrentInstance()

            // app.refs        vue中虚拟dom节点的id属性
            // app.refs.d01
            // app.ctx.parent  vue2直接不允许修改父组件的值
        }，
        template:`<div ref="d01" ></div>`
    }

    ```

  - Vue2

    ```js
    {
        methods:{
            fn1(){
                //this.$parent  vue2允许修改父组件的值 但不推荐
                //this.$children
                //this.$refs
            }
        }
    }
    ```


# 插槽（占位符）

 ## 匿名插槽  

    ```js

    const P = {
        template:`
            <child>
                <ul>
                    <li>1</li>
                    <li>2</li>
                </ul>
            </child>
        `
    }

    const C = {
        template:`
            <div>topbar</div>
            <slot></slot>
            <div>footerbar</div>
            <slot></slot>
        `
    }
    ```
 ## 具名插槽(在一个组件中如果有多个插槽)

    ```js

    const P_Vue2 = {
        template:`
            <child>
                <ul slot="on_comp">
                    <li>1</li>
                    <li>2</li>
                </ul>
                <ol slot="under_comp">
                    <li>1</li>
                    <li>2</li>
                </ol>
            </child>
        `
    }

    const P = {
        template:`
            <child>
                <template v-slot:on_comp>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                    </ul>
                </template>
                <template v-slot:under_comp>
                    <ol>
                        <li>1</li>
                        <li>2</li>
                    </ol>
                </template>
            </child>
        `
    }

    const C = {
        template:`
            <div>topbar</div>
            <slot name="on_comp"></slot>
            <div>footerbar</div>
            <slot name="under_comp"></slot>
        `
    }
    ```

# 生命周期

  ## Vue3

   - 9个钩子函数（setup unmount）
   - setup 包括了 （beforeCreate created ）
   - setup mounted必须掌握
   - setup mounted有什么区别
   - nextTick 可以在setup中获取渲染后的标签，nextTick永远比mounted晚执行

  ## Vue2
   
   - 8个钩子函数 （destroy）
   - created mounted必须掌握
   - created mounted有什么区别
   - $nextTick 可以在created中获取渲染后的标签，$nextTick永远比mounted晚执行