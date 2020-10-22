'use strict';

var vue = new Vue({
  el: '#vue',
  data: {
    navSeT: false
  },
  methods: {
    goToDiscord() {
      location.href = 'https://discord.gg/QEwp97z';
    }
  }
})