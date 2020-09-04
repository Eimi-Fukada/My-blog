<template>
    <div id="show-blogs" v-theme:bac="'wide'">
        <h1>博客总览</h1>
        <input type="text" v-model="search" placeholder="搜索">
        <div class="single-blog" v-for="blog in filtersearch">
            <router-link :to="'/blog/'+blog.id">
                <h2 v-raindow>{{blog.title | to-uppercase}}</h2>
            </router-link>
            <article>{{blog.body | snnipet}}</article>
        </div>
    </div>
</template>

<script>


export default {
    name: 'show-blogs',
    data(){
        return{
            blogs:[],
            search:""
        }
    },
    created(){
        this.$http.get("./../static/posts.json").then(function(data){
            this.blogs = data.body.slice(0,10);
        })
    },
    computed:{
        filtersearch:function(){
            return this.blogs.filter((blog)=>{
                return blog.title.match(this.search);
            })
        }
    },
    filters:{
        //第一种写法
        // "to-uppercase":function(value){
        //     return value.toUpperCase();
        // }
        //第二种写法，ES6
        toUppercase(value){
            return value.toUpperCase();
        }
    },
    directives:{
        'raindow':{
            bind(el,binding,vnode){
                el.style.color= "#"+Math.random().toString(16).slice(2,8);
            }
        }
    }
}
</script>

<style>
    #show-blogs{
        max-width: 800px;
        margin:  0 auto;
    }
    .single-blog{
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: #eee;
        border: 1px dotted #aaa;
    }
    #show-blogs {
        color: #444;
        text-decoration: none;
    }
    input[type="text"]{
        padding: 8px;
        width: 100%;
        box-sizing: border-box;
    }
</style>