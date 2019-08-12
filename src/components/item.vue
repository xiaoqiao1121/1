<template>
    <div id="item">
        <li class="todo-item"
            @click="switchComplete"
            :class="{completed:todo.isComplete}"
        >
            <span style="display: none">{{todo.id}}</span>
            <span>{{todo.content}}</span>
            <span @click="deleteTodo">X</span>
        </li>
    </div>
</template>

<script>
    export default {
        name: "item",
        // props:[todo]
        // props:{
        //      todo:Object,
        // }
        props:{
            todo:{
                type:Object,
                required:true
            }
        }
    }
    method:{
        swithchComplatr(){
        //     // this仍然代表打包后当前组件的vue实例  console.this
        //     if (this.todo.isConplete == false){
        //         this.todo.isConplete = true
        //         // todo。isComplete改变后，
        //     }
        //     else if (this.todo.isComplete == true){
        //         this.todo.isComplete = false
        //     }
        // }
            // 感叹号表示取反  ==！=
            this.todo
   // },
    deleteTodo(){
                this.$emit(del),this.todo.id
            }
            }
        }
</script>
<style type="text/css">

</style>
webka
<style scoped>

</style>