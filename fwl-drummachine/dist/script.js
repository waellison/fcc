const drumPads = [
{
  href: "https://www.burnkit2600.com/temp/HR-16/HR-16-WAVs/31-crash%20cymbal.wav",
  description: "crash cymbal",
  key: "Q",
  code: 81 },

{
  href: "https://www.burnkit2600.com/temp/HR-16/HR-16-WAVs/28-foot%20closed%20hat.wav",
  description: "hi-hat",
  key: "W",
  code: 87 },

{
  href: "https://trxcymbals.com/wp-content/uploads/2015/03/10-inch-splash-MDM.mp3",
  description: "splash cymbal",
  key: "E",
  code: 69 },

{
  href: "http://www.burnkit2600.com/temp/HR-16/HR-16-WAVs/19-10power%20tom.wav",
  description: "high tom",
  key: "A",
  code: 65 },

{
  href: "https://www.burnkit2600.com/temp/HR-16/HR-16-WAVs/21-10dbl%20head%20tom.wav",
  description: "medium tom",
  key: "S",
  code: 83 },

{
  href: "https://www.burnkit2600.com/temp/HR-16/HR-16-WAVs/22-14dbl%20head%20tom.wav",
  description: "floor tom",
  key: "D",
  code: 68 },

{
  href: "https://www.burnkit2600.com/temp/HR-16/HR-16-WAVs/15-electronic%20snare.wav",
  description: "snare",
  key: "Z",
  code: 90 },

{
  href: "https://www.burnkit2600.com/temp/HR-16/HR-16-WAVs/05-22dbl%20hd%20kick%20a.wav",
  description: "bass drum",
  key: "X",
  code: 88 },

{
  href: "https://www.burnkit2600.com/temp/HR-16/HR-16-WAVs/30-ride%20cymbal%20bell.wav",
  description: "ride cymbal",
  key: "C",
  code: 67 }];



class Drum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.description,
      keyChar: props.keyChar,
      code: props.keyCode,
      href: props.href };

    this.eventHandler = this.eventHandler.bind(this);
  }
  eventHandler(event) {
    let displayDestination = document.getElementById("display");
    let audioElement = document.getElementById(this.state.keyChar);

    if (event.type === "click" ||
    event.keyCode === this.state.code) {
      ReactDOM.render( /*#__PURE__*/React.createElement("h1", null, this.state.description), displayDestination);
      audioElement.play();
    }
  }
  componentDidMount() {
    document.addEventListener("keydown", this.eventHandler);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.eventHandler);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("button", { id: this.state.description, className: "drum-pad", onClick: this.eventHandler },
      this.state.keyChar, /*#__PURE__*/
      React.createElement("audio", { id: this.state.keyChar, className: "clip", src: this.state.href })));


  }}


const DrumSet = () => {
  return /*#__PURE__*/(
    React.createElement("div", null,

    drumPads.map(drum => /*#__PURE__*/React.createElement(Drum, { description: drum.description, keyChar: drum.key.toUpperCase(), keyCode: drum.code, href: drum.href }))));



};

let drumMachine = document.getElementById("drums");
ReactDOM.render( /*#__PURE__*/
React.createElement(DrumSet, null),
drumMachine);