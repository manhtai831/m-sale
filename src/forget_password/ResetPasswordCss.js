import {StyleSheet} from 'react-native';
import Colors from '../utils/Colors';
import {scaleWidth} from '../utils/Utils';

export default StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column'
    }, title_text: {
        color: Colors.primaryColor,
        fontSize: scaleWidth(18),
        padding: scaleWidth(24),
    }, button_save: {

        padding: scaleWidth(16),
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: Colors.primaryColor,
        margin: scaleWidth(16),

    },text_input_info: {
        paddingVertical: scaleWidth(4),
        borderRadius: scaleWidth(8),
        marginHorizontal: scaleWidth(16),
        paddingHorizontal: scaleWidth(16),
        borderWidth: 1,
        borderColor: Colors.text_input
    },
})
