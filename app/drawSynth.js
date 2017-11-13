
// module.exports = {
//   audioContext:  new AudioContext(),
//   oscillators: {

//     red: {},
//     // osc2: {},
//     // bass: {}
//   },

// noteOff: function() {
//   for (let key in this.oscillators) {
//     this.oscillators[key].stop()

//   }
// },

// play: function(note, gain, detune) {
//     for (let key in this.oscillators) {
//       let gain = this.audioContext.createGain()
//       this.oscillators[key] = this.audioContext.createOscillator();
//       this.oscillators[key].type = 'sine';
//       this.oscillators[key].frequency.value = note;
//       this.oscillators[key].detune.value = detune;
//       this.oscillators[key].connect(gain)
//       gain.connect(this.audioContext.destination);
//       switch (key) {
//         case 'osc1':
//           this.oscillators[key].detune.value = 0;
//           break;
//         // case 'osc2':
//         //   this.oscillators[key].detune.value = 15;
//         //   break;
//         // case 'bass':
//         //   this.oscillators[key].frequency.value = note/2;
//         //   this.oscillators[key].type = 'square';
//           break;
//       }
//       this.oscillators[key].start();
//     }
// },

//   notes: {
//     C4: 261.63,
//     Db4: 277.18,
//     D4: 293.66,
//     Eb4: 311.13,
//     E4: 329.63,
//     F4: 349.23,
//     Gb4: 369.99,
//     G4: 392.00,
//     Ab4: 415.30,
//     A4: 440.00,
//     Bb4: 466.16,
//     B4: 493.88
//   }
// };

