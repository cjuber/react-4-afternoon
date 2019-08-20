import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class ClassList extends Component {
  constructor() {
    super()
    
    this.state = {

      students: [],
      classID: ''
      
    }
  }

  componentDidMount(){
    
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then(results =>{

      this.setState({
        students: results.data,
        classID: this.props.match.params.class
      })
    })

  }

  render() {
    
      console.log(this.state.classID)
  
   
    
    const mappedStudents = this.state.students.map((student, i) => (
      <Link to={{     pathname:`/student/${student.id}`, state:{classID: this.props.match.params.class}   }}  key={i}><h3> {student.first_name} {student.last_name} </h3></Link>

    ))
    
    return (
      <div className="box">
        <Link exact to='/'><h1>Back</h1></Link>
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {mappedStudents}
      </div>
    )
  }
}