import {Dimensions} from 'react-native';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const baseWidthScreen = 400;
const baseHeightScreen = 800;

export function scaleWidth(size){
    return size * baseWidthScreen/widthScreen;
}

export function scaleHeight(size){
    return size * baseHeightScreen/heightScreen;
}
