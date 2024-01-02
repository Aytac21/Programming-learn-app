## navigation

navigation.navigate
navigation.push
navigation.goBack
navigation.popToTop

## usenavigation

import { useNavigation } from '@react-navigation/native';
const navigation = useNavigation()

## params

route.params
navigation.navigate('Details', { itemId: 86, otherParam: 'anything you want here'});
<Stack.Screen initialParams={{itemId: 42}} />
navigation.setParams({query: "someText"})

## header

<Stack.Screen options={{title: "new screen", headerStyle:{backgroundColor: "red"}, headerTintColor: "white", headerTitleStyle: {fontWeight: "bold"}}} />
<Stack.Screen options={({route}) => ({title: route.params.titleName})} />
navigation.setOptions({ title: 'Updated!' })
<Stack.Navigator screenOptions: {{headerStyle...}}>

## header button

<Stack.Screen options={{headerRight: () => (<Button title="btn" />)}}>

## nested navigation

navigation.navigate('Root', { screen: 'Profile' });
