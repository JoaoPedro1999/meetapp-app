/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';
import logo from '../../assets/logo.png';
import Background from '../../components/Background';

import {
  Container,
  Title,
  Header,
  Card,
  ImageLogo,
  MeetupInformation,
  MeetupTitle,
  MeetupDate,
  MeetupLocation,
  MeetupOrganizer,
} from './styles';

function Dashboard() {
  return (
    <Background>
      <Container>
        <Header>
          <ImageLogo source={logo} />
        </Header>
        <Title>- 31 de Maio -</Title>
        <Card>
          <ImageLogo source={logo} />
          <MeetupInformation>
            <MeetupTitle>Meetup de React Native</MeetupTitle>
            <MeetupDate>24 de Junho, às 20h</MeetupDate>
            <MeetupLocation>Rua Guilherme Gembala, 260</MeetupLocation>
            <MeetupOrganizer>Organizador: Diego Fernandes</MeetupOrganizer>
          </MeetupInformation>
        </Card>
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard);
