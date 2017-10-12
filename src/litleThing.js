// NOTE: THIS SI MULTIPLE TOGGLE BUTTON BUILD IN REACT


// class Welcome extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       active: props.active,
//       change: false
//     }
//   }
//
//   componentWillReceiveProps() {
//     const { change } = this.state
//     this.setState({
//       active: change,
//       change: false
//     })
//   }
//
//   render(){
//     return (
//       <button
//         onClick={this._handleButton.bind(this)}>
//           boton {this.state.active.toString()}
//       </button>
//     )
//   }
//
//   _handleButton(){
//     this.setState({
//       change: true
//     }, () => {
//       this.props._handleState()
//     })
//   }
// }
//
// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       active: false
//     }
//   }
//   render() {
//     const list = [1, 2,3 ,4]
//     const { active, changeNombre } = this.state
//
//     return (
//       <div>
//         <Welcome
//             _handleState={this._handleState.bind(this)}
//             active={true} />
//         {list.slice(1, list.length).map((unit, index) => (
//           <Welcome
//             _handleState={this._handleState.bind(this)}
//             active={active}
//             key={index} />
//         ))}
//       </div>
//     );
//   }
//
//   _handleState() {
//     this.setState({
//       active: false
//     })
//   }
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
