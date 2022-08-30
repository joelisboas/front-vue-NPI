import { api } from './api'

export default{

    listOne:(id) => {
        return api.get('tasks/'+id)
    },

    listar:() => {
        return api.get('tasks')
    },

    addNewTask:(data) => {
        return api.post('tasks', data);
    },

    updateTask:(item) => {
        return api.put('tasks/', item);
    },

    deleteTask:(id) => {
        return api.delete('tasks/'+id)
    }


}