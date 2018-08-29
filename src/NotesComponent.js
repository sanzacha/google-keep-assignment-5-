import React, { Component, Fragment } from 'react';
import AddNotes from './components/addNotes';
import DisplayNotes from './components/displayNotes';

class App extends Component {
  wrapperStyle = {
    marginTop: 20
  }

  constructor(props) {
      super(props);

      this.state = props;
      this.handleDeleteCard = this.handleDeleteCard.bind(this);
  }

  addNewNote(data) {
    this.setState({
      posterData: [...this.state.posterData, data]
  });
  }

  handleDeleteCard (poster) {
    const deleteUpdateData = this.state.posterData.filter(newPosterData => newPosterData.id !== poster.id);
    this.setState({posterData: deleteUpdateData});
  }

  render() {
    console.log("wrapperStyle", this.wrapperStyle)
    return (<Fragment>
            <div style={this.wrapperStyle}>
              <AddNotes addNewNote={this.addNewNote.bind(this)} posterData={this.state.posterData} />
              <DisplayNotes posterData={this.state.posterData} handleDeleteCard={this.handleDeleteCard} />
            </div>
        </Fragment>
    );
  }
}

export default App;
