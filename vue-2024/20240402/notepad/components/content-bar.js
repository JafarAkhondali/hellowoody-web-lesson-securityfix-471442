const ContentBar = {
    setup(){
        const sty1 = {
            background:"#F4F5FC",
            height:"calc(100vh - 5em - 2em)",
            padding:"1.5em 1em",
            boxSizing:"border-box",
        }

        const sty2 = {
            display:"flex",
            justifyContent:"space-bewteen",
            gap:"2em",
            height:"calc(100vh - 5em - 2em - 3em - 4em)"
        }

        const list = Vue.ref([
            {
                id:1,
                title:"one",
                content:"事项1事项1事项1",
                v:true
            },
            {
                id:2,
                title:"two",
                content:"事项2事项2事项2",
                v:true
            },
            {
                id:3,
                title:"three",
                content:"事项3事项3事项3",
                v:true
            },
            
        ])

        const selectedItem = Vue.ref({})
        
        const searchIput = e => {
            console.log(e.target.value)

            list.value = list.value.map(item => {
                if(item.title.indexOf(e.target.value) >= 0 || item.content.indexOf(e.target.value) >= 0){
                    item.v = true
                }else{
                    item.v = false
                }
                return item
            }) 
        }

        const delItem = id => {
            list.value = list.value.filter(v => v.id !== id)
        }

        const addItem = item => list.value.unshift(item)
    
        const editItem = item => {
            selectedItem.value = item
        }

        const updateItem = newItem => {
            list.value = list.value.map(item => {
                if(item.id === newItem.id){
                    return newItem
                }else{
                    return item
                }
            })
        }
        
        const delItemBatch = delarr => {
            list.value = list.value.filter(v => delarr.indexOf(v.id) < 0 ? true : false)
        }

        return {
            searchIput,
            delItem,
            list,
            sty1,
            sty2,
            addItem,
            editItem,
            selectedItem,
            updateItem,
            delItemBatch,
        }
    },
    template:`
        <div :style="sty1">
            <div style="height:60px;">
                <input 
                    class="my-search" 
                    @input="searchIput"    
                />
            </div>
            <div :style="sty2">
                <left-card 
                    :listData="list.filter(item => item.v)" 
                    @removeitem="delItem" 
                    @removebatch="delItemBatch"  
                    @edithandle="editItem" 
                />
                <right-card 
                    @insertlist="addItem"
                    @savehandle="updateItem"
                    :record="selectedItem" 
                />
            </div>
        </div>
    `,
    components:{
        LeftCard,
        RightCard,
    }
}