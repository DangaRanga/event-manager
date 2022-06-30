<template>
  <div class="p-5 my-2">
    <form class="ml-32 mr-20 mx-5">
      <section id="event-status">
        <div>
          <div>
            <h1 class="text-4xl font-bold">Event Status</h1>
            <p class="my-2">Modify the visibility of your event</p>
          </div>
        </div>
      </section>
      <div>
        <label for="event status" class="block text-primary text-sm mb-1"
          >Event Status</label
        >
        <select
          id="countries"
          class="bg-white border border-gray-300 block w-full py-3 px-2 rounded dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="PENDING">Pending</option>
          <option value="DRAFT">Draft</option>
        </select>
      </div>
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
            name="event-title"
            required
            maxlength="100"
            id="event-title"
          />
        </div>
        <div class="my-4">
          <label for="title" class="block text-primary text-sm mb-1"
            >Event Description</label
          >
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 text-sm w-full rounded border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark: dark:focus:border-blue-500"
            placeholder="Your message..."
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
            <label for="title" class="block text-primary text-sm mb-1"
              >Start Date</label
            >
            <input
              type="text"
              class="px-2 border py-2 w-full rounded"
              name="event-title"
              required
              maxlength="100"
              id="event-title"
            />
          </div>
          <div class="my-4">
            <label for="title" class="block text-primary text-sm mb-1"
              >Start Time</label
            >
            <input
              type="text"
              class="px-2 border py-2 w-full rounded"
              name="event-title"
              required
              maxlength="100"
              id="event-title"
            />
          </div>
        </div>
        <div id="end-times" class="grid grid-cols-2 gap-5">
          <div class="my-4">
            <label for="title" class="block text-primary text-sm mb-1"
              >End Date</label
            >
            <input
              type="text"
              class="px-2 border py-2 w-full rounded"
              name="event-title"
              required
              maxlength="100"
              id="event-title"
            />
          </div>
          <div class="my-4">
            <label for="title" class="block text-primary text-sm mb-1"
              >End Time</label
            >
            <input
              type="text"
              class="px-2 border py-2 w-full rounded"
              name="event-title"
              required
              maxlength="100"
              id="event-title"
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
          <label for="title" class="block text-primary text-sm mb-1"
            >Venue</label
          >
          <input
            type="text"
            class="px-2 border py-2 rounded w-full"
            name="event-title"
            required
            maxlength="100"
            id="event-title"
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
        type="submit"
        value="Submit"
        class="my-3 px-7 py-3 bg-primary text-white rounded text-sm font-medium hover:bg-primaryHover transition ease-in-out delay-150 cursor-pointer"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "EditEvent",
};
</script>
