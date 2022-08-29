import { api } from './api'

export default{

    listar:() => {
        return api.get('tasks')
    },

    addNewTask:(data) => {
        return api.post('tasks', data);
    },

    updateTask:(data) => {
        return api.put('tasks', data);
    },

    deleteTask:(data) => {
        return api.delete('tasks', {data:data})
    }

}
