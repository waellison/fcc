class QuoteText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Never believe anything you read on the internet." };

    this.update = this.update.bind(this);
  }
  update(nextState) {
    this.setState({
      text: nextState.text });

  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "text" }, /*#__PURE__*/
      React.createElement("p", null,
      this.state.text)));



  }}


class QuoteAuthor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Abraham Lincoln" };

    this.update = this.update.bind(this);
  }
  update(nextState) {
    this.setState({
      text: nextState.text });

  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "author" }, /*#__PURE__*/
      React.createElement("p", null, "\u2014 ",
      this.state.text)));



  }}


class NewQuoteButton extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(event) {
    console.log("requested a new quote");
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("a", { href: "#", id: "new-quote" }, "Get a New Quote"));



  }}


class TwitterShareButton extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(event) {
    console.log("user wishes to tweet this quote");
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("a", { href: "https://www.twitter.com/intent/tweet/ImagineSomethingWholesome", id: "tweet-quote" }, /*#__PURE__*/
      React.createElement("i", { className: "fa-brands fa-twitter" }), "\xA0Share on Twitter"));


  }}


const ButtonContainer = () => {
  return /*#__PURE__*/(
    React.createElement("div", { id: "buttonContainer" }, /*#__PURE__*/
    React.createElement(NewQuoteButton, null), " \u2022 ", /*#__PURE__*/React.createElement(TwitterShareButton, null)));


};

const Quote = () => {
  return /*#__PURE__*/(
    React.createElement("div", { id: "quote" }, /*#__PURE__*/
    React.createElement(QuoteText, null), /*#__PURE__*/
    React.createElement(QuoteAuthor, null)));


};

let quoteBox = document.getElementById("quote-box");
ReactDOM.render( /*#__PURE__*/
React.createElement("div", null, /*#__PURE__*/
React.createElement(Quote, null), /*#__PURE__*/
React.createElement(ButtonContainer, null)),

quoteBox);