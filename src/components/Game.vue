<template>
  <div class="game text-center container-fluid">
    <!-- <div>
      <img :src="starter_image" class="starter" style="max-width: 450px;" alt="Чаша полна со се што ти треба" />
    </div> -->

	<div class="game-row">
		<div class="left-block"><img :src="left_image" alt="Витамини" class="img-fluid"></div>
		<div class="game-block">
			<div class="cards random-cards text-center">
				<img :src="top_circle_image" />
				<ul>
					<li v-if="gameTime == maxGameTime">
						<button style="width: 80px; height: 80px; margin-left: 0;" type="button" @click="startGame" class="green-circle">
							<img style="width: 48px; height: 48px;" :src="play_image" />
						</button>
						<!-- <img :src="logo_image" alt="" style="pointer-events: none; opacity: 0.5; transform: scale(2);"> -->
					</li>
					<li v-for="(randomCard, index) in randomCards" v-bind:key="randomCard" @click="guessCard(randomCard)">
						<img :src="allCards[randomCard]" :style="'transform: rotate(-'+(index/2)+'deg)'" alt="">
					</li>
				</ul>
			</div>
			<div class="cards my-cards text-center">
				<img :src="circle_image" />
				<ul>
					<li v-if="gameTime == maxGameTime">
						<img :src="logo_image" alt="" style="pointer-events: none; opacity: 0.5; transform: scale(2);">
					</li>
					<li v-for="(myCard, index) in myCards" v-bind:key="myCard">
						<img :src="allCards[myCard]" :style="'transform: rotate('+(index/2)+'deg)'" alt="">
					</li>
				</ul>
			</div>
			<span class="settings">
				Погодени карти: 
				<span class="green-circle">
					{{ user.guessedCards }}
				</span>
			</span>
			<span class="settings game-btn">
				<i class="desktop">{{ gameTime == maxGameTime || gameTime == 0 ? 'Играј' : 'Рестартирај' }}</i>
				<button type="button" @click="startGame" class="green-circle">
					<img :src="gameTime == maxGameTime || gameTime == 0 ? play_image : restart_image" />
				</button>
				<i class="mobile">{{ gameTime == maxGameTime || gameTime == 0 ? 'Играј' : 'Рестартирај' }}</i>
			</span>
		</div>
		<div class="right-block"><img :src="right_image" alt="Витамини" class="img-fluid"></div>

		<div class="progress-block">
			<h3>Време:</h3>
			<div class="progress progress-bar-vertical">
				<div class="progress-bar" role="progressbar" :style="'height:'+gameTimePercent+'%'" :aria-valuenow="gameTime" aria-valuemin="0" :aria-valuemax="maxGameTime">
					<span>{{ gameTime }}</span><span>секунди</span>
				</div>
				<span>{{ maxGameTime }}</span><span>секунди</span>
			</div>
		</div>
	</div>

	<div class="mobile-progress">
		<!-- <h3>Време:</h3> -->
		<div><span class="green-circle">{{ gameTime }}"</span></div>
	</div>


<div style="margin-top: 100px;">
	<b-modal class="test" id="modal-center" v-model="showsSubmitResultForm" hide-footer centered title="Види го твојот резултат">
		<h4>Вие погодивте: {{ user.guessedCards }} карти</h4>

		<div class="submit_form_holder">
			<div class="form-group">
				<label for="nameInput">Име</label>
				<input 
					type="text" 
					v-model="user.name" 
					@input="validateInput($event, 'name')" 
					:class="['form-control', (nameTouched) ? (!nameValid) ? 'error' : '' : '']" 
					id="nameInput" 
					aria-describedby="nameHelp" 
					placeholder="Име"/>
				<span class="error" v-if="!nameValid && nameTouched">*внесете валидено име</span>
			</div>
			<div class="form-group">
				<label for="emailInput">Емаил</label>
				<input 
					type="email" 
					v-model="user.email" 
					@input="validateInput($event, 'email')" 
					:class="['form-control', (emailTouched) ? (!emailValid) ? 'error' : '' : '']" 
					id="emailInput" 
					aria-describedby="emailHelp" 
					placeholder="Емаил" />
				<span class="error" v-if="!emailValid && emailTouched">*внесете валиден емаил</span>
			</div>
			<button @click="submitResult">Испрати</button>
		</div>
	</b-modal>

	<b-modal class="test" id="modal-center" v-model="showModal" hide-footer centered :title="modalTitle">
		<h4>{{ modalMessage }}</h4>

		<div class="submit_form_holder">
			<router-link v-if="modalButtonShow" :to="modalButtonPath"  tag="a" >{{ modalButtonName }}</router-link>
		</div>
	</b-modal>
