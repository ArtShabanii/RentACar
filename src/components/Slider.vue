<template>
    <div>
        <transition-group name='fade' tag='div'>
        <div v-for="i in [currentIndex]" :key='i'>
            <img :src="currentImg" />
        </div>
        </transition-group>
        <a class="prev" @click="prev" href='#'>&#10094;</a>
        <a class="next" @click="next" href='#'>&#10095;</a>
    </div>
</template>

<script>
export default {
  name: 'Slider',
  data() {
    return {
      images: [
        'https://i.ibb.co/MZySG6M/png-01.png',
        'https://i.ibb.co/XtMmFq9/png-02.png',
        'https://i.ibb.co/fCz7yf5/png-03.png'
        ],
      timer: null,
      currentIndex: 0,
    }
  },
  
    mounted: function() {
      this.startSlide();
    },
  
    methods: {
      startSlide: function() {
        this.timer = setInterval(this.next, 20000);
      },
  
  
      next: function() {
          if(this.currentIndex == 2){
              this.currentIndex = 0;
          }else{
        this.currentIndex += 1;
          }
      },
      prev: function() {
          if(this.currentIndex==0){
              this.currentIndex = 2;
          }else{
            this.currentIndex -= 1;
          }
      }
    },
  
    computed: {
      currentImg: function() {
        return this.images[this.currentIndex];
      }
    }
  
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}
.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}
img {
height:auto;
width:100%;
  }
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  color: white;
  background-color: rgba(0,0,0,0.9);
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}
/* Position the "next button" to the right */
.next {
  right: 5%;
}
.prev {
  left: 5%;
}
/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(46,49,146,255);
  color:white;
}
</style>