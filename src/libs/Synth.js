class Synth {
    constructor() {
        this.synth = window.speechSynthesis;
        this.synth.onvoiceschanged = function () {
            this.voices = this.synth.getVoices();
            this.setVoice("Microsoft Maria Desktop - Portuguese(Brazil)");
        }.bind(this);
    }

    setVoice(voiceUri) {
        this.voice = this.voices.filter((v, i, a) => v.voiceURI === voiceUri)[0];
    }

    getVoices() {
        return this.voices;
    }

    speak(text) {
        const utterThis = new SpeechSynthesisUtterance(text);
        utterThis.voice = this.voice;
        this.synth.speak(utterThis);
    }
}

const synth = new Synth();
export default synth;