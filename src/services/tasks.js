import { api } from './api'

export default{

    listar:() => {
        return api.get('tasks')
    },

    addNewTask:(data) => {
        return api.post('tasks', data);
    },

    updateTask:(id) => {
        return api.put('tasks/'+id);
    },

    deleteTask:(id) => {
        return api.delete('tasks/'+id)
    }

}

// /${dataId}