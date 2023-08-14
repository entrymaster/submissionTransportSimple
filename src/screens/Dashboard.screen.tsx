import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Container, Header, Label} from 'components/Elements';
import {scale} from 'theme/responsiveSize';
import {Chart, TaskTile, TextEditor} from 'components/Home';
import { useNavigation } from '@react-navigation/native';
import { DashboardNavigationProp } from 'navigation/types';

const Dashboard: React.FC = () => {
  const navigation = useNavigation<DashboardNavigationProp>();
  return (
    <Container gradientArray={['#0A7362', '#fff', '#fff']}>
      <Header title="Home" />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Button type="medium" text="CREATE" onPress={()=>navigation.navigate('NewTask')} />
          <Chart />
          <TaskTile title="Make client side documentation">
            <Label content="Today" type="h5" color="#000" />
            <Label content="Today" type="h5" />
            <Label content="Today" type="h5" />
            <Label content="Today" type="h5" />
            <Label content="Today" type="h5" />
          </TaskTile>
          <TaskTile title="Make client side documentation">
            <Label content="Today" type="h5" color="#000" />
            <Label content="Today" type="h5" />
          </TaskTile>
          <TaskTile title="Make client side documentation">
            <Label content="Today" type="h5" color="#000" />
            <Label content="Today" type="h5" />
            <Label content="Today" type="h5" />
            <Label content="Today" type="h5" />
            <Label content="Today" type="h5" />
          </TaskTile>
        </ScrollView>
      </View>
    </Container>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    height: '85%',
    width: '100%',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    bottom: 0,
    position: 'absolute',
    backgroundColor: '#fff',
    padding: scale(22),
    paddingTop: scale(32),
  },
});
