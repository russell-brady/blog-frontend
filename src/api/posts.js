const getPosts = async (username) => this.$http.get(`/api/users/${username}/posts`)

const getPost = async (username, postId) => this.$http.get(`/api/users/${username}/posts/${postId}`)

const createPost = async (username) => this.$http.post(`/api/users/${username}/posts/`)

const updatePost = async (username, postId) => this.$http.patch(`/api/users/${username}/posts/${postId}`)

const deletePost = async (username, postId) => this.$http.delete(`/api/users/${username}/posts/${postId}`)

export default {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost
}
