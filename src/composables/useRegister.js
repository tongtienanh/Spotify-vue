import { projectAuth } from '../configs/firebase.js'
async function register(email, password) {
    try {
        const res = await projectAuth.createUserWithEmailAndPassword(email, password)
        return res

    } catch (err) {
        console.log(err)
    }
}
export function useRegister() {
    return { register }
}