'use strict';

var vue = new Vue({
	el: '#vue',
	data: {
		navSeT: false,
		navSeF: true,
		navSt: 'navStF'
	},
	methods: {
		navF() {
			this.navSeF = !this.navSeF
			this.navSeT = !this.navSeT
		},

		goToZm() {
			location.href = 'index.html';
		},
		goToPd() {
			location.href = 'pokedex/index.html';
		},
		goToVkBuy() {
			location.href = 'https://vk.com/rubin_alexey';
		},
		goToVkSay() {
			location.href = 'https://vk.com/im?sel=550222194';
		},
		goToDiscord() {
			location.href = 'https://discord.gg/QEwp97z';
		}
	}
})