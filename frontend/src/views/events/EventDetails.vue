<template>
  <div class="grid grid-cols-2 my-5">
    <article>
      <img src="" id="event-image" alt="event-image" />
    </article>
    <section id="event-content">
      <h1 class="text-4xl font-bold my-3">Open Mic Event</h1>
      <p class="my-4 w-4/5">
        Bacon ipsum dolor amet chuck spare ribs brisket landjaeger drumstick
        beef, kielbasa ball tip venison burgdoggen swine bacon tail capicola
        ribeye.
      </p>
      <h4 class="text-gray-600 my-2">Somewhere Over the rainbow</h4>
      <h5 class="text-primary my-2">Event Start:</h5>
      <h5 class="text-primary my-2">Event End:</h5>
      <button
        class="px-7 py-3 bg-primary text-white rounded text-sm font-medium hover:bg-primaryHover transition ease-in-out delay-150"
      >
        Register
      </button>
    </section>
  </div>
</template>
<script>
export default {
  name: "EventDetails",
};
</script>
