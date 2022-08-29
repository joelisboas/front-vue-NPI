import { api } from './api'

export default{

    listar:() => {
        return api.get('tasks')
    },

    addNewTask:(data) => {
        return api.post('tasks', data);
    }

}
