<template>
  <div>
    <div>
      <div>
        <!-- <div class="row"> -->
        <div class="col">
          <!-- <div class="card-body p-0 rounded-0"> -->
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
            <b-form-group class="col-md-3 m-auto" id="mobile" label="Mobile:" label-for="mobile">
              <b-form-input id="mobile" type="number"></b-form-input>
            </b-form-group>
            <b-form-group class="col-md-3 m-auto" id="email" label="Email:" label-for="email">
              <b-form-input id="email" type="text"></b-form-input>
            </b-form-group>
            <div>
              <router-link to="login" class="mr-3">already have an acccount ?</router-link>
              <button class="mt-3 btn btn-primary">sign Up</button>
            </div>
          </b-form>
          <!-- </div> -->
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss">
</style>

