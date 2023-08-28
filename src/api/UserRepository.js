import axios from 'axios'

const baseDomain = 'http://127.0.0.1:8000/'
const baseUrl = `${baseDomain}/api`

const apiClient = axios.create({
  baseURL: baseUrl,
  header: {'Authorization': 'Bearer Token'}
})

export default {

  /**
   * This function is used to get all users
   */

  async getAllUsers() {
    try {
      const response = await apiClient.get('/users')
      return response.data
    } catch (error) {
      throw error
    }
  },

  /**
   * This function is used to get user by id
   * @param {string} id
   */

  async getUserById(id) {
    try {
      const response = await apiClient.get(`/users/${id}`)
      return response.data
    } catch (error) {
      throw error
    }
  },

  /**
   * This function is used to get data create user
   */

  async getUserCreate() {
    try {
      const response = await apiClient.get('/users/create')
      return response.data
    } catch (error) {
      throw error
    }
  },

    /**
   * This function is used to get save data user
   */

  async createPost(payload) {
    try {
      const response = await apiClient.post(`/users`, payload)
      return response.data
    } catch (error) {
      throw error
    }
  }
}