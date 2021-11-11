import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from "./AxiosService"

class PostService {
  async getAll(query = '') {
    try {
      const res = await api.get('/api/blogs' + query)
      AppState.posts = res.data
      logger.log(res.data)
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }
}

export const postService = new PostService()