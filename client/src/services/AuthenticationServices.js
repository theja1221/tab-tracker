import Api from '@/services/Api'

export default{
  register (credentials) {
    console.log(Api().post('register', credentials))
    return Api().post('register', credentials)
  }
}
