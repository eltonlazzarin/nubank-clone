import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #8b10ae;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`;

export const Card = styled(Animated.View)`
  flex: 1;
  background: #fff;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  border-right-color: #00bcc9;
  border-right-width: 7px;
`;

export const CardItem = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderText = styled.Text`
  margin-left: 20px;
  font-size: 16px;
  color: #999;
`;

export const CardContent = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px;
  border-right-color: #7ed321;
  border-right-width: 7px;
`;

export const Title = styled.Text`
  color: #00bcc9;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Description = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: #00bcc9;
`;

export const Strong = styled.Text`
  color: #00bcc9;
  font-weight: bold;
`;

export const FooterText = styled.Text`
  font-size: 15px;

  margin: 12px 0 20px;
`;

export const StrongFooter = styled.Text`
  font-weight: bold;
  color: #7ed321;
`;

export const Anotation = styled.View`
  flex-direction: column;
`;

export const AnotationText = styled.Text`
  font-size: 15px;
  color: #999;
`;

export const CardFooter = styled.View`
  padding: 16px 30px 16px;
  background: #eee;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
