<template>
    <div class="main-container">
        <div class="register-form-container">
            <form class="register-form" enctype="multipart/form-data" @submit.prevent="registerUser()">
                <div class="form-group ">
                    <label for="fullname" class="">Full Name</label>
                    <input type="text" class="form-control" name="fullname" maxlength="50" id="fullname">
                </div>
                <div class="form-group ">
                    <label for="email" class="">Email</label>
                    <input type="text" class="form-control" name="email" maxlength="100" id="email">
                </div>
                <div class="form-group ">
                    <label for="password" class="">Password</label>
                    <input type="password" class="form-control" name="password"  id="password">
                </div>
                <div class="form-group ">
                    <label for="photo" class="">Profile Photo</label>
                    <input type="file" class="form-control" name="photo"  multiple="false" id="photo">
                </div>

                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>

<script setup>
    //import { ref } from 'vue';
    //import router from '../routers';


    function registerUser() {
        const form = document.querySelector('.register-form');

        const form_data = new FormData(form);

        console.log(form_data)


        fetch("http://localhost:8080/register", {
            method: 'POST',
            body: form_data,
            headers: {
                // 'X-CSRFToken': token
                //
            },
            credentials: 'same-origin'        
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonResponse) {
            alert(jsonResponse)
            //if (jsonResponse.status === "error") {
                //console.log(jsonResponse)
            //} else {
                //router.push({ name: 'riderhome'});
            //}
        })
        .catch(function(error) {
            console.log(error);
        });

    }


</script>

<style scoped>

.register-form-container{
    border-radius: 10px;
    border: 1px solid rgb(78, 77, 77);
    width: fit-content;
    padding: 15px;
}

form{
    display:flex;
    flex-direction: column;
    gap:20px;
}

</style>
