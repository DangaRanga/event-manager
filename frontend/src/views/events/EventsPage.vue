<template>
  <div class="p-5">
    <header>
      <h1 class="text-3xl font-bold">Events</h1>
      <article id="search"></article>
    </header>
    <section id="events" class="grid grid-cols-4">
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
    </section>
  </div>
</template>

<script>
import EventCard from "@/components/events/EventCard.vue";

export default {
  name: "EventsPage",
  components: {
    "event-card": EventCard,
  },
};
</script>
