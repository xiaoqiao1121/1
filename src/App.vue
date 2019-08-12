<template>
  <div id="app">
<!--   单文件组件，业务逻辑入口，代表网页body
 适合放全局css样式
 cdn方式引用js css（工程化开发后js往往在main.js引用。这个文件下引用的情况不多cdn）
 -->
<!-- 分析 -->
<!-- 组件关系： header,todo，组件todo里包含子组件item-->
<!-- 开发流程： 开发.vue单文件组件，引用（.vue只是把三种开发语言放到一个文件中编辑，.vue html js相互独立 不能直接调用，应该先在js注册、导出，最后webpack会把局部注册参数合并到vue根实例化语句中.）
，html应用组件标签。-->

<!--   3.渲染子组件  可以写驼峰风格的标识符，打包工具会自动识别并转化为 kebab-base风格(中划线) -->
    <Header></Header>
    <Todo></Todo>
  </div>
</template>

<script>
  // 1引用
  // 本质require（''）， import ... from...,由webpack提供。注意跟python import类似但少许不同.  import varible from'.vue"
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/header.vue'  //最终会转化为require()
import Item from './components/item.vue'
import Todo from './components/todo.vue'

export default {
  name: 'app',
  components: {
    // 2准备好局部注册的参数，最终打包会作为vue跟实例参数传入
    //es6  语法演化过程
    // 'Header':{name:'',template:'<h1></h1>'};  原始
    // 'Header':Header   组件内容写到单文件组件并被导入，变量名Header
    Header,  // babel会把ese6语法转化上面的语法
    Todo,
  }
}
</script>

<style>
  /*App跟组件，适合写全局样式，子组件可以继承。因此没有scope关键字*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;  /*注意项目里css的值不要加引号，否则编译后值为空，终端不会报错*/
}
</style>
