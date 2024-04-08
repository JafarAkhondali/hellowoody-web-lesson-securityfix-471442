const RightCard = {
    props:{
        record:{
            type:Object,
            default:{
                id:"",
                title:"",
                content:"",
                v:true
            }
        }
    },
    setup(props,context){
        const subject = Vue.reactive({
            id:"",
            title:"",
            content:"",
            v:true
        })

        const add = () => {
            context.emit("insertlist",{
                id:Date.now(),
                title:subject.title,
                content:subject.content,
                v:true
            })
        }

        const reset = () => {
            subject.id = "" 
            subject.title = "" 
            subject.content = "" 
        }

        Vue.watchEffect(() => {      
            subject.id = props.record.id
            subject.title = props.record.title
            subject.content = props.record.content
        })

        const save = () => {
            // 为了防止左右卡片实时“联动”变化，传参之前需要先复制一份（浅拷贝）
            context.emit("savehandle",Object.assign({},subject))
        }

        return {
            subject,
            add,
            reset,
            save
        }
    },
    template:`
        <div class="card">
            <div class="my-form">
                <input v-model="subject.title" placeholder="请输入标题" />
                <textarea v-model="subject.content" rows="16" />
            </div>
            <a v-if="!subject.id" href="#" class="btn" @click="add">新增</a>
            <a v-else href="#" class="btn" @click="save">保存</a>
            <a href="#" class="btn btn-secondary" @click="reset">重置</a>
        </div>
    `
}