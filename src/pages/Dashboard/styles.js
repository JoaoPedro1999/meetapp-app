import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  background: #000;
  height: 64px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const ImageLogo = styled.Image`
  width: 24px;
  height: 24px;
`;

export const Card = styled.View`
  margin-top: 20px;
  align-self: center;
  align-items: center;
  background: #fff;
  width: 345px;
  height: 315px;
`;

export const MeetupInformation = styled.View``;

export const MeetupTitle = styled.Text`
  align-self: flex-start;
  font-size: 18px;
  color: #333333;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const MeetupDate = styled.Text`
  font-size: 13px;
  color: #333333;
  font-weight: bold;
  align-self: center;
  margin-top: 5px;
`;

export const MeetupLocation = styled.Text`
  font-size: 13px;
  color: #333333;
  font-weight: bold;
  align-self: center;
  margin-top: 5px;
`;

export const MeetupOrganizer = styled.Text`
  font-size: 13px;
  color: #333333;
  font-weight: bold;
  align-self: center;
  margin-top: 5px;
`;
