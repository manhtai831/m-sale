import React, {useState} from 'react';
import {Dimensions, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import css from './ResetPasswordCss';
import Colors from '../utils/Colors';
import {scaleWidth} from '../utils/Utils';

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

function ResetPasswordScreen() {
    const [isVisible, setVisible] = useState(false);
    const PressAction = () => {
        console.log(isVisible);
        setVisible(!isVisible);
    };

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
            <View style={{paddingHorizontal: scaleWidth(24)}}>
                <Text style={css.title_text}>TÀI KHOẢN</Text>
                <TextInput style={css.text_input_info}/>

            </View>
            <View style={{height: 1, backgroundColor: Colors.text_input, marginTop: scaleWidth(24)}}/>
            <View style={{paddingHorizontal: scaleWidth(24)}}>
                <Text style={css.title_text}>SỐ ĐIỆN THOẠI</Text>
                <TextInput style={css.text_input_info}/>
                <TouchableOpacity style={css.button_save} activeOpacity={0.8}
                                  onPress={PressAction}>
                    <View>
                        <Text style={{color: Colors.white, fontSize: scaleWidth(24)}}>LẤY LẠI MẬT KHẨU</Text>
                    </View>

                </TouchableOpacity>
            </View>

        </View>
    );
}

export default ResetPasswordScreen;
