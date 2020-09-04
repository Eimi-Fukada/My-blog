<template>
  <div id="app">
    <!-- <add-blog></add-blog> -->
    <!-- <show-blogs></show-blogs> -->
    <blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Addblog from './components/Addblog'
import Showblogs from './components/Showblogs'
import Blogheader from './components/Blogheader'

export default {
  name: 'app',
  components:{
    "add-blog":Addblog,
    "show-blogs":Showblogs,
    "blog-header":Blogheader
  }
}
</script>

<style>

</style>
