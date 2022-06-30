<template>
  <div class="main-container grid grid-cols-2 gap-4">
    <section id="content" class="p-5">
      <header>
        <h1 class="text-4xl font-bold">Create an Account</h1>
        <p class="w-4/5 my-4">
          Bacon ipsum dolor amet chuck spare ribs brisket landjaeger drumstick
          beef, kielbasa ball tip venison burgdoggen swine bacon tail capicola
          ribeye.
        </p>
      </header>
      <div class="">
        <form
          class="register-form"
          enctype="multipart/form-data"
          @submit.prevent="registerUser()"
        >
          <div class="my-4">
            <label for="fullname" class="block text-primary text-sm mb-1"
              >Full Name</label
            >
            <input
              type="text"
              class="px-2 border-2 py-2 w-full rounded-sm"
              name="fullname"
              maxlength="50"
              id="fullname"
            />
          </div>
          <div class="my-4">
            <label for="email" class="block text-primary text-sm mb-1"
              >Email</label
            >
            <input
              type="text"
              class="px-2 border-2 py-2 w-full rounded-sm"
              name="email"
              maxlength="100"
              id="email"
            />
          </div>
          <div class="my-4">
            <label for="password" class="block text-primary text-sm mb-1"
              >Password</label
            >
            <input
              type="password"
              class="px-2 border-2 py-2 w-full rounded-sm"
              name="password"
              id="password"
            />
          </div>

          <div class="flex justify-center items-center w-full">
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

          <input
            type="submit"
            value="Submit"
            class="my-3 px-7 py-3 bg-primary text-white rounded text-sm font-medium hover:bg-primaryHover transition ease-in-out delay-150 cursor-pointer"
          />
        </form>
      </div>
    </section>
    <section id="registerImage"></section>
  </div>
</template>

<script setup>
//import { ref } from 'vue';
import router from '../../router';

function registerUser() {
  const form = document.querySelector(".register-form");

  const form_data = new FormData(form);

  console.log(form_data);

  fetch("http://localhost:8080/register", {
    method: "POST",
    body: form_data,
    headers: {
      // 'X-CSRFToken': token
      //
    },
    credentials: "same-origin",
  })
    .then(function (response) {
      if (!response.ok) {
        alert("HTTP status " + response.status);
        return
      }
      return response.json();
      
    })
    .then(function (jsonResponse) {
      alert(jsonResponse);
      //if (jsonResponse.status === "error") {
      //console.log(jsonResponse)
      //} else {
      //router.push({ name: 'riderhome'});
      //}
      router.push({ name: 'Login'});
    })
    .catch(function (error) {
      console.log(error);
    });
}
</script>

<style scoped>
#registerImage {
  background: url("../../assets/mic.jpg");
  background-size: cover;
  background-position: center;
}
</style>
