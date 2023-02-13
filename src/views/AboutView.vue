<template>
<div class="about">
<el-menu :default-openeds="['basic']" router>
  <el-submenu v-for="(item,index) in $router.options.router" :key="index" :index="item.index">
  </el-submenu>
</el-menu>
<h1>This is an about page</h1>
</div>
</template>
