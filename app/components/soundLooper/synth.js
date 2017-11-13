
module.exports = {
  audioContext: new AudioContext(),
  oscs: {
    red: {},
    orange: {},
    yellow: {},
    green: {},
    blue: {},
    indigo: {},
    violet: {}
  },

  noteOff: function () {
    this.play(0)
  },

  play: function (vol = 1) {
    for (let key in this.oscs) {
      this.oscs[key] = this.audioContext.createOscillator();
      this.oscs[key].type = 'sine';
      this.gain = this.audioContext.createGain();
      this.gain.gain.value = vol;
      this.oscs[key].connect(this.gain)
      this.gain.connect(this.audioContext.destination);
      switch (key) {
        case 'red':
          this.oscs[key].frequency.value = 277.18;
          break;
        case 'orange':
          this.oscs[key].frequency.value = 293.66;
          break;
        case 'yellow':
          this.oscs[key].frequency.value = 311.13;
          break;
        case 'green':
          this.oscs[key].frequency.value = 329.63;
          break;
        case 'blue':
          this.oscs[key].frequency.value = 349.23;
          break;
        case 'indigo':
          this.oscs[key].frequency.value = 369.99;
          break;
        case 'purple':
          this.oscs[key].frequency.value = 392.00;
          break;
      }
      this.oscs[key].start();
    }
  },

  // notes: {
  //   C4: 261.63,
  //   Db4: 277.18,
  //   D4: 293.66,
  //   Eb4: 311.13,
  //   E4: 329.63,
  //   F4: 349.23,
  //   Gb4: 369.99,
  //   G4: 392.00,
  //   Ab4: 415.30,
  //   A4: 440.00,
  //   Bb4: 466.16,
  //   B4: 493.88
  // }
};

