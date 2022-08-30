<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Adicionar Tarefa</h3>
            </div>
            <div class="card-body ">
                <form @submit.prevent="salvar">
                    <div class="form-group form-floating mb-3">
                        <input id="floatingInput" type="text" class="form-control" placeholder="Digite o título da tarefa" v-model="task.data.title">
                        <label for="floatingInput">Título</label>
                    </div>
                    <div class="form-group form-floating mb-3">
                        <input id="floatingInput" type="text" class="form-control" placeholder="Digite a descrição da tarefa" v-model="task.data.description">
                        <label for="floatingInput" class="font-weight-bold form-label">Descrição</label>
                    </div>
                    <div class="form-group form-floating mb-3">
                        <input id="floatingInput" type="date" class="form-control" placeholder="Digite o prazo de entrega" v-model="task.data.deadline">
                        <label for="floatingInput" class="font-weight-bold form-label">Prazo de Entrega</label>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary" type="submit">Adicionar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import Swal from 'sweetalert2';
import Task from './../../services/tasks'

export default{
    components:{
        name: 'CreateUserComponent',
    },
    data() {
        return{
            task: {
                "data": {
                    "title": "",
                    "description": "",
                    "deadline": "",
                }
            },
        }
    },

    methods: {

        salvar(){
            Task.addNewTask(this.task)
                .then(response => {
                    Swal.fire(
                        'Adicionado!',
                        'Tarefa adicionada com sucesso!',
                        'success',
            )
                })
                .catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Deu alguma coisa errada!',
                        // footer: '<a href="">Why do I have this issue?</a>'
                    })
                })

        }
    },
}
</script>