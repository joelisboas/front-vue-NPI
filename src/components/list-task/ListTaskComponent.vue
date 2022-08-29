<template>
    <div class="row justify-content-center">
        <h1>Lista de Tarefas</h1>
    </div>

    <div class="">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Título</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Prazo de entrega</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for= "data of data" v-bind:key="data.id">
                    <td scope="row">{{data.id}}</td>
                    <td>plano de estagio{{data.title}}</td>
                    <td>entregar plano de estagio</td>
                    <td>2022-08-30</td>
                    <td><button @click="editar(data.id)" type="button" class="btn btn-outline-primary">Editar</button></td>
                    <td><button @click="deletar(data.id)" type="button" class="btn btn-outline-danger">Deletar</button></td>
                </tr>
            </tbody>
        </table>
        <!-- <button v-b-modal.modal-editar >CLIC</button>
        <modal id="modal-editar" title="BootstrapVue">MODAL</modal> -->
    </div>



</template>

<script>

import Swal from 'sweetalert2';
import Task from './../../services/tasks'

export default{
    data() {
        
        
        return{
            
            
            data: {
                "data": {
                    "title": "",
                    "description": "",
                    "deadline": "",
                }
            }
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
                // console.log(response.data.data)
                this.data = response.data.data
                // console.log(this.data)
            })
            .catch(error => console.log(error))
        },
        
        editar(id){
            Task.updateTask(id)
            .then(response => {
                this.data= data
                console.log(response.data.id)
            })

        },

        deletar(id){

            Swal.fire({
                title: 'Você tem certeza?',
                text: "Deseja deletar essa tarefa?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim, delete!'
            })
            .then((result) => {
                if (result.isConfirmed) {

                Task.deleteTask(id)
                .then(response => {
                    this.listar()
                })
                    Swal.fire(
                    'Deletado!',
                    'A tarefa foi deletada.',
                    'success'
                    )
                }
            })

        }
    }
}

// Vue.component('modal', {
//     template: '#modal-template'
// })

// new Vue({
//     el: '#app',
//     data: {
//         showModal: false
//     }
// })

</script>