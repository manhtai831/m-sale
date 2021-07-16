import React, {useState} from 'react';
import {
    Alert,
    Button,
    Dimensions,
    Image,
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import css from './LoginCss';
import CheckBox from '@react-native-community/checkbox';
import Images from '../utils/Images';
import {scaleWidth} from '../utils/Utils';
import Colors from '../utils/Colors';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    viewWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    modalView: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        elevation: 5,
        transform: [{translateX: -(width * 0.4)},
            {translateY: -90}],
        height: 180,
        width: width * 0.8,
        backgroundColor: '#fff',
        borderRadius: 7,
    }, button_confirm: {
        width: '90%',
        alignItems: 'center',
        padding: scaleWidth(16),
        backgroundColor: Colors.primaryColor,
        margin: scaleWidth(16),
    }, text_title: {
        fontWeight: 'bold',
    },

});


function LoginScreen({navigation}) {
    const [remember, setRemember] = useState(false);

    function checkRemember() {
        remember ? setRemember(!remember) : setRemember(!remember);
    }

    const PressAction = () => {
        console.log(isVisible);
        setVisible(!isVisible);
    };

    const [isVisible, setVisible] = useState(false);

    function CustomDialog() {
        return (
            <Modal animationType="slide"
                   transparent visible={isVisible}
                   presentationStyle="overFullScreen"
                   onDismiss={false}>
                <View style={styles.viewWrapper}>
                    <View style={styles.modalView}>
                        <Text style={styles.text_title}>Rất tiếc</Text>
                        <View style={{height: 12, borderColor: Colors.black}}/>
                        <Text>This is my message</Text>
                        <TouchableOpacity
                            style={styles.button_confirm}
                            onPress={PressAction}>
                            <Text style={{color: Colors.white}}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    }
    return (
        <View style={css.container}>
            <CustomDialog/>
            <Image source={Images.logo}/>
            <View style={css.c_text_input}>
                <Image source={Images.ic_user} style={css.sub_icon}/>
                <TextInput placeholder="Tên đăng nhập" style={css.text_input_style}/>
            </View>
            <View style={css.c_text_input}>
                <Image source={Images.ic_password} style={css.sub_icon}/>
                <TextInput secureTextEntry={true} placeholder="Mật khẩu" style={css.text_input_style}/>
            </View>
            <View style={{flexDirection: 'row', marginTop: 8}}>
                <TouchableOpacity style={{flex: 1}}
                                  onPress={() => checkRemember()}>
                    <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                        <CheckBox value={remember}
                                  onValueChange={() => checkRemember()}/>
                        <Text>Nhớ mật khẩu?</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SettingScreen')}>
                    <Image source={Images.ic_repair}/>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={css.btn_login} activeOpacity={0.8}
                              onPress={() => PressAction()}>
                <Text style={css.text_login}>Đăng nhập</Text>
            </TouchableOpacity>
            <TouchableOpacity style={css.btn_login_with_3g} activeOpacity={0.8}
                              onPress={() => PressAction()}>
                <Text style={css.text_login}>Đăng nhập 3G/4G</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', marginTop: 16}}>
                <TouchableOpacity style={css.footer_style} onPress={() => navigation.navigate('ResetPasswordScreen')}>
                    <Text style={css.footer_style}>Quên mật khẩu</Text>
                </TouchableOpacity>

                <Text style={css.footer_style}>Đăng ký</Text>
            </View>
        </View>
    );
}

export default LoginScreen;
