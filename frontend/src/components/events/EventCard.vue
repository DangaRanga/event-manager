<template>
  <article>
    <div id="image">
      <img :src="''" alt="event image" />
    </div>
    <div id="content">
      <h2 class="font-2xl">{{ title }}</h2>
      <p>{{ date }}</p>
      <h3>{{ venue }}</h3>
    </div>
  </article>
</template>

<script>
export default {
  name: "event",
  props: {
    imageUrl: String,
    title: String,
    date: String,
    venue: String,
  },
};
</script>

<style scoped></style>
