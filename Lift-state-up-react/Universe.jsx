class Universe extends React.Component {
  constructor() {
    super();
    this.handleStarshipClick = this.handleStarshipClick.bind(this);
    this.handlePlanetClick = this.handlePlanetClick.bind(this);
    this.state = {
      intransitToPlanet: null,
      intransitToStarShip: null
    };
  }

  handleStarshipClick(person) {
    this.setState({intransitToPlanet: person});
  }

  handlePlanetClick(person) {
    this.setState({intransitToStarShip: person});
  }

  render() {
    return (
      <div className="Universe">
        <h1>Universe</h1>
        <Starship
          person={this.state.intransitToStarShip}
          transport={this.handleStarshipClick}
        />
        <Planet
          person={this.state.intransitToPlanet}
          transport={this.handlePlanetClick}
        />
      </div>
    );
  }
}

class Starship extends React.Component {
  constructor(props) {
    super(props);
    this.transport = this.transport.bind(this);
    this.state = { inhabitants: ["Lauras", "Tobin", "Robot"] };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.person !== nextProps.person) {
      this.setState({inhabitants: this.state.inhabitants.concat(nextProps.person)});
    } 
  } 

  transport(e) {
    this.props.transport(e.target.value);
    this.setState({inhabitants: this.state.inhabitants.filter(name => name !== e.target.value)});
  }

  render() {
    return (
      <div className="Starship" onClick={this.transport}>
        <h3>Starship Finderprise</h3>
        {this.state.inhabitants.map((name) => {
          return (
            <button key={name} value={name} className="Starship button">
              Transport {name}
            </button>
          );
        })}
      </div>
    );
  }
}

class Planet extends React.Component {
  constructor(props) {
    super(props);
    this.transport = this.transport.bind(this);
    this.state = { inhabitants: ["Attilus", "Dennix", "Mobius"] };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.person !== nextProps.person) {
      this.setState({inhabitants: this.state.inhabitants.concat(nextProps.person)});
    }
  } 

  transport(e) {
    this.props.transport(e.target.value);
    this.setState({inhabitants: this.state.inhabitants.filter(name => name !== e.target.value)});
  }

  render() {
    
    return (
      <div className="Planet" onClick={this.transport}>
        <h3>Planet Earth</h3>
        {this.state.inhabitants.map((name) => {
          return (
            <button key={name} value={name} className="Planet button">
              Transport {name}
            </button>
          );
        })}
      </div>
    );
  }
}
  

ReactDOM.render(<Universe />, document.getElementById('root'));