<template>
  <div class="relative overflow-x-auto border sm:rounded-lg">
    <table
      class="text-sm w-full text-left text-gray-500 dark:text-gray-400"
      v-if="isdata"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3"></th>
          <th scope="col" class="px-6 py-3">Title</th>
          <th scope="col" class="px-6 py-3">Duration</th>
          <th scope="col" class="px-6 py-3">Venue</th>
          <th scope="col" class="px-6 py-3">Status</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody v-for="event in event_data" :key="event.eventid">
        <tr
          class="level1 border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
          :id="event.eventid"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap level2"
            @click="getEventDetails"
          >
            <img
              :src="event.photo"
              class="w-32 h-20 level3"
              alt="event-image"
            />
          </th>
          <td @click="getEventDetails" class="px-6 py-4 level2">
            {{ event.title }}
          </td>
          <td @click="getEventDetails" class="px-6 py-4 level2">
            <span class="level3">{{ event.start_date }}</span> -<span>{{
              event.end_date
            }}</span>
          </td>
          <td @click="getEventDetails" class="px-6 py-4 level2">
            {{ event.venue }}
          </td>
          <td @click="getEventDetails" class="px-6 py-4 level2">
            {{ event.status }}
          </td>
          <td class="px-6 py-4">
            <button
              @click.stop.prevent="editEvent"
              class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              Edit
            </button>
            |
            <button
              @click.stop.prevent="deleteEvent"
              class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              Delete
            </button>
            <span v-if="isAdmin">|</span>
            <button
              @click.stop.prevent="publish"
              v-if="isAdmin"
              class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              Publish
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { ref } from "vue";
import router from "../../router";
var event_data = ref([]);
var isdata = ref(false);
var isAdmin = ref(localStorage.getItem("role") === "admin");

if (isAdmin.value === true) {
  getAllEvents();
} else {
  get_my_events();
}

function getAllEvents() {
  fetch("http://localhost:8080/api/admin/events", {
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

function get_my_events() {
  fetch(
    `http://localhost:8080/api/user/${localStorage
      .getItem("userid")
      .toString()}/events`,
    {
      method: "GET",
      headers: {
        // 'X-CSRFToken': token
        Authorization: localStorage.getItem("token"),
      },
      credentials: "same-origin",
    }
  )
    .then(function (response) {
      if (!response.ok) {
        alert("HTTP status " + response.status);
        return;
      }
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

function getEventDetails(e) {
  var target = e.target;
  //if (e.target.)
  var id = "";
  if (target.classList.contains("level1")) {
    id = target.getAttribute("id");
  } else if (target.classList.contains("level2")) {
    id = target.parentElement.getAttribute("id");
  } else if (target.classList.contains("level3")) {
    id = target.parentElement.parentElement.getAttribute("id");
  }
  console.log(id);
  router.push({ name: "EventDetails", params: { eventid: id } });
}

function editEvent(e) {
  var target = e.target;
  var id = "";
  id = target.parentElement.parentElement.getAttribute("id");
  router.push({ name: "EditEvent", params: { eventid: id } });
}

function deleteEvent(e) {
  var target = e.target;
  var id = "";
  id = target.parentElement.parentElement.getAttribute("id");
  fetch(`http://localhost:8080/api/events/${id}`, {
    method: "DELETE",
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
      alert(jsonResponse);

      get_my_events();
    })
    .catch(function (error) {
      console.log(error);
    });
}

function publish(e) {
  var target = e.target;
  var id = "";
  id = target.parentElement.parentElement.getAttribute("id");

  fetch(`http://localhost:8080/api/admin/events/${id}`, {
    method: "PATCH",
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
      alert(jsonResponse);
      getAllEvents();
    })
    .catch(function (error) {
      console.log(error);
    });
}
</script>

<style scoped>
tr:hover {
  background-color: #ff440048;
  cursor: pointer;
}
td,
th {
  z-index: -1;
}
</style>
>
