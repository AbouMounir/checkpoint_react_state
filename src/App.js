import profile from './Nahoua.jpg'
import React from 'react'
import './App.css';
import Profile from './profile/Profile'

class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      fullName : "Coulibaly Nahoua Aruna",
      profession : "Développeur Full-Stack SIG",
      imgSrc : {profile},
      bio : <div> 
               <p> Un développeur Full Stack SIG est un professionnel de la technologie qui possède une expertise en matière de développement de logiciels pour les systèmes d'information géographique (SIG). Il est capable de travailler sur toutes les couches d'une application web SIG, depuis la base de données jusqu'à l'interface utilisateur.</p>  
               <p>En plus de maîtriser les langages de programmation tels que JavaScript, Python, HTML/CSS, et les frameworks comme React, Angular, Node.js, Flask, Django, il possède également une solide connaissance des outils SIG tels que QGIS, ArcGIS, Mapbox, OpenLayers, Leaflet, etc.</p> 
               <p>Avec cette expertise, il peut concevoir, développer et déployer des applications SIG avancées, qui permettent aux utilisateurs de visualiser, d'analyser et de gérer les données géospatiales avec efficacité et précision. En bref, un développeur Full Stack SIG est un expert en programmation et en géomatique qui est capable de résoudre des problèmes complexes en utilisant des technologies innovantes.</p>
            </div>,
      shows : true,
      count : 0
    }
  }

  handleClick = () => {
    if (this.state.shows) {
      this.setState({shows : false})
    } else {
      this.setState({shows : true})
    }
    this.setState({count : 0}) ;
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({count : this.state.count + 1}) ;
    }, 1000);
  }

  render(){
    return (
      <div className="App">
        <button type='button' onClick={this.handleClick}> Show my profile's </button>
        <div> {this.state.shows ? <Profile fullName={this.state.fullName} profession={this.state.profession} bio={this.state.bio}> <img src={profile} alt="Nahoua.jpg"/> </Profile> : <div className='notProfile'> You can't see my profile's</div>} </div>
        <div className='time'> Time interval : {this.state.count} </div>
      </div>
    );
  }
  
}

export default App;
