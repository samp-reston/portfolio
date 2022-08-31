import axios from 'axios'

export const getHeroContent: () => Promise<any> = async () => {
  const response = await axios.request({
    method: 'get',
    url: 'http://localhost:3000/api/content?where[title][equals]=Hero'
  })
  return response?.data.docs.filter((doc: any) => doc.title === 'Hero')[0].content[0].children
}

export const getAboutContent: () => Promise<any> = async () => {
  const response = await axios.request({
    method: 'get',
    url: 'http://localhost:3000/api/content?where[title][equals]=About%20Me'
  })
  return response?.data.docs.filter((doc: any) => doc.title === 'About Me')[0].content[0].children
}

export const getHeroImage: () => Promise<any> = async () => {
  const response = await axios.request({
    method: 'get',
    url: 'http://localhost:3000/api/content?where[title][equals]=Hero'
  })
  return response?.data.docs.filter((doc: any) => doc.title === 'Hero')[0].image.url
}
