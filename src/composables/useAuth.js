import { ref } from 'vue'
import router from '@/router'

const dbUsers = [
    {
        username: 'admin',
        password: 'admin',
        name: 'AdMin',
        role: 'administrator',
        email: 'admin@company4reals.com',
    },
    {
        username: 'user',
        password: 'user',
        name: 'UserOne',
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
        router.push({ name: 'Home' })
    }
    return {isAuthenicated, user, login, logout}
}