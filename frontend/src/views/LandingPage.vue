<template>
  <div class="home">
    <section id="banner" class="text-white p-5">
      <h1 class="text-4xl font-bold w-1/3">
        Live out Unparalleled Experiences
      </h1>
      <p class="w-1/2 font-regular my-5">
        Bacon ipsum dolor amet chuck spare ribs brisket landjaeger drumstick
        beef, kielbasa ball tip venison burgdoggen swine bacon tail capicola
        ribeye.
      </p>
      <router-link to="/events">
        <button
          class="px-7 py-3 bg-primary text-white rounded text-sm font-medium hover:bg-primaryHover transition ease-in-out delay-150"
        >
          Find your next event!
        </button>
      </router-link>
    </section>

    <section id="events" class="p-5 my-3">
      <h1 class="text-3xl font-bold">Upcoming Events</h1>
      <div class="grid grid-cols-4 grid-rows-2 my-5">
        <event-card
          :imageUrl="'../assets/mic.jpg'"
          :title="'Open Mic Event at Raggamuffin'"
          :date="'6/29/2022'"
          :venue="'Raggamuffin Cafe'"
        ></event-card>
        <event-card
          :imageUrl="'../assets/mic.jpg'"
          :title="'Open Mic Event at Raggamuffin'"
          :date="'6/29/2022'"
          :venue="'Raggamuffin Cafe'"
        ></event-card>
        <event-card
          :imageUrl="'../assets/mic.jpg'"
          :title="'Open Mic Event at Raggamuffin'"
          :date="'6/29/2022'"
          :venue="'Raggamuffin Cafe'"
        ></event-card>
        <event-card
          :imageUrl="'../assets/mic.jpg'"
          :title="'Open Mic Event at Raggamuffin'"
          :date="'6/29/2022'"
          :venue="'Raggamuffin Cafe'"
        ></event-card>
        <event-card
          :imageUrl="'../assets/mic.jpg'"
          :title="'Open Mic Event at Raggamuffin'"
          :date="'6/29/2022'"
          :venue="'Raggamuffin Cafe'"
        ></event-card>
      </div>
    </section>
  </div>
</template>

<script>
import EventCard from "@/components/events/EventCard.vue";

export default {
  name: "LandingPage",
  components: {
    "event-card": EventCard,
  },
};
</script>
<style scoped>
#banner {
  background: url("../assets/bannerbg.jpg");
  background-size: cover;
  background-position: center;
  height: 85vh;
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
}
</style>
