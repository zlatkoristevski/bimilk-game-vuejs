<template>
  <div class="home text-center">
    <div>
      <img :src="starter_image" class="starter" alt="Чаша полна со се што ти треба" />
    </div>
    <div>
      <img :src="vitamins_image" class="vitamins-img" alt="10 Витамини" />
    </div>

    <div class="flex-grid">
      <div>
        <img :src="characters_image" class="char-img d-none d-sm-inline-block" alt="Карти" />
        <img :src="characters_image_mobile" class="char-img d-inline-block d-sm-none" alt="Карти" />
      </div>
      <div>
        <router-link to="/game" tag="a" class="play-btn">Играј</router-link>
        <p>Најди го истиот симбол!</p>
        <div>
          <img :src="cards_image" class="cards-img" alt="Карти" />
        </div>
      </div>
      <div>
        <img :src="two_front_image" class="two-front-img" alt="Карти" />
      </div>
    </div>
  </div>
</template>


<script>
import starter_image from "../assets/images/home-starter.png";
import vitamins_image from "../assets/images/vitamins.png";
import cards_image from "../assets/images/cards.png";
import characters_image from "../assets/images/characters.png";
import characters_image_mobile from "../assets/images/characters-mob.png";
import two_front_image from "../assets/images/two-front.png";

export default {
	data: function() {
		return {
			starter_image: starter_image,
			vitamins_image: vitamins_image,
			cards_image: cards_image,
			characters_image: characters_image,
			characters_image_mobile: characters_image_mobile,
			two_front_image: two_front_image
		};
	}
};
</script>

<style scoped>
p {
	color: #fff;
	font-size: 27px;
	font-weight: 700;
	margin-top: 25px;
}

@media all and (max-width: 550px) {
	p {
		margin-bottom: 0;
	}
}
</style>