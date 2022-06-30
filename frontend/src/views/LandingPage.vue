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
        <div v-for="event in events" :key="event.eventid">
          <EventCard
            :imageUrl="event.photo"
            :title="event.title"
            :date="event.start_date"
            :venue="event.venue"
          ></EventCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import EventCard from "@/components/events/EventCard.vue";

import { ref } from "vue";

var events = ref([]);

getAllEvents();

function getAllEvents() {
  fetch("http://localhost:8080/api/events", {
    method: "GET",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
    credentials: "same-origin",
  })
    .then(function (response) {
      if (!response.ok) {
        alert("HTTP status " + response.status);
        return;
      }
      return response.json();
    })
    .catch(function (error) {
      console.log(error);
    });
}
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
