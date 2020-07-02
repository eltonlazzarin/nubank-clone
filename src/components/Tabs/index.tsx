import React, { useState, useEffect } from 'react';

import { Animated } from 'react-native';

import { MaterialIcons as Icon } from '@expo/vector-icons';

import { Container, TabsContainer, TabItem, TabText } from './styles';

interface Props {
  translateY: Animated.Value;
}

const Main: React.FC<Props> = (props) => {
  const [offset, setOffset] = useState(new Animated.ValueXY({ x: -150, y: 0 }));

  useEffect(() => {
    Animated.spring(offset.x, {
      toValue: 0,
      speed: 5,
      bounciness: 20,
    }).start();
  }, []);

  return (
    <Container
      style={{
        transform: [
          {
            translateY: props.translateY.interpolate({
              inputRange: [0, 380],
              outputRange: [0, 30],
              extrapolate: 'clamp',
            }),
          },
        ],
        opacity: props.translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.3],
          extrapolate: 'clamp',
        }),
      }}
    >
      <Animated.View
        style={[{ transform: [...offset.getTranslateTransform()] }]}
      >
        <TabsContainer>
          <TabItem>
            <Icon name="person-add" size={24} color="#fff" />
            <TabText>Indicar amigos</TabText>
          </TabItem>

          <TabItem>
            <Icon name="smartphone" size={24} color="#fff" />
            <TabText>Recarga de celular</TabText>
          </TabItem>

          <TabItem>
            <Icon name="chat-bubble-outline" size={24} color="#fff" />
            <TabText>Cobrar</TabText>
          </TabItem>

          <TabItem>
            <Icon name="attach-money" size={24} color="#fff" />
            <TabText>Doação</TabText>
          </TabItem>

          <TabItem>
            <Icon name="attach-money" size={24} color="#fff" />
            <TabText>Empréstimos</TabText>
          </TabItem>

          <TabItem>
            <Icon name="arrow-downward" size={24} color="#fff" />
            <TabText>Depositar</TabText>
          </TabItem>

          <TabItem>
            <Icon name="arrow-upward" size={24} color="#fff" />
            <TabText>Transferir</TabText>
          </TabItem>

          <TabItem>
            <Icon name="settings" size={24} color="#fff" />
            <TabText>Ajustar limite</TabText>
          </TabItem>

          <TabItem>
            <Icon name="help-outline" size={24} color="#fff" />
            <TabText>Me Ajuda</TabText>
          </TabItem>

          <TabItem>
            <Icon name="lock-open" size={24} color="#fff" />
            <TabText>Bloquear cartão</TabText>
          </TabItem>

          <TabItem>
            <Icon name="credit-card" size={24} color="#fff" />
            <TabText>Cartão virtual</TabText>
          </TabItem>
        </TabsContainer>
      </Animated.View>
    </Container>
  );
};

export default Main;
