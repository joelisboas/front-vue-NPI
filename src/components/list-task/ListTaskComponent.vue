<template>
    <div class="row justify-content-center">
        <h1>Lista de Tarefas</h1>
    </div>

        {{data}}

    <div class="">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#id</th>
                    <th scope="col">Título</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Prazo de entrega</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for= "(data, index) in data" :key="index">
                    <th scope="row">1</th>
                    <td>plano de estagio</td>
                    <td>entregar plano de estagio</td>
                    <td>2022-08-30</td>
                    <td><button @click="editar(data)" type="button" class="btn btn-outline-primary">Editar</button></td>
                    <td><button @click="deletar(data)" type="button" class="btn btn-outline-danger">Deletar</button></td>
                </tr>
            </tbody>
        </table>
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
        },
        
        editar(data){
            this.data=data
        },

        deletar(data){
            Task.deleteTask(data).then(response => {
                this.listar();
            })
        }
    }
}
</script>