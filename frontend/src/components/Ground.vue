<template>
  <div class="ground">I am Ground</div>
  <Header/>
  <div>Content</div>
  <Footer/>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
export default{
  components:{Header, Footer}
}
</script>