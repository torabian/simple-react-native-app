import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

/**
 * based on https://github.com/nirsky/react-native-size-matters
 * Guideline sizes are based on standard ~5" screen mobile device
 * Sizes are scaled according to these guidelines.
 * The idea is to develop against a ~5" screen size and apply these scaling methods
 * to scale up or down
 **/

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

/**
 * scaling linearly based on screen width
 **/
const scale = size => (width / guidelineBaseWidth) * size;

/**
 * scaling linearly based on screen height
 **/

const verticalScale = size => (height / guidelineBaseHeight) * size;

/**
 * scaling according to own factor based on screen width
 * @param factor factor to scale by. default is 0.5
 **/

const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export {scale, verticalScale, moderateScale};
