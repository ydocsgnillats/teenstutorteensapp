import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Stylesheet } from 'react-native';
import { styles } from '../assets/styles.js';
import { create } from 'apisauce';

const api = create ({
baseURL: 'https://www.ydocsgnillats.com'
})

class InputFind extends Component {
                                         
    state = {
        first: '',
        last: '',
        phone: '',
        subject: '',
        grade: '',
        age: '',
        stateZone: '',
        email: '',
        tutor: '',
        where: '',
        anything:''
    }
    
    handleFirst = (text) =>{
        this.setState({ first: text })
    }
    handleLast = (text) =>{
        this.setState({ last: text })
    }
    handlePhone = (text) =>{
        this.setState({ phone: text })
    }
    handleSubject = (text) =>{
        this.setState({ subject: text })
    }
    handleGrade = (text) =>{
        this.setState({ grade: text })
    }
    handleAge = (text) =>{
        this.setState({ age: text })
    }
    handleStateZone = (text) =>{
        this.setState({ stateZone: text })
    }
    handleEmail = (text) =>{
        this.setState({ email: text })
    }
    handleTutor = (text) =>{
        this.setState({ tutor: text })
    }
    handleWhere = (text) =>{
        this.setState({ where: text })
    }
    handleAnything = (text) =>{
        this.setState({ anything: text })
    }
    
    handleEmail = () => {
        api.any({method: 'POST', url: '/tttapp', params: { first: this.first}})
    }

render() {
    return (
    <View>
        <View style = {styles.inputArea}>
            <TextInput placeholder="First Name"
            onChangeText = {this.handleFirst}/>
        </View>
        <View style = {styles.inputArea}>
            <TextInput placeholder="Last Name"
            onChangeText = {this.handleLast}/>
        </View>
        <View style = {styles.inputArea}>
            <TextInput placeholder="Phone"
            onChangeText = {this.handlePhone}/>
        </View>
        <View style = {styles.inputArea}>
            <TextInput placeholder="Subject"
            onChangeText = {this.handleSubject}/>
        </View>
        <View style = {styles.inputArea}>
            <TextInput placeholder="Grade"
            onChangeText = {this.handleGrade}/>
        </View>
        <View style = {styles.inputArea}>
            <TextInput placeholder="Age"
            onChangeText = {this.handleAge}/>
        </View>
        <View style = {styles.inputArea}>
            <TextInput placeholder="State/Timezone"
            onChangeText = {this.handleStateZone}/>
        </View>
        <View style = {styles.inputArea}>
            <TextInput placeholder="Email"
            onChangeText = {this.handleEmail}/>
        </View>
        <View style = {styles.inputArea}>
            <TextInput placeholder="Preferred tutor name"
            onChangeText = {this.handleTutor}/>
        </View>
        <View style = {styles.inputArea}>
            <TextInput placeholder="Where did you hear about us?"
            onChangeText = {this.handleWhere}/>
        </View>
        <View style = {styles.inputArea}>
            <TextInput placeholder="Anything Else?"
            onChangeText = {this.handleAnything}/>
        </View>
        <View style = {styles.submitBtn}>
            <TouchableOpacity
                onPress={() => this.handleEmail}>
                <Text> Submit </Text>
            </TouchableOpacity>
        </View>
    </View>
            )
}
}

class InputApply extends Component {
    state = {
        first: '',
        last: '',
        email: '',
        where: '',
        anything: ''
    }
    handleFirst = (text) =>{
        this.setState({ first: text })
    }
    handleLast = (text) =>{
        this.setState({ last: text })
    }
    handleEmail = (text) =>{
        this.setState({ email: text })
    }
    handleWhere = (text) =>{
        this.setState({ where: text })
    }
    handleAnything = (text) =>{
        this.setState({ anything: text })
    }
    handleEmail = () => {
        api.any({method: 'POST', url: '/tttapp', params: { first: this.first}})
    }
    
    render() {
       return (
            <View>
               <View style = {styles.inputArea}>
                   <TextInput placeholder="First Name"
                   onChangeText = {this.handleFirst}/>
                 </View>
               <View style = {styles.inputArea}>
                   <TextInput placeholder="Last Name"
                   onChangeText = {this.handleLast}/>
                 </View>
               <View style = {styles.inputArea}>
                   <TextInput placeholder="Email"
                   onChangeText = {this.handleEmail}/>
                 </View>
               <View style = {styles.inputArea}>
                 <TextInput placeholder="Where did you hear about us?"
                 onChangeText = {this.handleWhere}/>
               </View>
               <View style = {styles.inputArea}>
                 <TextInput placeholder="Anything else?"
                 onChangeText = {this.handleAnything}/>
               </View>
               <View style = {styles.submitBtn}>
                    <TouchableOpacity
                        onPress={() => this.handleEmail}>
                        <Text> Submit </Text>
                    </TouchableOpacity>
                 </View>
            </View>
               )
    }
}

export{
    InputFind,
    InputApply
}
