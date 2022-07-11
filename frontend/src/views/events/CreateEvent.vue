<template>
  <div class="p-5 my-2">
    <button
      class="px-7 py-3 bg-primary text-white rounded text-sm font-medium hover:bg-primaryHover transition ease-in-out delay-150"
    >
      <router-link to="/events-dashboard">
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#ffff"
            class="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>

          <p class="ml-2">Events</p>
        </div>
      </router-link>
    </button>

    <form class="ml-32 mr-20 mx-5 event-form">
      <section id="basic-details" class="my-5">
        <div>
          <h1 class="text-4xl font-bold">Basic Details</h1>
          <p class="my-2">
            Name your event and tell event-goers why they should come. Add
            details that highlight what makes it unique.
          </p>
        </div>
        <div class="my-4">
          <label for="title" class="block text-primary text-sm mb-1"
            >Event Title</label
          >
          <input
            type="text"
            class="px-2 border py-2 rounded w-full"
            name="title"
            required
            maxlength="100"
          />
        </div>
        <div class="my-4">
          <label for="description" class="block text-primary text-sm mb-1"
            >Event Description</label
          >
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 text-sm w-full rounded border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark: dark:focus:border-blue-500"
            placeholder="Your message..."
            name="description"
          ></textarea>
        </div>
      </section>
      <section>
        <div>
          <h1 class="text-4xl font-bold">Date and Time</h1>
          <p class="my-2">
            Tell event-goers when your event starts and ends so they can make
            plans to attend.
          </p>
        </div>
        <div id="start-times" class="grid grid-cols-2 gap-5">
          <div class="my-4">
            <label for="startdate" class="block text-primary text-sm mb-1"
              >Start Date</label
            >
            <input
              type="text"
              class="px-2 border py-2 w-full rounded"
              name="startdate"
              required
              maxlength="100"
            />
          </div>
          <div class="my-4">
            <label for="starttime" class="block text-primary text-sm mb-1"
              >Start Time</label
            >
            <input
              type="text"
              class="px-2 border py-2 w-full rounded"
              name="starttime"
              required
              maxlength="100"
            />
          </div>
        </div>
        <div id="end-times" class="grid grid-cols-2 gap-5">
          <div class="my-4">
            <label for="enddate" class="block text-primary text-sm mb-1"
              >End Date</label
            >
            <input
              type="text"
              class="px-2 border py-2 w-full rounded"
              name="enddate"
              required
              maxlength="100"
            />
          </div>
          <div class="my-4">
            <label for="endtime" class="block text-primary text-sm mb-1"
              >End Time</label
            >
            <input
              type="text"
              class="px-2 border py-2 w-full rounded"
              name="endtime"
              required
              maxlength="100"
            />
          </div>
        </div>
      </section>
      <section id="location-details">
        <h1 class="text-4xl font-bold">Location Details</h1>
        <p class="my-2">
          Help people in the area discover your event and let attendees know
          where to show up.
        </p>
        <div class="my-4">
          <label for="venue" class="block text-primary text-sm mb-1"
            >Venue</label
          >
          <input
            type="text"
            class="px-2 border py-2 rounded w-full"
            name="venue"
            required
            maxlength="100"
          />
        </div>
        <div class="my-4">
          <label for="website_url" class="block text-primary text-sm mb-1"
            >Website Url</label
          >
          <input
            type="text"
            class="px-2 border py-2 rounded w-full"
            name="website_url"
            required
            maxlength="100"
          />
        </div>
        <div class="flex justify-center items-center">
          <label
            for="dropzone-file"
            class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div class="flex flex-col justify-center items-center pt-5 pb-6">
              <svg
                class="mb-3 w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="photo" name="photo" multiple="false" type="file" />
          </label>
        </div>
      </section>
      <input
        @click.stop.prevent="submitEvent"
        type="submit"
        value="Submit"
        class="my-3 px-7 py-3 bg-primary text-white rounded text-sm font-medium hover:bg-primaryHover transition ease-in-out delay-150 cursor-pointer"
      />
    </form>
  </div>
</template>
<script setup>
import router from "../../router";
import {
  dangerNotification,
  successNotification,
} from "@/controllers/toasts/toasts";

function submitEvent() {
  const form = document.querySelector(".event-form");

  const form_data = new FormData(form);


  fetch("http://localhost:8080/api/v1/events", {
    method: "POST",
    body: form_data,
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
    .then(function () {
      successNotification("Event Successfully Created. HTTP Response 201");

      router.push({ name: "EventsDashboard" });
    })
    .catch(function (error) {
      console.log(error);
    });
}
</script>
