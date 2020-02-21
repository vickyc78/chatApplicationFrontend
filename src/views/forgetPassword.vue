<template>
  <div class="container">
    <div class="jumbotron">
      <h3 v-if="displayFileds!=true">Please select option to reset the password</h3>
      <div v-if="!mobileSelected">
        <input type="radio" name="selectOption" class="m-2" v-on:click="selectedOption('email')" />Email
        <br />

        <input
          type="text"
          placeholder="Please Enter Email Address"
          class="m-2"
          v-if="emailSelected"
          v-model="formData.emailAddress"
        />
      </div>
      <div v-if="!emailSelected && displayOtp!=true &&  displayFileds!=true">
        <input type="radio" name="selectOption" class="m-2" v-on:click="selectedOption('mobile')" />Mobile
        <br />
        <input
          type="number"
          placeholder="Please Enter Mobile Number"
          v-if="mobileSelected"
          class="m-2"
          v-model="formData.mobileNumber"
        />
      </div>
      <div v-if="displayOtp && !emailSelected && displayFileds!=true">
        <input type="text" placeholder="Enter OTP" v-model="formData.otpNumber" />
        <div class="m-2">
          <button class="btn btn-primary" @click="otpSubmit(formData)">Submit</button>
        </div>
      </div>
      <!-- <div v-if="displayFileds">
        <div>
          <b-form-group
            class="col-md-3 m-auto"
            id="password"
            label="Password:"
            label-for="password"
          >
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
      </div>-->
      <div class="m-2" v-if="emailSelected || mobileSelected && displayOtp!=true">
        <button class="btn btn-primary" @click="submitOption(formData)">Submit</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      emailSelected: false,
      mobileSelected: false,
      displayOtp: false,
      displayFileds: false,
      formData: {
        emailAddress: "",
        mobileNumber: "",
        otpNumber: ""
      }
    };
  },
  methods: {
    selectedOption: function(data) {
      if (data == "email") {
        this.emailSelected = true;
      } else {
        this.mobileSelected = true;
      }
    },
    submitOption: function(data) {
      if (data.emailAddress) {
        this.$router.push({
          name: "forgetEmailPassword"
        });
      }
      this.displayOtp = true;
    },
    otpSubmit: function(data) {
      if (data.otpNumber) {
        this.$router.push({
          name: "forgetEmailPassword"
        });
      }
      // this.displayFileds = true;
    }
  }
};
</script>
<style lang="sass">

</style>