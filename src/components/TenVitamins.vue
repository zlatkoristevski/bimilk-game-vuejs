<template>
  <div class="vitamins-10 text-center">
    <div>
      <img :src="starter_image" class="starter" alt="Чаша полна со се што ти треба" />
    </div>
    <div>
      <img :src="vitamins_image" class="vitamins-img" alt="10 Витамини" />
    </div>
    <div class="vit-info-block">
      <div class="help-img">
        <img :src="help_image" alt="Придонесува за" />
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="vit-row b9">
            <div class="vit-img">
              <img :src="b9_image" alt="B9" />
            </div>
            <div class="text-bubble">
              <h5>Витамин B9</h5>
              <p>Придонесува за твојот здрав раст и развој.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="vit-row b7 right">
            <div class="text-bubble right">
              <h5>Витамин B7</h5>
              <p>Го одржува беспрекорно здравјето на твојата кожа и коса.</p>
            </div>
            <div class="vit-img right">
              <img :src="b7_image" alt="B9" />
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="vit-row a">
            <div class="vit-img">
              <img :src="a_image" alt="A" />
            </div>
            <div class="text-bubble">
              <h5>Витамин A</h5>
              <p>Се грижи за твоите очи и совршен вид.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="vit-row e right">
            <div class="text-bubble right">
              <h5>Витамин E</h5>
              <p>Твојот младешки изглед се должи токму на овој витамин.</p>
            </div>
            <div class="vit-img right">
              <img :src="e_image" alt="E" />
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="vit-row b3">
            <div class="vit-img">
              <img :src="b3_image" alt="B3" />
            </div>
            <div class="text-bubble">
              <h5>Витамин B3</h5>
              <p>Ти дава енергија и многу сила за сите предизвици кои ги носи денот.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="vit-row b5 right">
            <div class="text-bubble right">
              <h5>Витамин B5</h5>
              <p>Ти помага во регенерација на телото и надминување на заморот.</p>
            </div>
            <div class="vit-img right">
              <img :src="b5_image" alt="B5" />
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="vit-row d3">
            <div class="vit-img">
              <img :src="d3_image" alt="D3" />
            </div>
            <div class="text-bubble">
              <h5>Витамин D3</h5>
              <p>Се грижи да имаш здрави и цврсти коски.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="vit-row b6 right">
            <div class="text-bubble right">
              <h5>Витамин B6</h5>
              <p>Го зајакнува имунитетот и го подобрува твоето расположение.</p>
            </div>
            <div class="vit-img right">
              <img :src="b6_image" alt="B6" />
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="vit-row b12">
            <div class="vit-img">
              <img :src="b12_image" alt="B12" />
            </div>
            <div class="text-bubble">
              <h5>Витамин B12</h5>
              <p>Обврска на овој витамин е грижата за твојот нервен систем и мирен сон.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="vit-row b1 right">
            <div class="text-bubble right">
              <h5>Витамин B1</h5>
              <p>Цврстите мускули и здравата работа на срцето е одговороност на овој витамин.</p>
            </div>
            <div class="vit-img right">
              <img :src="b1_image" alt="B1" />
            </div>
          </div>
        </div>
      </div>

      <div class="two-vit">
        <img :src="two_vit_image" alt="Пакети" />
      </div>
    </div>
  </div>
</template>

<script>
import starter_image from "../assets/images/home-starter.png";
import vitamins_image from "../assets/images/vitamins.png";
import help_image from "../assets/images/helps-to.png";
import b9_image from "../assets/images/b9.png";
import b7_image from "../assets/images/b7.png";
import a_image from "../assets/images/a.png";
import e_image from "../assets/images/e.png";
import b3_image from "../assets/images/b3.png";
import b5_image from "../assets/images/b5.png";
import d3_image from "../assets/images/d3.png";
import b6_image from "../assets/images/b6.png";
import b12_image from "../assets/images/b12.png";
import b1_image from "../assets/images/b1.png";
import two_vit_image from "../assets/images/two-vit.png";
export default {
	data: function() {
		return {
			starter_image: starter_image,
			vitamins_image: vitamins_image,
			help_image: help_image,
			b9_image: b9_image,
			b7_image: b7_image,
			a_image: a_image,
			e_image: e_image,
			b3_image: b3_image,
			b5_image: b5_image,
			d3_image: d3_image,
			b6_image: b6_image,
			b12_image: b12_image,
			b1_image: b1_image,
			two_vit_image: two_vit_image
		};
	}
};
</script>