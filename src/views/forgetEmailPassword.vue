<template>
  <div class="container">
    <div class="jumbotron">
      <div>
        <b-form-group class="col-md-3 m-auto" id="password" label="Password:" label-for="password">
          <b-form-input id="password" type="password"></b-form-input>
        </b-form-group>
      </div>
      <div>
        <b-form-group
          class="col-md-3 m-auto"
          id="confirmPassword"
          label="Confirm Password:"
          label-for="confirmPassword"
        >
          <b-form-input id="confirmPassword" type="password"></b-form-input>
        </b-form-group>
      </div>
      <div>
        <button>
          <router-link to="userList" class="mr-3">Login</router-link>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="sass">

</style>