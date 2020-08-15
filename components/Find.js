import ValidationComponent from 'react-native-form-validator';
import React, {Component}  from 'react';
import {View, Text, TextInput, Alert, TouchableOpacity} from 'react-native';
import { styles } from '../assets/styles.js';
 
export default class FindForm extends ValidationComponent {

    constructor(props) {
      super(props);
        this.state = {first: "", last: "", phone: "", subject: "", grade: "", age: "", stateZone: "", email: "", tutor: "", where: "", anything: ""};
    }
     
    _onSubmit() {
      // Call ValidationComponent validate method
        if (this.validate({
            first: {required: true},
            last: {required: true},
            phone: {required: true, number: true},
            subject: {required: true},
            grade: {required: true},
            age: {required: true},
            stateZone: {required: true},
            email: {email: true, required:true},
            tutor: {required: false},
            where: {required: true},
            anything: {required: false}
        })){
            alert(this.state.first + '\n' + this.state.last + '\n' + this.state.phone + '\n' + this.state.subject + '\n' + this.state.grade + '\n' + this.state.age + '\n' + this.state.stateZone + '\n' + this.state.email + '\n' + this.state.tutor + '\n' + this.state.where + '\n' + this.state.anything);
        }
        else{
          alert(this.getErrorMessages())
        }
    }
      render() {
          return (
            <View>
              <TextInput style={styles.inputStyleFind} ref="first" placeholder="First Name" onChangeText={(first) => this.setState({first})} value={this.state.first} />
              <TextInput style={styles.inputStyleFind} ref="last" placeholder="Last Name" onChangeText={(last) => this.setState({last})} value={this.state.last} />
              <TextInput style={styles.inputStyleFind} ref="phone" placeholder="Phone Number" onChangeText={(phone) => this.setState({phone})} value={this.state.phone} />
              <TextInput style={styles.inputStyleFind} ref="subject" placeholder="Subject" onChangeText={(subject) => this.setState({subject})} value={this.state.subject} />
              <TextInput style={styles.inputStyleFind} ref="grade" placeholder="Grade" onChangeText={(grade) => this.setState({grade})} value={this.state.grade} />
              <TextInput style={styles.inputStyleFind} ref="age" placeholder="Age" onChangeText={(age) => this.setState({age})} value={this.state.age} />
              <TextInput style={styles.inputStyleFind} ref="stateZone" placeholder="State/Timezone" onChangeText={(stateZone) => this.setState({stateZone})} value={this.state.stateZone} />
              <TextInput style={styles.inputStyleFind} ref="email" placeholder="Email Address" onChangeText={(email) => this.setState({email})} value={this.state.email} />
              <TextInput style={styles.inputStyleFind} ref="tutor" placeholder="Preferred Tutor's Name" onChangeText={(tutor) => this.setState({tutor})} value={this.state.tutor} />
              <TextInput style={styles.inputStyleFind} ref="where" placeholder="Where did you hear about us?" onChangeText={(where) => this.setState({where})} value={this.state.where} />
              <TextInput style={styles.inputStyleFind} ref="anything" placeholder="Anything Else?" onChangeText={(anything) => this.setState({anything})} value={this.state.anything} />
              <TouchableOpacity style={styles.submitStyle} onPress={() => this._onSubmit()}>
                <Text>Submit</Text>
              </TouchableOpacity>
            </View>
          );
      }
     
    }

export{
    FindForm
}

