<template>
    <div class="row justify-content-center">
        <h1>List Userss</h1>
    </div>
    <div> a{{posts}} </div>

    <div v-for="pots in post"></div>

</template>

<script>

import api from "./api"
import { onMounted, ref, defineComponent} from "vue";
import axios from "axios";

export default{
    data() {
        return{
            posts: [],
        };
    },


    mounted: function(){
            api
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(response =>  console.log(response));
    }

}
</script>