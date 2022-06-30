<template>
  <article class="my-4 cursor-pointer  w-2/3 p-3 py-3 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" @click="getEventDetails">
    <div id="image" class="mb-2" >
      <img :src="props.imageUrl" alt="event image" />
    </div>
    <div id="content" >
      <h2 class="text-lg font-bold" >{{ props.title }}</h2>
      <h3 class="text-gray-700">{{ props.venue }}</h3>
      <p class="text-primary text-sm" >{{ props.date }}</p>
      
    </div>
    <div id="detail-link">
      <a class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 
      border border-blue-500 hover:border-transparent rounded"  :id="props.eventid" role="button"
      @click.stop.prevent="getEventDetails">View Details
      </a>
    </div>
  </article>
</template>

<script setup>
import { defineProps} from "vue";
import router from '../../router';
const props = defineProps({
  imageUrl: String,
  title: String,
  date: String,
  venue: String,
  eventid: Number
});

function getEventDetails(e){
  router.push({ name: 'EventDetails', params: { 'eventid': e.target.id} });
}

</script>

<style scoped>
img{
  width: 120px;
  height:120px;
}

#detail-link{
  text-align: center;
  margin-top: 20px;
  margin-bottom: 5px;
}

h2,h3,p{
  text-align: center;
}

article:hover{
  box-shadow: 2px 2px 5px #d1410c; 
}

#image{
  display: flex;
  justify-content: center;
}

</style>
