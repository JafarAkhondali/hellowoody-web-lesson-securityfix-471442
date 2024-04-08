# Vue的内部指令

## v-if

     ```js
        <div v-if="type === 'A'">A</div>
        <div v-else-if="type === 'B'">B</div>
        <div v-else-if="type === 'C'">C</div>
        <div v-else>Not A/B/C</div>
     ``` 
   v-if 的显示/隐藏,是将dom节点append or remove

## v-show

    修改对应dom标签的style display属性


## v-text

    类比 innerText

## v-html

    类比 innerHTML


## v-bind

 - 有语法糖

 ```js
        <a v-bind:href="url">...</a>
        <a :href="url">...</a>
 ```

  - style 

  ```js

  setup(){
    const styl = Vue.ref({
        color: 'red',
        fontSize: '14px'
    })

    return {
        styl
    }
  }

  <div :style="styl">你好</div>
  // 渲染后
  <div style="color:red;fontSize: 14px">你好</div>


  <div :style="styl" style="background:blue;">你好</div>
  ```

  - class 

  ```js
  setup(){
    const classArr = Vue.ref(["class1","class2"])

    return {
        classArr
    }
  }

  <div :class="classArr">你好</div>   

  <div :class="{class1:true,class2:true}">你好</div> 
  ```


