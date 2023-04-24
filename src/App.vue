<script setup>
import {getData} from "./composables/getData"
const datas = getData()
</script>
 
<template>
<div class="flex">
<div class="bg-green-700 w-full">Chris & Sofia</div>
  <table class="">
    <thead>
      <th>Character Name</th>
      <th>Picture</th>
      <th>Bio</th>
      <th></th>
      <th></th>
    </thead>
    <tbody v-for="data of datas">
      <td>{{ data.name }}</td>
      <td>{{ data.picture??"no picture" }}</td>
      <td>{{ data.bio }}</td>
      <td>Details {{ data.id }}<button>Edit</button></td>
      <td><button>Delete</button></td>
    </tbody>
  </table>
  <button>Add</button>
</div>
</template>
 
<style scoped>

</style>