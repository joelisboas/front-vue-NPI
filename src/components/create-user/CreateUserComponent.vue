<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Adicionar Usuário</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="">
                    <div class="form-group">
                        <label for="" class="font-weight-bold">Nome</label>
                        <input type="text" class="form-control" placeholder="Digite seu nome">
                    </div>
                    <div class="form-group">
                        <label for="" class="font-weight-bold">Idade</label>
                        <input type="number" class="form-control" placeholder="Digite sua idade">
                    </div>
                    <div class="form-group">
                        <label for="" class="font-weight-bold">Semestre</label>
                        <input type="number" class="form-control" placeholder="Digite o semestre que você está">
                    </div>
                    <div class="form-group">
                        <label for="" class="font-weight-bold">Local de Estágio</label>
                        <input type="number" class="form-control" placeholder="Digite seu local de estágio">
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

export default{
    components:{
        name: 'CreateUserComponent',
    },
    data() {
        return{
        }
    }
}
</script>