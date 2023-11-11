import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

const NavFavourites = ({ NavFavsStyles }) => {
  const favoritesData = [
    {
      id: '1336',
      icon: 'home',
      name: 'Home',
      location: { lat: 5.4945, lng: -0.4118 },
      description: 'Jordan Gospel Centre, Land of Grace',
    },
    {
      id: '3809',
      icon: 'briefcase',
      name: 'Work',
      location: { lat: 5.5497, lng: -0.3522 },
      description: 'Finger Bites Kitchen, Mile 11',
    },
  ];

  //   const dispatch = useDispatch();
  //   const origin = useSelector(selectOrigin);
  //   const navigation = useNavigation();

  return (
    <FlatList
      style={NavFavsStyles}
      data={favoritesData}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View
          style={[
            tw`bg-gray-200`,
            {
              height: 0.5,
            },
          ]}
        />
      )}
      renderItem={({ item: { name, icon, location, description } }) => (
        <TouchableOpacity style={tw`flex-row items-center py-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-bold text-lg`}>{name}</Text>
            <Text style={tw`text-gray-500`}>{description}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
