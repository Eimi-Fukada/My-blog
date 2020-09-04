
import Addblog from './components/Addblog.vue'
import Showblogs from './components/Showblogs.vue'
import Singleblog from './components/Singleblog.vue'

export default [
    {path:"/",component:Showblogs},
    {path:"/add",component:Addblog},
    {path:"/blog/:id",component:Singleblog}
]
