import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert, Modal, ScrollView } from 'react-native';
import db from '../config';
import firebase from 'firebase';
import { ThemeColors } from 'react-navigation';

export default class WelcomeScreen extends Component {
  constructor(){
    super()
    this.state={
      emailId : '',
      password: '',
      firstName: '',
      lastName: '',
      address: '',
      contact: '',
      confirmPassword: '',
      isModalVisible: false,
    }
  }
  showModal =()=>{
    return(
      <Modal animationType='fade'
      transparent={true} visible={this.state.isModalVisible}>
        <View>
          {/* style */}
        <ScrollView>
          <Text style={styles.title}> 
            Registration
          </Text>
          <TextInput placeholder= 'Enter Your First Name Here' 
          style={styles.loginBox}
          onChangeText={(Text)=>{
            this.setState({
              firstName:text
            })
          }}>
            
          </TextInput>
          
          <TextInput placeholder= 'Enter Your Last Name Here' 
          style={styles.loginBox}
          onChangeText={(Text)=>{
            this.setState({
              lastName:text
            })
          }}>
            
          </TextInput>
          
          <TextInput placeholder= 'Enter Your Addres Here'
          multiline={true}
          style={styles.loginBox}
          onChangeText={(Text)=>{
            this.setState({
              address:text
            })
          }}>
            
          </TextInput>
         
          <TextInput placeholder= 'Enter Your Contact Number Here' 
          style={styles.loginBox}
          onChangeText={(Text)=>{
            this.setState({
              contact:text
            })
          }}>
            
          </TextInput>

          <TextInput placeholder= 'Enter Your Email Here' 
          style={styles.loginBox}
          onChangeText={(Text)=>{
            this.setState({
              emailId:text
            })
          }}>
            
          </TextInput>

          <TextInput placeholder= 'Enter Your Password Here' 
          secureTextEntry={true}
          style={styles.loginBox}
          onChangeText={(Text)=>{
            this.setState({
              firstName:text
            })
          }}>
            
          </TextInput>

          <TextInput placeholder= 'Confrrm Your Password Here' 
          secureTextEntry={true}
          style={styles.loginBox}
          onChangeText={(Text)=>{
            this.setState({
              confirmPassword:text
            })
          }}>
            
          </TextInput>

          <TouchableOpacity style={styles.button}
          onPress={()=>{
            this.userSignUp(this.state.emailId,this.state.password, this.state.confirmPassword)
          }}
          >
            <Text style={styles.buttonText}>
              Register
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} 
          onPress={()=>{
            this.setState({
              isModalVisible:box
            })
          }}
          > 
            <Text style={styles.buttonText}>
              Cancel
              </Text> 
          </TouchableOpacity>
        </ScrollView>
        </View>
      </Modal>
    )
  }
  userLogin = (emailId, password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId, password)
    .then(()=>{
      return Alert.alert("Successfully Login")
    })
    .catch((error)=> {
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    })
  }

  userSignUp = (emailId, password, confirmPassword) =>{
    if(password!==confirmPassword){
      return(alert('Password Does Not Match'))
    }
    else{
      firebase.auth().createUserWithEmailAndPassword(emailId, password)
    .then((response)=>{
      db.collection('users').add({
        first_name:this.state.firstName,
        last_name:this.state.lastName,
        contact:this.state.contact,
        address:this.state.address,
        email_Id:this.state.emailId,
    

      })
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    });
    }
    
  }


  render(){
    return(
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Text style={styles.title}>Book Santa</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TextInput
          style={styles.loginBox}
          placeholder="example@booksanta.com"
          placeholderTextColor = "#ffff"
          keyboardType ='email-address'
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        />

        <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="password"
          placeholderTextColor = "#ffff"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
          <TouchableOpacity
            style={[styles.button,{marginBottom:20, marginTop:20}]}
            onPress = {()=>{this.userLogin(this.state.emailId, this.state.password)}}
            >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>{
              this.showModal()
            }}
            >
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F8BE85'
  },
  profileContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title :{
    fontSize:65,
    fontWeight:'300',
    paddingBottom:30,
    color : '#ff3d00'
  },
  loginBox:{
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor : '#ff8a65',
    fontSize: 20,
    margin:10,
    paddingLeft:10
  },
  button:{
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#ff9800",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText:{
    color:'#ffff',
    fontWeight:'200',
    fontSize:20
  },
  buttonContainer:{
    flex:1,
    alignItems:'center'
  }
})
