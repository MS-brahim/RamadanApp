import React,{useEffect} from 'react';
import {
    ScrollView,StyleSheet,Text,
    TextInput,Alert,Image
} from 'react-native';
import { Auth } from '../../shared/models/auth.model'
import {AuthEnum} from '../../shared/enums/auth.enum';
// import { user } from 'react-native-firebase';
import ButtonShared from '../../shared/components/ButtonShared';
// import firebase from '../../../firebase/firebase';


export function SignUp(props:any) {

    // let authEnum = AuthEnum;
    const [first_name, onChangeFname] = React.useState(""); 
    const [last_name, onChangeLname] = React.useState(""); 
    const [email, onChangeEmail] = React.useState(""); 
    const [password, onChangePassword] = React.useState("");

    async function add(){
        console.log('add pressed')
        // await firebase.auth()
        //         .createUserWithEmailAndPassword(email,password)
        //         .then((res:any) => {
        //             console.log(res.user);
                    
        //             navigateToSignIn();
        //         }).catch((err:any) => {
        //             console.log(err);
                    
        //         });
        // registerAuth(first_name,last_name,email,password)
       
        
        // let auth = new Auth();

        // auth.email=email;
        // auth.password=password;

    }
    
    function navigateToSignIn() {
        props.navigation.navigate('Sign in')
    }
    
    return (
        <ScrollView style={styles.container}>
            {/* <Text>  {authEnum.BOOKED}  {authEnum.FREE}</Text> */}

            {/* <Image  source={require('../../../assets/logo.png')} /> */}
            <TextInput
                style={styles.input}
                placeholder={'first name'}
                placeholderTextColor="white"
                onChangeText={onChangeFname}
                value={first_name}
            />
            <TextInput
                style={styles.input}
                placeholder={'last name'}
                placeholderTextColor="white"
                onChangeText={onChangeLname}
                value={last_name}
            />
            <TextInput
                style={styles.input}
                placeholder={'exemple@gmail.co'}
                placeholderTextColor="white"
                onChangeText={onChangeEmail}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder={'********'}
                placeholderTextColor="white"
                secureTextEntry={true}
                onChangeText={onChangePassword}
                value={password}
            />
            <ButtonShared text="SIGN UP"
                onPress={() => {
                    // Alert.alert('Sign in');
                    add()
                }}
            /> 
            <Text style={styles.signLink}>Have an account ? 
                <Text style={styles.toSignUp} onPress={() =>navigateToSignIn()}>
                    &nbsp; Sign In
                </Text>
            </Text>
        </ScrollView>
    );
}

export function Test(){
    console.log('hola')
}

const styles = StyleSheet.create({
    container: {
        padding:30,
        minWidth:370,
        backgroundColor:'skyblue'


    },
    input: {
        height: 40,
        margin: 12,
        padding:8,
        borderBottomWidth:1,
        borderBottomColor:'#fff',

    },
    signLink: {
        marginTop:15,
        color:'#fff',
        marginBottom:80,
        textAlign:'right',
    },
    toSignUp :{
        fontWeight: 'bold',
        color: 'red',
    }
});