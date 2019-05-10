<template>
  <div class="home">
    <p>no apis</p>
    <count-one></count-one>
  </div>
</template>

<script>
// @ is an alias to /src
import CountOne from '../components/CountOne'
export default {
  name: 'home',
  components: {
    CountOne
  }
}
</script>
