import {StyleSheet} from 'react-native';
import {scaleHeight, scaleWidth} from '../utils/Utils';
import Colors from '../utils/Colors';


export default StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',

        alignItems:'center',
        padding: scaleWidth(16)

    },
    c_text_input: {
        marginTop: scaleHeight(8),
        flexDirection: 'row',
        borderWidth: 1,
        borderColor:Colors.text_input,
        width: '100%'
    }, btn_login: {
        marginTop: scaleHeight(16),
        width: '100%',
        padding: scaleWidth(16),
        alignItems: 'center',
        backgroundColor: Colors.button_login
    }, btn_login_with_3g: {
        marginTop: scaleWidth(16),
        width: '100%',
        padding: scaleWidth(16),
        alignItems: 'center',
        backgroundColor: Colors.button_login_with_3g
    }, text_login: {
        color:Colors.white
    }, footer_style: {
        color: Colors.text_footer,
        flex: 1,
        textAlign:'center'
    }, text_input_style: {
        width:'100%'
    }, sub_icon: {
        width: scaleWidth(48),
        height: scaleWidth(48),
        borderWidth:  1
    },
})
