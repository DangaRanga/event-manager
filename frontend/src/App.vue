<template>
  <section id="upcomingEvents" class="flex justify-around">
    <event-card
      :title="'Test Event'"
      :date="'6/29/2022'"
      :venue="'Somewhere over the rainbow'"
    />
    <event-card
      :title="'Test Event'"
      :date="'6/29/2022'"
      :venue="'Somewhere over the rainbow'"
    />
    <event-card
      :title="'Test Event'"
      :date="'6/29/2022'"
      :venue="'Somewhere over the rainbow'"
    />
  </section>
</template>

<script>
import EventCard from "./components/events/EventCard.vue";
export default {
  name: "App",
  components: {
    "event-card": EventCard,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700&display=swap");
#app {
  font-family: Poppins;
}
</style>
