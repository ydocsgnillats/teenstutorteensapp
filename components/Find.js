import ValidationComponent from 'react-native-form-validator';
import React, {
    Component
} from 'react';
import {
    View,
    Text,
    TextInput,
    Alert,
    TouchableOpacity
} from 'react-native';
import {
    styles
} from '../assets/styles.js';

export default class FindForm extends ValidationComponent {

    constructor(props) {
        super(props);
        this.state = {
            first: "",
            last: "",
            phone: "",
            subject: "",
            grade: "",
            age: "",
            stateZone: "",
            email: "",
            tutor: "",
            where: "",
            anything: ""
        };
    }

    _onSubmit() {
        // Call ValidationComponent validate method
        if (this.validate({
                first: {required: true},
                last: {required: true},
                phone: {required: true,
                        number: true
                },
                subject: {required: true},
                grade: {required: true},
                age: {required: true},
                stateZone: {required: true},
                email: {email: true,
                        required: true
                },
                tutor: {required: false},
                where: {required: true},
                anything: {required: false}
            }))
            {
            var url = 'https://teens-tutor-teens.herokuapp.com/find'
            const data = JSON.stringify({
                "first": this.state.first,
                "last": this.state.last,
                "phone": this.state.phone,
                "subject": this.state.subject,
                "grade": this.state.grade,
                "age": this.state.age,
                "stateZone": this.state.stateZone,
                "email": this.state.email,
                "tutor": this.state.tutor,
                "where": this.state.where,
                "anything": this.state.anything
            })
            fetch(url, {
                method: 'POST',
                body: data,
                headers: {
                    'Content-Type': 'Application/json'
                }
            })
            alert('Thank you for signing up!')
        } else {
            alert(this.getErrorMessages())
        }
        this.setState({first: ""})
        this.setState({last: ""})
        this.setState({phone: ""})
        this.setState({subject: ""})
        this.setState({grade: ""})
        this.setState({age: ""})
        this.setState({stateZone: ""})
        this.setState({email: ""})
        this.setState({tutor: ""})
        this.setState({where: ""})
        this.setState({anything: ""})
    }
    render() {
        return (
            <View>
                <TextInput
                    style = {styles.inputStyleFind}
                    ref = "first"
                    placeholder = "First Name"
                    onChangeText = {(first) => this.setState({first})}
                    value = {this.state.first}/>
                <TextInput
                    style = {styles.inputStyleFind}
                    ref = "last"
                    placeholder = "Last Name"
                    onChangeText = {(last) => this.setState({last})}
                value = {this.state.last}/>
                <TextInput
                    style = {styles.inputStyleFind}
                    ref = "phone"
                    placeholder = "Phone Number"
                    onChangeText = {(phone) => this.setState({phone})}
                    value = {this.state.phone}/>
                <TextInput
                    style = {styles.inputStyleFind}
                    ref = "subject"
                    placeholder = "Subject"
                    onChangeText = {(subject) => this.setState({subject})}
                    value = {this.state.subject}/>
                <TextInput
                    style = {styles.inputStyleFind}
                    ref = "grade"
                    placeholder = "Grade"
                    onChangeText = {(grade) => this.setState({grade})}
                    value = {this.state.grade}/>
                <TextInput
                    style = {styles.inputStyleFind}
                    ref = "age"
                    placeholder = "Age"
                    onChangeText = {(age) => this.setState({age})}
                    value = {this.state.age}/>
                <TextInput
                    style = {styles.inputStyleFind}
                    ref = "stateZone"
                    placeholder = "State/Timezone"
                    onChangeText = {(stateZone) => this.setState({stateZone})}
                    value = {this.state.stateZone}/>
                <TextInput
                    style = {styles.inputStyleFind}
                    ref = "email"
                    placeholder = "Email Address"
                    onChangeText = {(email) => this.setState({email})}
                    value = {this.state.email}/>
                <TextInput
                    style = {styles.inputStyleFind}
                    ref = "tutor"
                    placeholder = "Preferred Tutor's Name"
                    onChangeText = {(tutor) => this.setState({tutor})}
                    value = {this.state.tutor}/>
                <TextInput
                    style = {styles.inputStyleFind}
                    ref = "where"
                    placeholder = "Where did you hear about us?"
                    onChangeText = {(where) => this.setState({where})}
                    value = {this.state.where}/>
                <TextInput style = {styles.inputStyleFind}
                    ref = "anything"
                    placeholder = "Anything Else?"
                    onChangeText = {(anything) => this.setState({anything})}
                    value = {this.state.anything}/>
                <TouchableOpacity
                    style = {styles.submitStyle}
                    onPress = {() => this._onSubmit()} >
                    <Text> Submit </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export {
    FindForm
}
