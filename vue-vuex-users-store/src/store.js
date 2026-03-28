import Vuex from 'vuex';

export default new Vuex.Store({
    state: {
        users: [
            {id: 1, name: 'Джейсон', age: 60, image: "https://www.m24.ru/b/d/nBkSUhL2gVUgmce-PqzZvc62gYT28pj20yPFnuWR9mOBdDebBizCnTY8qdJf6ReJ58vU9meMMok3Ee2nhSR6ISeO9G1N_wjJ=hGqZxEjZ5sjnQzLONJHowQ.jpg"},
            {id: 2, name: 'Джеки-чан', age: 80, image: "https://cdn-media.tass.ru/width/1200_4ce85301/tass/m2/uploads/i/20190426/5031661.jpg"},
            {id: 3, name: 'Кто-то', age: 45, image: "https://forum-ru-cdn.warthunder.com/original/3X/a/f/af62d76a2d92797df0711e6a94d319490936f3a1.jpeg"},
            {id: 4, name: 'Макака', age: 100000, image: "https://funpick.ru/wp-content/uploads/2018/02/prik-ava-1.jpg"},
            {id: 5, name: 'Шрек', age: 10, image: "https://noko39.ru/wp-content/uploads/2024/06/aaec9c55044a9fc0f84468a7393f4d02.jpg"},
            {id: 6, name: 'Аноним', age: 0, image: "https://png.pngtree.com/png-clipart/20190925/original/pngtree-no-avatar-vector-isolated-on-white-background-png-image_4979074.jpg"}
        ]
    },
    mutations: {
        ADD_USER(state, user){
            state.users.push(user)
        },
        DELETE_USER(state, id){
            state.users = state.users.filter(user => user.id !== id)
        }
    }, 
    actions: {
        addUser({ commit }, userData){
            commit('ADD_USER', {
                id: Date.now(),
                name: userData.name,
                age: userData.age,
                image: userData.image
            })
        },
        deleteUser({ commit }, userId){
            commit('DELETE_USER', userId)
        }
    }
})