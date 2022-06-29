<template>
  <article class="my-4 cursor-pointer">
    <div id="image" class="mb-2">
      <img src="" alt="event image" />
    </div>
    <div id="content">
      <h2 class="text-lg w-2/3 font-bold">{{ title }}</h2>
      <h3 class="text-gray-700">{{ venue }}</h3>
      <p class="text-primary text-sm">{{ date }}</p>
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
