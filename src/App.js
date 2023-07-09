export default function App({ $target, initialState }) {
  const $div = document.createElement("div");
  $target.appendChild($div);

  this.state = initialState;
  this.setState = nextState => {
    this.state = nextState;
    this.render();
  }
  this.render = () => {}
  this.render()
}