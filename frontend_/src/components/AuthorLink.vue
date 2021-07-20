

<template>
<!-- This component won't use GraphQL directly. -->
<!-- instead, other components will pass in the autor information using the `author` prop -->
  <router-link
      :to="`/author/${author.user.username}`"
  >{{ displayName }}</router-link>
</template>

<script>


export default {
  name: 'AuthorLink',
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
  computed: {
    displayName () {
      return (
        this.author.user.firstName &&
        this.author.user.lastName &&
        `${this.author.user.firstName} ${this.author.user.lastName}`
      ) || `${this.author.user.username}`
    },
  },
}
</script>