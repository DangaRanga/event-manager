<template>
  <div class="relative overflow-x-auto border sm:rounded-lg">
    <table class="text-sm w-full text-left text-gray-500 dark:text-gray-400">
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
      <tbody>
        <tr
          class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            <img src="" alt="event-image" />
          </th>
          <td class="px-6 py-4">Open Night at Raggamuffin</td>
          <td class="px-6 py-4">6/29/2022 - 6/30/2022</td>
          <td class="px-6 py-4">Raggamuffin Cafe</td>
          <td class="px-6 py-4">Pending</td>
          <td class="px-6 py-4">Edit | Delete</td>
        </tr>
        <tr
          class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            <img src="" alt="event-image" />
          </th>
          <td class="px-6 py-4">Open Night at Raggamuffin</td>
          <td class="px-6 py-4">6/29/2022 - 6/30/2022</td>
          <td class="px-6 py-4">Raggamuffin Cafe</td>
          <td class="px-6 py-4">Pending</td>
          <td class="px-6 py-4">Edit | Delete</td>
        </tr>
        <tr
          class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            <img src="" alt="event-image" />
          </th>
          <td class="px-6 py-4">Open Night at Raggamuffin</td>
          <td class="px-6 py-4">6/29/2022 - 6/30/2022</td>
          <td class="px-6 py-4">Raggamuffin Cafe</td>
          <td class="px-6 py-4">Pending</td>
          <td class="px-6 py-4">Edit | Delete</td>
        </tr>
      </tbody>
    </table>

    
  </div>
</template>
<script>
export default {
  name: "EventTable",
};
</script>
