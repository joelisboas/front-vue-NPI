import { api } from './api'

export default{

    listar:() => {
        return api.get('tasks')
    },

    addNewTask:(task) => {
        return api.post('tasks', task);
    },

    updateTask:(id, item) => {
        return api.put('tasks/'+id, item);
    },

    deleteTask:(id) => {
        return api.delete('tasks/'+id)
    }


}