<template>
    <div class="container features">
        <br>
        <h1>Rent a Car </h1>
        <div class="row" id="home">
          <div class="divout">
            <img class="imgaphotne" src="../assets/carr.jpg" alt="">
          </div>
          <b-container class="bv-example-row" >
                <b-row>
                    <b-col v-for="product in productfields" v-bind:key="product._id">
                        <img src="../assets/mercedes2.jpg" class="imagediv"/>
                        <br><br>
                        <b-row>
                            <b-col>
                                <h5>{{ product.name }}</h5>
                                <p>{{product.price}} Euro / per D</p>
                            </b-col>
                            <b-col>
                                <b-button class="btn" id="buttonres" href="#/reservations" squared><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-check" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                                    </svg>
                                    Rezervo
                                </b-button>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <br>
    </div>
</template>

<style scoped>
    .imagediv{
        width:auto;
        height:200px;
    }

    #buttonres{
        border:1px solid #2e3192;
        background-color: white;
        color:#2e3192;
    }

    #buttonres:hover{
        background-color: #2e3192;
        color:white;
    }

    #home{
        margin-top:5%;
        margin-bottom:5%;
    }
    .imgaphotne{
      width:auto;
      height:40vh
    }

    .divout{
      text-align: center;
      padding-bottom: 5%;
    }
</style>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'CreateProducts',
  data () {
    return {
      productfields:{},
      products: {}
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
      evt.preventDefault()
      axios.post(`http://localhost:4000/products`, this.products)
      .then(function (response) {
        console.log(response);
        })
      
    }
  }
}
</script>