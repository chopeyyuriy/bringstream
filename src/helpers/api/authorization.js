import { axiosInstance } from './index'

export const authorization = {
  logIn: async (data) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }

    const formData = new FormData()
    formData.append('jsonData', JSON.stringify(data))

    return await axiosInstance.post('?action=Login', formData, config).then(response => {
      return response
    }).catch(error => ({ error }))
  },
  
  registerUser: async (data) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }

    const formData = new FormData()
    formData.append('jsonData', JSON.stringify(data))

    return await axiosInstance.post('?action=Register', formData, config).then(response => {
      return response
    }).catch(error => ({ error }))
  },
  
  forgotPassword: async (data) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }

    const formData = new FormData()
    formData.append('jsonData', JSON.stringify(data))

    return await axiosInstance.post('?action=ForgotPassword', formData, config).then(response => {
      return response
    }).catch(error => ({ error }))
  },

  newPassword: async (data) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }

    const formData = new FormData()
    formData.append('jsonData', JSON.stringify(data))

    return await axiosInstance.post('?action=NewPassword', formData, config).then(response => {
      return response
    }).catch(error => ({ error }))
  },
}