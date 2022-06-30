<template>
  <div class="p-5">
    <header>
      <h1 class="text-3xl font-bold">Events</h1>
      <article id="search"></article>
    </header>
    <section id="events" class="grid grid-cols-4">
      <div v-for="event in events" :key="event.eventid">
        <EventCard
          :imageUrl="event.photo"
          :title="event.title"
          :date="event.start_date"
          :venue="event.venue"
          :eventid="event.eventid"
        ></EventCard>
      </div>
    </section>
  </div>
</template>

<script setup>
import { dangerNotification } from "@/controllers/toasts/toasts";
import EventCard from "@/components/events/EventCard.vue";
import { ref } from "vue";

var events = ref([]);

getAllEvents();

function getAllEvents() {
  fetch("http://localhost:8080/api/events", {
    method: "GET",
    headers: {
      // 'X-CSRFToken': token
      Authorization: localStorage.getItem("token"),
    },
    credentials: "same-origin",
  })
    .then(function (response) {
      if (!response.ok) {
        dangerNotification("HTTP status " + response.status);
        return;
      }
      return response.json();
    })
    .then(function (jsonResponse) {
      events.value = jsonResponse;
    })
    .catch(function (error) {
      console.log(error);
    });
}
</script>
