<template>
    <div class="row justify-content-center">
        <h1>Lista de Tarefas</h1>
    </div>

    <div> 
        {{data}}
        <tr v-for= "(data, index) in data.data" :key="index">
            <td>{{data.id}}</td>
            <td>{{data.title}}</td>
            <td>{{data.description}}</td>
        </tr>
    </div>



</template>

<script>
import Task from './../../services/tasks'

export default{
    data() {
        return{
            data: [],
        };
    },

    mounted(){
         this.listar()
    },

    methods:{
        listar(){
            Task.listar()
            .then((response) => {
                // this.data = JSON.stringify(response.data)
                console.log(response.data.data)
                this.data = response.data.data
                console.log(this.data)
            })
            .catch(error => console.log(error))
        }       
    }
}
</script>