
<template>
  <div class="wrapper" id="app">
    <app-header></app-header>
      <transition
        name="fade"
        mode="out-in"
      >
    <router-view></router-view>
      </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

import "./assets/css/main.css";

export default {
	name: "App",
	components: {
		appHeader: Header,
		appFooter: Footer
	}
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
	transition-duration: 0.3s;
	transition-property: opacity;
	transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
	opacity: 0;
}
</style>

