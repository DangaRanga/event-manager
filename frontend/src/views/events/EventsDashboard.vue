<template>
  <div class="p-5">
    <h1 class="text-4xl font-bold mb-5">Your Events</h1>
    <article id="controls" class="mb-5">
      <button
        class="px-7 py-3 bg-primary text-white rounded text-sm font-medium hover:bg-primaryHover transition ease-in-out delay-150"
      >
        Create Event
      </button>
    </article>
    <EventTable />
  </div>
</template>

<script setup>
import EventTable from "@/components/events/EventTable";

</script>

<style scoped></style>
