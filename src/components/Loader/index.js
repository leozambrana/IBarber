import React from 'react';
import { Modal, ActivityIndicator } from 'react-native';
import * as S from './styles';

const Loader = props => {
  const { loading, ...attributes } = props;

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {
        console.log('close modal');
      }}
    >
      <S.ModalBackground>
        <S.ActivityIndicatorWrapper>
          <ActivityIndicator
            animating={true}
            color="#fff"
            size="large"
            style={S.ActivityIndicator}
          />
        </S.ActivityIndicatorWrapper>
      </S.ModalBackground>
    </Modal>
  )
}

export default Loader;