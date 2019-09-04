<template>
  <div>
    <div>
      <div class="col">
        <b-form>
          <b-form-group
            class="col-md-3 m-auto"
            id="userName"
            label="User Name:"
            label-for="userName"
          >
            <b-form-input id="userName" type="text"></b-form-input>
          </b-form-group>
          <b-form-group
            class="col-md-3 m-auto"
            id="password"
            label="Password:"
            label-for="password"
          >
            <b-form-input id="password" type="password"></b-form-input>
          </b-form-group>
          <b-form-group
            class="col-md-3 m-auto"
            id="mobile"
            label="Mobile Number:"
            label-for="mobile"
          >
            <b-form-input id="mobile" type="number"></b-form-input>
          </b-form-group>
          <div class="mt-3">
            <router-link to="signUp" class="mr-3">New User</router-link>

            <button class="btn btn-primary">Login</button>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss">
</style>