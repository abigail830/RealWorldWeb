<template>
    <nav class="navbar navbar-light">
      <div class="container">
        <a class="navbar-brand" href="index.html">conduit</a>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <!-- <router-link to="/" class="nav-link">Home</router-link> -->
            <a class="nav-link active" href="">Home</a>
          </li>
          <li class="nav-item">
              <router-link to="/create-article" class="nav-link">New Post</router-link>
          </li>
          <li class="nav-item">
              <router-link to="/settings" class="nav-link">Settings</router-link>
          </li>
          
          <li v-if="!username" class="nav-item">
              <router-link to="/login" class="nav-link">Log In</router-link>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import users from '@/store/modules/users';

@Component
export default class Navbar extends Vue {
  get username() {
    return users.username;
  }
}
</script>