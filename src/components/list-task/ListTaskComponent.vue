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
                <tr v-for= "task in tasks" v-bind:key="task.id">
                    <td scope="row">{{task.id}}</td>
                    <td scope="row">{{task.attributes ? task.attributes.title : 'Ainda ñ carregou'}}</td>
                    <td>{{task.description}}</td>
                    <td>{{task.deadline}}</td>
                    <td><button @click="clickEdit(task)" type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button></td>
                    <td><button @click="deletar(task.id)" type="button" class="btn btn-outline-danger">Deletar</button></td>
                </tr>
            </tbody>
        </table>        
    </div>
    

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="salvar">
                        <div class="form-group form-floating mb-3">
                            <input id="floatingInput" type="text" class="form-control" placeholder="Digite o título da tarefa" v-model="tasks.title">
                            <label for="floatingInput">Título</label>
                        </div>
                        <div class="form-group form-floating mb-3">
                            <input id="floatingInput" type="text" class="form-control" placeholder="Digite a descrição da tarefa" v-model="tasks.description">
                            <label for="floatingInput" class="font-weight-bold form-label">Descrição</label>
                        </div>
                        <div class="form-group form-floating mb-3">
                            <input id="floatingInput" type="date" class="form-control" placeholder="Digite o prazo de entrega" v-model="tasks.deadline">
                            <label for="floatingInput" class="font-weight-bold form-label">Prazo de Entrega</label>
                        </div>
                    </form>
                </div>
                <div class="modal-footer form-group">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                    <button @click="editar(tasks.attributes)" class="btn btn-primary" type="submit">Salvar</button>
                </div>
            </div>
        </div>
    </div>
    

</template>

<script >

import Swal from 'sweetalert2';
import Task from './../../services/tasks'

export default{
    data() {

        return{
            tasks: {
                "attributes": 
                
                {
                    "title": "",
                    "description": "",
                    "deadline": "",
                }
            },
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
                this.tasks = response.data.data
                console.log(this.tasks)
            })
            .catch(error => console.log(error))
        },
        
        editar(item){
            Task.updateTask(item.id,item)
            .then(response => {
            this.item= response.item
            // console.log(response.data)
            })
        },

        clickEdit(item){
                this.tasks = item
                console.log(item.title)
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

// new Vue({ el: '#components-demo',
//   data:{
//     showModel:false    
//   }
// })

</script>