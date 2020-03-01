<template>
  <div class="ranking">
    

    <div class="flex-table" v-if="!isLoading">
      <div class="table-row header">
        <div class="cell-wrapper text-4">
          <div class="cell-wrapper text-rank">
            <div class="text">#</div>
          </div>
          <div class="cell-wrapper text-2">
            <div class="text">Име</div>
            <!-- <div class="text">Емаил</div> -->
          </div>
        </div>
        <div class="cell-wrapper num-4">
          <div class="num">Поени</div>
        </div>
      </div>

      <div 
			:class="['table-row', (item.userEmail == user.email) ? 'current-player-selected' : '']" 
			v-for="(item, index)  in rankingData" 
			:id="[(item.userEmail == user.email) ? 'current-player-selected' : '']" 
			:key="item.userEmail">
        <div class="cell-wrapper text-4">
          <div class="cell-wrapper text-rank">
            <div class="text">{{ index + 1 }}</div>
          </div>
          <div class="cell-wrapper text-2">
            <div class="text" title="vasan@example.com">{{ item.userName }}</div>
            <!-- <div class="text">{{ item.userEmail }}</div> -->
          </div>
        </div>
        <div class="cell-wrapper num-4">
          <div class="num">{{ item.guessedCards }}</div>
        </div>
      </div>
    </div>

    <div class="spinner-border text-light" role="status" v-if="isLoading">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>
<style scoped>
</style>

<script>
// // Firebase App (the core Firebase SDK) is always required and must be listed first
// import * as firebase from "firebase/app";

// // If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// // Add the Firebase products that you want to use
// import "firebase/auth";
// import "firebase/database";
// import "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyCoNbSsyoabO3dk3cC3ZFBD0wZcpCvtmPU",
//     authDomain: "bimilk-game-guess-card.firebaseapp.com",
//     databaseURL: "https://bimilk-game-guess-card.firebaseio.com",
//     projectId: "bimilk-game-guess-card",
//     storageBucket: "bimilk-game-guess-card.appspot.com",
//     messagingSenderId: "579795455053",
//     appId: "1:579795455053:web:d15c53d009bce7ede46004",
//     measurementId: "G-W6CG0S6C86"
// };

export default {
	data() {
		return {
			isLoading: false,
			rankingData: []
		};
	},
	created: function() {
		this.getRanking();
	},
	computed: {
		user() {
			return this.$store.state.user;
		}
	},

	methods: {
		getRanking() {
			this.isLoading = true;

			let self = this;
			let rankingDataParsed = [];

			this.$http
				.get("https://bimilk-game-guess-card.firebaseio.com/ranking.json")
				.then(
					response => {
						for (let [key, value] of Object.entries(response.data)) {
							let userData = [];
							userData.key = key;
							userData.userName = value.name;
							userData.userEmail = value.email;
							userData.guessedCards = value.guessedCards;

							rankingDataParsed.push(userData);
						}

						rankingDataParsed.sort((a, b) =>
							a.guessedCards < b.guessedCards ? 1 : -1
						);

						self.rankingData = rankingDataParsed;

						self.isLoading = false;

						setTimeout(function() {
							var x = document.getElementById("current-player-selected");
							x.scrollIntoView(true);
							window.scrollBy(0, -200);
						}, 1000);
					},
					error => {
						self.ajaxErrorHandler();
						console.log(error);
					}
				);
		},

		scrollToUser() {
			var x = document.getElementById("current-player-selected");
			x.scrollIntoView();
		},

		submitDummyData() {
			for (let i = 0; i <= 200; i++) {
				console.log(i);

				this.$http.post(
					"https://bimilk-game-guess-card.firebaseio.com/ranking.json",
					{
						name: "Zlatko" + i,
						email: "zlatko.ristevski" + i + "@gmail.com",
						guessedCards: i
					}
				);
			}
		},

		ajaxErrorHandler() {
			alert("Error happened! Please reload the page.");
		}
	}
};
</script>

<style scoped>
.spinner-border {
	margin: 0 auto;
	display: block;
}

.current-player-selected {
	background-color: #73be44 !important;
	color: white;
}
</style>