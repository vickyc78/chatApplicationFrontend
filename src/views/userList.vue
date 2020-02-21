<template>
  <div class="container">
    <ul class="list-group" v-for="userList in userLists">
      <li class="list-group-item">{{userList.name}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userLists: [
        {
          name: "Vicky"
        },
        {
          name: "Rohit"
        },
        {
          name: "Kapil"
        },
        {
          name: "Kiran"
        },
        {
          name: "Ronak"
        }
      ]
    };
  }
};
</script>
<style>
</style>