import {defineStore} from "pinia";
import {ref,reactive,onMounted} from "vue";
import axios from "axios";


/*
const blog_data = defineStore('blogs',()=>{
    const blogs= ref()
    const url ='https://dummyjson.com/products'
    onMounted(async ()=>{
        try {
            const {data} = await axios.get(url);
            blogs.value = data
        }catch(error){
            console.log('data fetct error===>',error)
        }
    })

    return {
        blogs
    }
})

export {blog_data}*/
