import { Card, Container, Content, StyleProvider, Text } from 'native-base';
import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import Colors from '../constants/Colors';
import myAppTheme from '../native-base-theme/variables/myAppTheme';
import getTheme from '../native-base-theme/components';

const HomeScreen = (props) => {
  return (
    // <SafeAreaView style={styles.container}>
    //   <StatusBar
    //     barStyle="light-content"
    //     backgroundColor={Colors.primaryDark}
    //   />
    //   <View>
    //     <Text>Hello World!</Text>
    //   </View>
    // </SafeAreaView>
    <StyleProvider style={getTheme(myAppTheme)}>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor={Colors.primaryDark}
        />
        <Content padder contentContainerStyle={styles.content}>
          <Card style={styles.card}>
            <Text>سلام دنیا 2!</Text>
          </Card>
        </Content>
      </Container>
    </StyleProvider>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
});

export default HomeScreen;
