<template>
  <div class="main-container grid grid-cols-2 min-h-screen gap-5">
    <section id="content" class="p-5">
      <header>
        <h1 class="text-4xl font-bold">Login</h1>
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

          <input
            type="submit"
            value="Login"
            class="my-3 px-7 py-3 bg-primary text-white rounded text-sm font-medium hover:bg-primaryHover transition ease-in-out delay-150 cursor-pointer"
          />
        </form>
      </div>
    </section>
    <section id="loginImage" class="h-full"></section>
  </div>
</template>

<script setup>

//import { ref } from 'vue';

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
      return response.json();
    })
    .then(function (jsonResponse) {
      alert(jsonResponse);
      //if (jsonResponse.status === "error") {
      //console.log(jsonResponse)
      //} else {
      //router.push({ name: 'riderhome'});
      //}
    })
    .catch(function (error) {
      console.log(error);
    });
}



</script>
<style scoped>
#loginImage {
  background: url("../../assets/loginImg.jpg");
  background-size: cover;
  background-position: center;
}
</style>
