import ValidationComponent from 'react-native-form-validator';
import React, {Component}  from 'react';
import {View, Text, TextInput, Alert, TouchableOpacity} from 'react-native';
import { styles } from '../assets/styles.js';
 
export default class ApplyForm extends ValidationComponent {

    constructor(props) {
      super(props);
        this.state = {first: "", last: "", email: "", where: "", anything: ""};
    }
     
    _onSubmit() {
      // Call ValidationComponent validate method
        if (this.validate({
            first: {required: true},
            last: {required: true},
            email: {email: true, required:true},
            where: {required: true},
            anything: {required: false}
        })){
            alert(this.state.first + '\n' + this.state.last + '\n' + this.state.email + '\n' + this.state.where + '\n' + this.state.anything);
        }
        else{
          alert(this.getErrorMessages())
        }
    }
      render() {
          return (
            <View>
              <TextInput style={styles.inputStyle} ref="first" placeholder="First Name" onChangeText={(first) => this.setState({first})} value={this.state.first} />
              <TextInput style={styles.inputStyle} ref="last" placeholder="Last Name" onChangeText={(last) => this.setState({last})} value={this.state.last} />
              <TextInput style={styles.inputStyle} ref="email" placeholder="Email Address" onChangeText={(email) => this.setState({email})} value={this.state.email} />
              <TextInput style={styles.inputStyle} ref="where" placeholder="Where did you hear about us?" onChangeText={(where) => this.setState({where})} value={this.state.where} />
              <TextInput style={styles.inputStyle} ref="anything" placeholder="Anything Else?" onChangeText={(anything) => this.setState({anything})} value={this.state.anything} />
              <TouchableOpacity style={styles.submitStyle} onPress={() => this._onSubmit()}>
                <Text>Submit</Text>
              </TouchableOpacity>
            </View>
          );
      }
     
    }

export{
    ApplyForm
}
