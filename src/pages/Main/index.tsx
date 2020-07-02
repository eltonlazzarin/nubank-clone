import React from 'react';

import {
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import { MaterialIcons as Icon } from '@expo/vector-icons';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Tabs from '../../components/Tabs';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardItem,
  HeaderText,
  CardContent,
  CardFooter,
  Title,
  Description,
  Strong,
  Anotation,
  AnotationText,
  FooterText,
  StrongFooter,
} from './styles';

export default function Main() {
  let offset = 0;

  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );

  function handleStateChange(event: NativeSyntheticEvent<NativeScrollEvent>) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let menuIsOpened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      translateY.setOffset(offset);
      translateY.setValue(0);

      if (translationY >= 100) {
        menuIsOpened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: menuIsOpened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = menuIsOpened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={handleStateChange}
        >
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, 380],
                    outputRange: [-50, 0, 320],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          >
            <CardHeader>
              <CardItem>
                <Icon name="credit-card" size={28} color="#999" />
                <HeaderText>Cartão de crédito</HeaderText>
              </CardItem>
            </CardHeader>

            <CardContent>
              <Title>Fatura atual</Title>
              <Description>
                R$ <Strong> 563.255</Strong>,21
              </Description>
              <FooterText>
                Limite disponível <StrongFooter>R$ 1.036.744,79</StrongFooter>
              </FooterText>
            </CardContent>

            <CardFooter>
              <Icon name="home" size={28} color="#999" />

              <Anotation>
                <AnotationText>Compra mais recente em</AnotationText>
                <AnotationText>MePy *PorscheMacan no...</AnotationText>
              </Anotation>

              <Icon name="keyboard-arrow-right" size={28} color="#999" />
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY} />
    </Container>
  );
}
