<template>
  <div id="app">
    <transition>
        <keep-alive :include="keepAlive" >  
            <router-view/>
        </keep-alive>
    </transition>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import wangEditorComponent from './components/wangEditorComponent.vue'

export default {
  name: 'app',
  components: {
    // wangEditorComponent
  },
  computed: {
      keepAlive () {
          return this.$store.getters.keepAlive
      },
  },
  created(){
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
