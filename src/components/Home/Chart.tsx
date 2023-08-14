import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LineChart} from 'react-native-chart-kit';
import {scale, screenWidth} from 'theme/responsiveSize';
import { Label, ShadowCard } from 'components/Elements';
import { COLORS } from 'theme/theme';

const Chart: React.FC = () => {
  return (
    <ShadowCard style={styles.mainWrapper}>
      <Label content='Consistancy' type='h3' color={COLORS.blue} />
      <LineChart
        data={{
          labels: ['1', '2', '3', '4', '5', '6'],
          datasets: [
            {
              color: (opacity = 1) => '#FDBA5D',
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
            {
              color: (opacity = 1) => '#1B21B5',
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={screenWidth - scale(64)} // from react-native
        withVerticalLines={false}
        height={250}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,

          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '0',
            // strokeWidth: "2",
            // stroke: "#ffa726"
          },
        }}
        bezier
        style={{
          alignSelf: 'flex-end',
          marginVertical: scale(16)
        }}
      />
    </ShadowCard>
  );
};

export default Chart;

const styles = StyleSheet.create({
  mainWrapper: {
    marginVertical: scale(16),
    padding: scale(20),
    borderRadius: scale(30),
    backgroundColor: '#fff',
    width: '100%',
  },
});
