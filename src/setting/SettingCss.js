import {StyleSheet} from 'react-native';
import Colors from '../utils/Colors';
import {scaleWidth} from '../utils/Utils';

export default StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column'
    },
    borderWidth1: {
        height: 1,
        width: '100%',
        backgroundColor: Colors.text_input
    }, button_save: {

        padding: scaleWidth(16),
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: Colors.primaryColor,
        margin: scaleWidth(16),

    }, style_text_button: {
        color: Colors.white
    }, button_back: {
        padding: scaleWidth(16),
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: Colors.orange,
        marginHorizontal: scaleWidth(16),
    }, title_text: {
        color: Colors.primaryColor,
        fontSize: scaleWidth(18),
        padding: scaleWidth(16),
    }, text_info: {
        fontSize: scaleWidth(18),
        paddingHorizontal: scaleWidth(16),
        paddingBottom: scaleWidth(16),
    }, style_check_box: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: scaleWidth(16)
    }, text_input_info: {
        marginHorizontal: scaleWidth(16),
        paddingHorizontal: scaleWidth(16),
        fontSize: scaleWidth(18),
        borderWidth: 1,
        borderColor: Colors.text_input
    },


})
