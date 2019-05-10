<template>
  <div class="count">
    <p>{{ count }}</p>
    <p>
      <button @click="increase">+</button>
      <button @click="decreaseAsync">-</button>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    increase () {
      this.$store.commit('increase')
    },
    decreaseAsync () {
      this.$store.dispatch('decreaseAsync')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