</div>

  </div>
</template>

<script>
import starter_image from "../assets/images/home-starter.png";
import left_image from "../assets/images/game-left.png";
import right_image from "../assets/images/game-right.png";
import top_cards_image from "../assets/images/top-text.png";
import bottom_cards_image from "../assets/images/bottom-text.png";
import top_circle_image from "../assets/images/circle-top.png";
import circle_image from "../assets/images/circle.png";
import play_image from "../assets/images/play.png";
import restart_image from "../assets/images/restart.png";
import logo_image from "../assets/images/logo.png";

import { allCards } from "../data/allCards";

export default {
	mounted() {
		// this.$root.$on("bv::modal::show", (bvEvent, modalId) => {
		// console.log("Modal is about to be shown", bvEvent, modalId);
		// });
	},
	data() {
		return {
			logo_image: logo_image,
			starter_image: starter_image,
			left_image: left_image,
			right_image: right_image,
			top_cards_image: top_cards_image,
			bottom_cards_image: bottom_cards_image,
			top_circle_image: top_circle_image,
			circle_image: circle_image,
			play_image: play_image,
			restart_image: restart_image,
			gameInterval: null,
			maxNumberOfCardsForPlaying: 7,
			gameTime: 60,
			gameTimePercent: 100,
			maxGameTime: 60,
			allCards: allCards,
			myCards: [],
			showsSubmitResultForm: false,
			showModal: false,
			modalTitle: "",
			modalMessage: "",
			modalButtonShow: false,
			modalButtonName: "",
			modalButtonPath: "",
			randomCards: [],
			nameValid: false,
			emailValid: false,
			nameTouched: false,
			emailTouched: false
		};
	},
	created: function() {
		// this.startGame();
	},
	computed: {
		user() {
			return this.$store.state.user;
		}
	},
	methods: {
		validateInput(event, type) {
			if (type == "name") {
				this.nameTouched = true;

				if (event.target.value.length == 0) {
					this.nameValid = false;
				} else {
					this.nameValid = true;
				}
			} else if (type == "email") {
				this.emailTouched = true;

				if (event.target.value.length == 0) {
					this.emailValid = false;
				} else {
					let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					let emailValidExp = re.test(event.target.value);
					if (emailValidExp) {
						this.emailValid = true;
					} else {
						this.emailValid = false;
					}
				}
			}
			console.log(event.target.value);
		},
		setUserName(event) {
			this.$store.state.user.name = event.target.value;
		},
		setUserEmail(event) {
			this.$store.state.user.email = event.target.value;
		},
		setUserGuessedCards(value) {
			this.$store.state.user.guessedCards = value;
		},
		submitResult() {
			let userAlreadyPlayed = false;
			let userAlreadyPlayedKey = "";
			let userAlreadyPlayedBestScore = "";
			let self = this;

			if (this.emailValid && this.nameValid) {
				this.$http
					.get("https://bimilk-game-guess-card.firebaseio.com/ranking.json")
					.then(
						response => {
							for (let [key, value] of Object.entries(response.data)) {
								if (value.email == self.user.email) {
									userAlreadyPlayed = true;
									userAlreadyPlayedKey = key;
									userAlreadyPlayedBestScore = value.guessedCards;
								}
							}

							if (userAlreadyPlayed == false) {
								this.$http
									.post(
										"https://bimilk-game-guess-card.firebaseio.com/ranking.json",
										self.user
									)
									.then(
										response => {
											if (response.ok) {
												self.showsSubmitResultForm = false;

												self.showModal = true;
												self.modalTitle = "Јупи!";
												self.modalMessage = "Вашиот резултат беше испратен.";
												self.modalButtonShow = true;
												self.modalButtonName = "Види ги резултатите";
												self.modalButtonPath = "/ranking";
											} else {
												self.ajaxErrorHandler();
											}
										},
										error => {
											console.log(error);
											self.ajaxErrorHandler();
										}
									);
							} else {
								if (self.user.guessedCards > userAlreadyPlayedBestScore) {
									this.$http
										.put(
											"https://bimilk-game-guess-card.firebaseio.com/ranking/" +
												userAlreadyPlayedKey +
												".json",
											self.user
										)
										.then(
											response => {
												if (response.ok) {
													self.showsSubmitResultForm = false;

													self.showModal = true;
													self.modalTitle = "Честитки";
													self.modalMessage = "Нов најдобар резултат.";
													self.modalButtonShow = true;
													self.modalButtonName = "Види ги резултатите";
													self.modalButtonPath = "/ranking";
												} else {
													self.ajaxErrorHandler();
												}
											},
											error => {
												console.log(error);
												self.ajaxErrorHandler();
											}
										);
								} else {
									self.showsSubmitResultForm = false;

									self.showModal = true;
									self.modalTitle = "Инфо";
									self.modalMessage =
										"Овој резултат не е вашиот најдобар. Обидете се повторно";
									self.modalButtonShow = true;
									self.modalButtonName = "Ок";
									self.modalButtonPath = "/";
								}
							}
						},
						error => {
							console.log(error);
							self.ajaxErrorHandler();
						}
					);
			} else {
				this.nameTouched = true;
				this.emailTouched = true;
			}
		},

		ajaxErrorHandler() {
			alert("Error happened! Please reload the page.");
		},

		generateRandomCards() {
			let newRandomCards = {};

			for (let i = 1; i <= this.maxNumberOfCardsForPlaying; i++) {
				let randNumber = Math.ceil(Math.random() * 30);
				if (newRandomCards[randNumber] != undefined) {
					i--;
				} else {
					newRandomCards[randNumber] = randNumber;
				}
			}
			return newRandomCards;
		},
		newRandomCards() {
			let randomCards = this.generateRandomCards();
			let myCards = this.generateRandomCards();
			let hasAtLeastOne = false;

			for (var key in randomCards) {
				if (myCards[key] != undefined) {
					hasAtLeastOne = true;
				}
			}

			if (hasAtLeastOne == false) {
				this.newRandomCards();
			} else {
				this.randomCards = randomCards;
				this.myCards = myCards;
			}
		},

		startGame() {
			// this.$noty.info("Game started!");

			this.user.guessedCards = 0;
			this.showsSubmitResultForm = false;

			clearInterval(this.gameInterval);
			this.newRandomCards();
			this.gameTime = this.maxGameTime;
			this.gameTimePercent = 100;

			const self = this;

			self.gameTime = parseInt(self.gameTime) - 1;

			this.gameInterval = setInterval(function() {
				if (self.gameTime == 0) {
					clearInterval(self.gameInterval);

					if (self.user.guessedCards > 0) {
						self.showsSubmitResultForm = true;
					} else {
						self.showModal = true;
						self.modalTitle = "Инфо";
						self.modalMessage = "Пробајте повторно, не се разочарувајте";
						self.modalButtonShow = true;
						self.modalButtonName = "Ок";
						self.modalButtonPath = "/";
					}

					// self.$noty.error("GAME OVER!");
				} else {
					self.gameTime = parseInt(self.gameTime) - 1;
					self.gameTimePercent =
						(parseInt(self.gameTime) / parseInt(self.maxGameTime)) * 100;
				}
			}, 1000);
		},
		guessCard(card) {
			if (this.gameTime != 0) {
				if (this.myCards[card] != undefined) {
					this.setUserGuessedCards(this.user.guessedCards + 1);
					// this.$noty.success("You guessed, go on!");
					this.newRandomCards();
				}
			}
		}
	}
};
</script>

<style scoped>
.random-cards ul li img {
	cursor: pointer;
}
</style>