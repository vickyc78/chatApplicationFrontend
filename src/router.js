import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";

//chat signUp form
import signUp from "./views/signUp.vue";

//chat login form
import login from "./views/login.vue";

//For user List
import userList from "./views/userList.vue";

//For User Chat Room
import chatRoom from "./views/chatRoom.vue";

//For Forget_Password
import forgetPassword from "./views/forgetPassword.vue";

//For Forget_Email_Password
import forgetEmailPassword from "./views/forgetEmailPassword.vue";

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   redirect: "/signUp",
    //   component: Home
    // },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/",
      name: "signUp",
      component: signUp
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/userList",
      name: "userList",
      component: userList
    },
    {
      path: "/chatRoom",
      name: "chatRoom",
      component: chatRoom
    },
    {
      path: "/forgetPassword",
      name: "forgetPassword",
      component: forgetPassword
    },
    {
      path: "/forgetEmailPassword",
      name: "forgetEmailPassword",
      component: forgetEmailPassword
    }
  ]
});
