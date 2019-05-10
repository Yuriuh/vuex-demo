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
import { mapState } from "vuex"
import { mapMutations } from "vuex"
import { mapActions } from "vuex"

export default {
  computed: {
    ...mapState([
      'count'
    ])
  },
  methods: {
    ...mapMutations([
      'increase'
    ]),
    ...mapActions([
      'decreaseAsync'
    ])
  }
}
</script>

<style lang="scss" scoped>

</style>
