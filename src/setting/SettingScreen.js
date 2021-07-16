import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import css from './SettingCss';
import CheckBox from '@react-native-community/checkbox';

function SettingScreen({navigation, route}) {
    const [visible, setVisible] = useState(false);

    return (
        <View style={css.container}>
            <Text style={css.title_text}>Server mặc định</Text>
            <Text style={css.text_info}>http://</Text>
            <View style={css.borderWidth1}/>
            <TouchableOpacity
                onPress={() => setVisible(!visible)}>
                <View style={css.style_check_box}>
                    <CheckBox value={visible} onChange={() => setVisible(!visible)}/>
                    <Text>Chọn server khác</Text>
                </View>
            </TouchableOpacity>

            <View style={css.borderWidth1}/>
            {
                visible ?
                    <View>
                        <Text style={css.title_text}>HOST</Text>
                        <TextInput style={css.text_input_info} value="msale.mobifone.vn"/>
                        <Text style={css.title_text}>HTTP PORT</Text>
                        <TextInput style={css.text_input_info} value="8080"/>
                        <Text style={css.title_text}>HTTPS PORT</Text>
                        <TextInput style={css.text_input_info} value="8443"/>
                    </View>
                    : <View/>
            }

            <TouchableOpacity style={css.button_save} activeOpacity={0.8}
                              onPress={() => navigation.goBack()}>
                <Text style={css.style_text_button}>LƯU CẤU HÌNH</Text>
            </TouchableOpacity>
            <TouchableOpacity style={css.button_back} activeOpacity={0.8}
                    onPress={() => navigation.goBack()}>
                    <Text style={css.style_text_button}>TRỞ VỀ</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SettingScreen;
