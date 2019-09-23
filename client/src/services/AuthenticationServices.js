import Api from '@/services/Api'

console.log(Api)

export default{
  register (credentials) {
    return Api().post('register', credentials)
  }
}
