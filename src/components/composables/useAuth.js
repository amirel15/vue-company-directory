import { ref } from 'vue'

const DBUSers = [
    {
        username: 'admin',
        password: 'admin',
        name: 'Ad Min',
        role: 'administrator',
        email: 'admin@company4reals.com',
    },
    {
        username: 'user1',
        password: 'user1',
        name: 'User One',
        role: 'user',
        email: 'user1@company4reals.com'
    }
]

const isAuthenicated = ref(false)
const user = ref({})

export const useAuth = () => {
    const login = (username, password) => {
        const DBUser = DBUser.find((u) => u.username === username && u.password === password)
        if (DBUser) {
            const { name, role, email, username } = DBUser
            isAuthenicated.value = true
            user.value = { name, role, email, username }
        }
    }
    return {isAuthenicated, user, login}
}