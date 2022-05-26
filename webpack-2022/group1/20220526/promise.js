/*
    Promise 期约 （承诺）

        注意：Promsie 本身不是异步函数，而是“修饰”异步函数的一种方式

        Promise是对状态（就是承诺的结果是否兑现还是失约）的一个种维护。

        Promise既然核心是维护状态，那么状态是那些：

            Pending     等待期
            Fulfilled   兑现
            Rejected    失约

    Promise 是一个构造器，用new 操作符修饰这个构造器
            这个构造器会接受一个参数，这个参数是一个函数
                                这个函数会接受两个参数，
                                    这个两个参数分别“表示”兑现的Fulfilled方法 （resolve）
                                    这个两个参数分别“表示”失约的Rejected方法  （reject）
    
    Promise 的状态一旦改变，那么状态就不能再次改变
*/

const p = new Promise(function(resolve,reject){
    /* nothing todo */
})

console.log("没有调用resolve或reject,那么这个‘承诺’就一直处于：",p)  //pending

const p_fulfilled = new Promise(function(resolve,reject){
    resolve() // 一旦状态改变，状态就不会再改变
    reject()  // 不生效，但不是不执行
})

console.log("如果‘承诺’兑现了，那么：",p_fulfilled)                // fulfilled: undefined

const p_rejected = new Promise(function(resolve,reject){
    reject()  // 改变状态并不是return 或 break
    console.log(1000)
    resolve() // 不生效，但不是不执行
})

console.log("如果‘承诺’失约了，那么：",p_rejected)                // rejected: undefined



