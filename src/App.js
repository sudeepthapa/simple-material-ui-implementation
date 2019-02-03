import React, { Component, Fragment } from 'react';
import Exercises from './components/exercises/index';
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import {exercises, muscles } from './store'
class App extends Component {

  state={
    exercises,
    exercise:{}
  }

  getExercisesByMuscles(){
    return Object.entries(this.state.exercises.reduce((exercises,exercise)=>{
      const {muscles} = exercise
      exercises[muscles] = exercises[muscles]
      ? [...exercises[muscles], exercise] : [exercise]
      return exercises
    },{}))
}

  handleCategorySelected = category =>{
    this.setState({
      category
    })
  }

  handleExercisesSelected = (id) =>{
    this.setState(({exercises})=>({
      exercise:exercises.find(ex=>ex.id===id)
    }))
  }

  render() {
    const exercises=this.getExercisesByMuscles();
    const {category, exercise} = this.state;
    return (
      <Fragment>
        <Header />
          <Exercises exercises={exercises} exercise={exercise} onSelect={this.handleExercisesSelected} category={category} />
        <Footer muscles={muscles} category={category} onSelect={this.handleCategorySelected}  />
      </Fragment>
    );
  }
}

export default App;
