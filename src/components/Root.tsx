import React from 'react';
import { View, StyleSheet } from 'react-native'

const Root: React.FC<any> = (props) => {

    return (
        <View style={styles.container}>
            {
                props.children
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white',
      justifyContent: 'center'
    }
  });

export default Root
