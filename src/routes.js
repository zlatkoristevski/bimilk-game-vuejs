import Home from './components/Home.vue';
import Game from './components/Game.vue';
import Ranking from './components/Ranking.vue';
import TenVitamins from './components/TenVitamins.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/game', component: Game },
    { path: '/ranking', component: Ranking },
    { path: '/ten-vitamins', component: TenVitamins }
];