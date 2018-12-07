<template>
  <div class="login-form">
    <h2 class="login-heading">Login</h2>
    <form action="#" @submit.prevent="login">

      <div class="form-control">
        <label for="email">Username/Email</label>
        <input type="email" name="username" id="username" class="login-input" v-model="username">
      </div>

      <div class="form-control mb-more">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" class="login-input" v-model="password">
      </div>

      <div class="form-control">
        <button type="submit" class="btn-submit">Login</button>
      </div>

    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'login',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
      login() {
        console.log('login...');
        axios.post('http://localhost:8081/api/auth',{
          username: this.username,
          password: this.password
        })
        .then((response) => {
          console.log(response);
          const token = response.data.token;
          localStorage.setItem('access-token',token);
        })
        .catch(err => console.error(err));
      }
    }
}
</script>

<style scoped>

</style>