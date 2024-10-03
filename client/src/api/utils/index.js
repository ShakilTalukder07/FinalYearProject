import axios from 'axios'

// Image upload
export const imageUpload = async image => {
  const formData = new FormData()
  formData.append('image', image)
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=20f20dece569e71e271fc3b0fd05eda3`,
    formData
  )
  return data.data.display_url
}
