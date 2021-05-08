<template>
  <div>
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <img src="../assets/logorent.png" alt="">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <router-link class="nav-link" to="/" >
                            <a class="nav-link">Home</a>
                        </router-link>
                        <router-link class="nav-link" to="/about" >
                            <a class="nav-link">About</a>
                        </router-link>
                        <router-link class="nav-link" to="/contact" >
                            <a class="nav-link">Contact</a>
                        </router-link>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto"></ul>
                            <ul class="navbar-nav ml-auto">
                            <template v-if="user.loggedIn">
                                <div class="nav-item">
                                <a class="nav-link"> Welcome {{user.data.displayName}} </a>
                                </div>
                                <li class="nav-item">
                                <a class="nav-link" @click.prevent="signOut">Sign out</a>
                                </li>
                            </template>
                            <template v-else>
                                <li class="nav-item">
                                <router-link to="login" class="nav-link">Login</router-link>
                                </li>
                                <li class="nav-item">
                                <router-link to="register" class="nav-link">Register</router-link>
                                </li>
                            </template>
                            </ul>
                        </div>
                    </ul>
                </div>
            </nav>
        </header>
  </div>
</template>

<script>

import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home"
          });
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    #navbarSupportedContent ul{
        text-align: right;
    }

    header{
        margin:0;
    }
    a{
        cursor:pointer;
        color:#000;
    }
    img{
        width:150px;
        height:100px;
    }
</style>


