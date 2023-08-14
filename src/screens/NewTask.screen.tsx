import {Pressable, ScrollView, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {Button, Container, Header, ShadowCard} from 'components/Elements';
import {scale} from 'theme/responsiveSize';
import {TextEditor} from 'components/Home';
import {COLORS, FONT_FAMILY} from 'theme/theme';
import {Person, SuitCase, Timer} from 'constants/iconPath';

const NewTask: React.FC = () => {
  return (
    <Container gradientArray={['#0A7362', '#fff', '#fff']}>
      <Header title="New Task" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <ShadowCard style={styles.titleInputContainer}>
          <TextInput
            placeholder="Title"
            placeholderTextColor={COLORS.placeHolderSecondary}
            style={styles.titleInput}
          />
        </ShadowCard>
        <TextEditor />
        <ShadowCard style={styles.btnContainer}>
          <Pressable>
            <Timer />
          </Pressable>
          <Pressable>
            <SuitCase />
          </Pressable>
          <Pressable>
            <Person />
          </Pressable>
        </ShadowCard>
        <Button type='small' text="CREATE" />
      </ScrollView>
    </Container>
  );
};

export default NewTask;

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
  titleInputContainer: {
    width: '100%',
    height: scale(70),
    borderRadius: scale(40),
    // marginBottom: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: scale(64),
  },
  titleInput: {
    width: '100%',
    height: '100%',
    fontSize: scale(24),
    fontWeight: 'bold',
    fontFamily: FONT_FAMILY.wt_600,
    color: COLORS.tertiaryText,
    paddingHorizontal: scale(20),
  },
  btnContainer: {
    width: '100%',
    height: scale(70),
    borderRadius: scale(40),
    // marginBottom: scale(20),
    alignItems: 'center',
    marginVertical: scale(24),
    paddingHorizontal: scale(20),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
