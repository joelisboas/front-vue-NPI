<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Adicionar Tarefa</h3>
            </div>
            <div class="card-body">
                <form @submit.prevent="salvar">
                    <div class="form-group">
                        <label for="" class="font-weight-bold">Título</label>
                        <input type="text" class="form-control" placeholder="Digite o título da tarefa" v-model="data.data.title">
                    </div>
                    <div class="form-group">
                        <label for="" class="font-weight-bold">Descrição</label>
                        <input type="text" class="form-control" placeholder="Digite a descrição da tarefa" v-model="data.data.description">
                    </div>
                    <div class="form-group">
                        <label for="" class="font-weight-bold">Prazo de Entrega</label>
                        <input type="date" class="form-control" placeholder="Digite o prazo de entrega" v-model="data.data.deadline">
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

import Task from './../../services/tasks'

export default{
    components:{
        name: 'CreateUserComponent',
    },
    data() {
        return{
            data: {
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
            Task.addNewTask(this.data)
                .then(response => {
                    alert('Tarefa adicionada com sucesso')
                })
                .catch(error => console.log(error))
        }
    },
}
</script>