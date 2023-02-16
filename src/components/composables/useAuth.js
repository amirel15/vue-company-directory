import { ref } from 'vue'

const dbUsers = [
    {
        username: 'admin',
        password: 'admin',
        name: 'Ad Min',
        role: 'administrator',
        email: 'admin@company4reals.com',
    },
    {
        username: 'user',
        password: 'user',
        name: 'User One',
        role: 'user',
        email: 'user1@company4reals.com'
    }
]

const isAuthenicated = ref(false)
const user = ref({})

export const useAuth = () => {
    const login = (username, password) => {
        const dbUser = dbUsers.find((u) => u.username === username && u.password === password)
        if (dbUser) {
            const { name, role, email, username } = dbUser
            isAuthenicated.value = true
            user.value = { name, role, email, username }
            return true
        }
        return false
    }

    const logout = () => {
        isAuthenicated.value = false
        user.value = {}
    }
    return {isAuthenicated, user, login, logout}
}