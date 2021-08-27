const register = async (registrationForm) => this.$http.post('/api/auth/register', registrationForm)

const login = async (loginForm) => this.$http.post('/api/auth/login', loginForm)

export default {
  register,
  login
}
