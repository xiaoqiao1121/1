<template>
    <div id="todo-form">
        <input type="text" class="addTodo" placeholder="侵害输入待办事项" @keyup.enter="addTodo2" v-model="inputTOdo">


        <button v-on:click="addTodo">添加</button>

        <ul>
            <Item
                    v-for="todo in todos"
                    :key="todo.id"
                    v-bind:todo="todo"
                    @del="deleteTodo">
            </Item>
        </ul>
    </div>
</template>


<script>
    export default {
        name: "todo",
        data:function () {
            return{
                todos:[
                    {
                        content:'todol',
                        'isComplete':false
                    },{
                        content:'todo1',
                        'isComplete':false
                    },
                ],
                inputTodo:''
            }
        },
        components:{
            Item
        },
        methods:{
            addTodo(){
                this.todos.push({
                    'id':id++,
                    'content':this.inputTodo,
                    'isComplete':false
                });
                this.inputTodo='';
            },
            deleteTodo(id){
                this.todos.pop(id)
            }
        }
    }
</script>

<style scoped>

</style>