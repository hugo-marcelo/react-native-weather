import React from 'react';
import LottieView from 'lottie-react-native';
import suncloud from '../../assets/lottie/2115-suncloud.json';

export default function Loading() {
  return (
    <LottieView autoPlay autoSize loop resizeMode="contain" source={suncloud} />
  );
}
