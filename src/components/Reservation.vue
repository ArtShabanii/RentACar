<template>

<div class="container features">
    <div class="row">
  <h1>Reserve a Car</h1>
</div>
<br>
  <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12">
    <form @submit="onSubmit">
      <label for="">Please select a Car: </label>
    <select name="" id="product" class="form-select">
      <option value="" disabled selected>Nothing Selected</option>
      <option v-for="product in productfields" v-bind:key="product._id" >{{product.name}} - {{product.description}}</option>
    </select>
    <br>
    <input type="text" id="email" class="form-control" v-model="user.data.email" readonly="readonly">
    <br>
    <label for="">Data e marrjes:</label>
    <input type="date" id="pickupdate" class="form-control">
    <br>
    <label for="">Tel Number:</label>
    <input type="text" id="tel" class="form-control" >
    <br>
    <input type="submit" class="btn" value="Reserve" id="sendcontact">
    </form>
    </div>
    </div>
</div>
</template>
<script>
/* eslint-disable */
import { mapGetters } from "vuex";
import axios from 'axios'
export default {
  name: 'CreateReservations',
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  data () {
    return {
      productfields:{},
      products: {},
      reservations:{}
    }
  },created () {
    axios.get(`http://localhost:4000/products`)
    .then(response => {
      this.productfields = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    onSubmit (evt) {

      evt.preventDefault();

      var bodyFormData = new FormData();
      
      bodyFormData.set("product", document.getElementById("product").value);
      bodyFormData.set("email", document.getElementById("email").value);
      bodyFormData.set("pickupdate", document.getElementById("pickupdate").value);
      bodyFormData.set("tel", document.getElementById("tel").value);
      
      axios.post(`http://localhost:4000/reservations`, bodyFormData)
      .then(response => {
        //console.log(response);
        this.$router.push({
          name: 'home',
          //params: { id: response.data._id }
        })
        })
      
    }
  }
}
</script>

<style scoped>
.container{
  padding:5%;
}

#sendcontact{
  background-color:#2e3192;
  padding-left:10%;
  padding-right:10%;
  color:white;
  transition: 0.8s ease;
}

#sendcontact:hover{
  background-color:#111;
  padding-left:10%;
  padding-right:10%;
  color:white;
}

</style>