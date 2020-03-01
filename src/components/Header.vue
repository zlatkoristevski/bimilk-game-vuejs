<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link @click.native="closeMenu()" to="/" tag="a" class="navbar-brand">
        <img :src="image" class="d-inline-block align-top" alt />
      </router-link>

      <button
        v-bind:class="[isActive ? 'is-active' : '']"
        @click="isActive = !isActive"
        class="navbar-toggler hamburger hamburger--elastic"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
        aria-controls="navbar"
        :aria-expanded="[isActive ? true : false]"
        aria-label="Toggle navigation"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav ml-auto">
          <router-link @click.native="closeMenu()" to="/game" activeClass="active" tag="li" class="nav-item">
            <a class="nav-link" href="#">Игра</a>
          </router-link>
          <router-link @click.native="closeMenu()" to="/ranking" class="nav-item" activeClass="active" tag="li">
            <a class="nav-link" href="#">Рангирање</a>
          </router-link>
          <router-link @click.native="closeMenu()" to="/ten-vitamins" class="nav-item" activeClass="active" tag="li">
            <a class="nav-link" href="#">10 Витамини</a>
          </router-link>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import image from "../assets/images/logo.png";
import $ from "jquery";

export default {
	data: function() {
		return {
			image: image,
			isActive: false,
			toggleNav: false
		};
	},
	watch: {
		$route() {
			this.isActive = false;
		}
	},
	methods: {
		closeMenu() {
			$("#navbar").collapse("hide");
		}
	}
};
</script>