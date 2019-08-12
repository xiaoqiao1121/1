<template>
    <header class="main-header">
        <h1>待办事项小工具</h1>
    </header>
</template>

<script>
    export default {
        name: "cHeader"    // 不能跟vue或html内置关键字冲突
    }
</script>

<style scoped>
.main-header{
    text-align: center;
}
h1{
    font-size:30px;
    color: aqua;
    opacity: 0.8;
    font-weight: 100;
    margin: 20px;
}
    /*不用担心h1样式会影响到其他组件。 关键字scoped控制。
    webpack打包时会自动给div编号、css选择器也会拼id选择器
    <div class="main-header"></div> 转化 <div id="23432"></div>
    h1{font-size:30px} 转化 #23432  h1{ }
    */
</style>