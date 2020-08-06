import React from 'react';
import {Button, View} from 'react-native';
import Routes from './route';
import EStyleSheet from 'react-native-extended-stylesheet';
import darkTheme from './src/themes/darkTheme';
import lightTheme from './src/themes/lightTheme';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.toggleTheme=this.toggleTheme.bind(this);

    this.state = {
      shouldRender: true,
      theme: 'light'
    };

    this.renderTheme();
  }

  toggleTheme() {
    const theme = EStyleSheet.value('$theme') === 'light' ? darkTheme : lightTheme;
    EStyleSheet.build(theme);
    this.setState({shouldRender: false, theme:theme}, () => this.setState({shouldRender: true}));
     //TODO: Store this.state.theme
  }

  renderTheme=()=>{
    //TODO: Get theme value from storage
    //const theme = 
    //EStyleSheet.build(theme);
    EStyleSheet.build(lightTheme);
  }


  render() {
    if (this.state.shouldRender) {
      const buttonTitle = EStyleSheet.value('$theme') === 'light' ? 'Set dark theme' : 'Set light theme';
      return (
          <View style={{flex: 1}}>
            <Button title={buttonTitle} color={EStyleSheet.value('$primaryColor')} onPress={() => this.toggleTheme()}/>
            <Routes {...this.props}/>
          </View>
      );
    } else {
      return null;
    }
  }

}

export default App;
