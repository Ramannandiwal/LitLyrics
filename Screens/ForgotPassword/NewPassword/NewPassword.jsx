/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../../Components/CustomButton';
import RadioButton from '../../../Components/RadioButton';
import Modal1 from '../../../Components/Modal/Modal1';

const NewPassword = ({ navigation }) => {
    const [showModal,setShowModal ]=useState(false);
  
  const [rememberMe, setRememberMe] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword,setConfirmPassword]= useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword,setConfirmShowPassword] = useState(false);
  return (
    <SafeAreaView style={{ backgroundColor: '#FAF7EF', flex: 1 }}>
      <View style={{ paddingHorizontal: 10, backgroundColor: '#FAF7EF' }}>
        <View
          style={{ marginTop: 80, flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{
              color: 'black',
              fontSize: 30,
              fontWeight: 'bold',
              marginLeft: 10,
            }}>
            Create New Password
          </Text>
          <Image
            style={{ width: 35, height: 35, marginLeft: 10 }}
            source={require('../../../assets/lock.png')}
          />
        </View>
        <Text style={{ fontSize: 18, marginLeft: 10, marginTop: 8 }}>
          Enter your new password. If you forget it, then you have to do forget
          password.
        </Text>
      </View>

      <View style={{ padding: 15, marginTop: 20 }}>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="NewPassword"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={!showPassword}
            style={styles.passwordInput}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={
                showPassword
                  ? require('../../../assets/showhide.png')
                  : require('../../../assets/showeye.png')
              }
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>


        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
            secureTextEntry={!showConfirmPassword}
            style={styles.passwordInput}
          />
          <TouchableOpacity onPress={() => setConfirmShowPassword(!showConfirmPassword)}>
            <Image
              source={
                showConfirmPassword
                  ? require('../../../assets/showhide.png')
                  : require('../../../assets/showeye.png')
              }
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.checkboxContainer}>
          <RadioButton
            isSelected={rememberMe}
            label={'Remember Me'}
            onPress={() => setRememberMe(!rememberMe)}
          />
        </View>
        <View></View>
      </View>

      {showModal ?<Modal1
      isVisible={showModal}
      key={"Temp"}
      heading='Reset Password! Successfull'
      smallHeading='password has been changed
successfully'
next={()=>{navigation.navigate('SignIn')}}
buttonText='Go back to Home'
      /> :""}

      {/* Bottom Button */}
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          width: '100%',
          alignItems: 'center',
        }}>
        <CustomButton
          bgcolor={'#BA8B5A'}
          color={'white'}
          onclick={() => {
           setShowModal(true);
          }}
          text={'Continue'}
          width={'90%'}
          key={'temp'}
          radius={30}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  passwordInput: {
    height: 60,
    flex: 1,
    paddingHorizontal: 10,
  },
  eyeIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default NewPassword;
