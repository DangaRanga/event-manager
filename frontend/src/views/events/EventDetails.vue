<template>
  <div class="grid grid-cols-2 my-5 gap-10 px-5">
    <article v-if="isdata" class="my-auto">
      <div>
        <img
          :src="event_data.photo"
          id="event-image"
          alt="event-image"
          class="rounded-lg"
        />
      </div>
    </article>
    <section id="event-content">
      <h1 class="text-4xl font-bold my-3">
        <a :href="event_data.website_url">{{ event_data.title }}</a>
      </h1>
      <p class="my-4 w-4/5">
        {{ event_data.description }}
      </p>

      <h4 class="text-gray-600 my-2" v-if="isdata">
        <div>
          <svg
            class="h-8 w-8 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>
            {{ event_data.venue }}
          </span>
        </div>
      </h4>

      <h5 class="text-gray-600 my-2" v-if="isdata">
        <div>
          <svg
            class="h-8 w-8 text-red-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <rect x="4" y="5" width="16" height="16" rx="2" />
            <line x1="16" y1="3" x2="16" y2="7" />
            <line x1="8" y1="3" x2="8" y2="7" />
            <line x1="4" y1="11" x2="20" y2="11" />
            <rect x="8" y="15" width="2" height="2" />
          </svg>
          <span
            >Date: <span>{{ event_data.start_date }}</span> -<span>{{
              event_data.end_date
            }}</span></span
          >
        </div>
      </h5>

      <h5 class="text-gray-600 my-2" v-if="isdata">
        <div>
          <svg
            class="h-8 w-8 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span
            >Time: <span>{{ event_data.start_time }}</span> -
            <span>{{ event_data.end_time }}</span></span
          >
        </div>
      </h5>
    </section>
  </div>
</template>

<script setup>
//import { ref } from 'vue';
import { ref } from "@vue/reactivity";
import router from "../../router";

var eid = ref(router.currentRoute.value.params.eventid);
var event_data = ref("");
var isdata = ref(false);

eventDetails();

function eventDetails() {
  fetch("http://localhost:8080/api/events/" + eid.value.toString(), {
    method: "GET",
    headers: {
      // 'X-CSRFToken': token
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
    .then(function (jsonResponse) {
      event_data.value = jsonResponse;

      isdata.value = true;
    })
    .catch(function (error) {
      console.log(error);
    });
}
</script>
<style scoped>
h4 div,
h5 div {
  display: flex;
  flex-direction: row;
}

h4 div span,
h5 div span {
  padding-top: 5px;
  padding-left: 10px;
}

#event-content {
  display: flex;
  flex-direction: column;
}

button {
  margin-top: 10%;
}

a:hover {
  color: #d1410c;
}
</style>
