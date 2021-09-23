import React, {useState} from 'react';
import {
  Text,
  View,
  Switch,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import {Main} from '../';

import {HeaderBar} from '../../components';
import {COLORS, FONTS, icons, SIZES} from '../../constants';
import {styles} from './style';

const SectionTitle = ({title}) => {
  return (
    <View style={{marginTop: SIZES.padding}}>
      <Text style={{color: COLORS.lightGray3, ...FONTS.h4}}>{title}</Text>
    </View>
  );
};

const OptionSetting = ({title, value, type, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={type === 'button' ? false : true}
      style={styles.containerOptions}>
      <Text style={[styles.flex1, {color: COLORS.white, ...FONTS.h3}]}>
        {title}
      </Text>
      <View style={styles.valueOptions}>
        <Text
          style={{
            color: COLORS.lightGray3,
            marginRight: SIZES.radius,
            ...FONTS.h3,
          }}>
          {value}
        </Text>
        {type === 'button' ? (
          <Image source={icons.rightArrow} style={styles.iconToRight} />
        ) : (
          <Switch value={value} onValueChange={() => onPress(value)} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const Profile = () => {
  const [faceID, setFaceID] = useState();
  return (
    <Main>
      <View style={styles.container}>
        <HeaderBar title="Profile" />
        <ScrollView style={styles.main}>
          <View style={styles.containerInfo}>
            <View style={styles.info}>
              <Text style={{color: COLORS.white, ...FONTS.h3}}>
                minhnndev@hotmail.com
              </Text>
              <Text style={{color: COLORS.lightGray3, ...FONTS.h4}}>
                ID: 1000010001
              </Text>
            </View>
            <View style={styles.containerVerify}>
              <Image source={icons.verified} style={styles.iconVerified} />
              <Text style={{color: COLORS.lightGreen, ...FONTS.h4}}>
                {' '}
                Verified
              </Text>
            </View>
          </View>
          <SectionTitle title="APP" />
          <OptionSetting
            title="Screen"
            value="Home"
            type="button"
            onPress={() => console.log('Success')}
          />
          <OptionSetting
            title="Appearance"
            value="Dark"
            type="button"
            onPress={() => console.log('Success')}
          />
          <SectionTitle title="ACCOUNT" />
          <OptionSetting
            title="Payment Currency"
            value="USD"
            type="button"
            onPress={() => console.log('Success')}
          />
          <OptionSetting
            title="Language"
            value="English"
            type="button"
            onPress={() => console.log('Success')}
          />
          <SectionTitle title="SECURITY" />
          <OptionSetting
            title="FaceID"
            type="switch"
            onPress={value => setFaceID(value)}
          />
          <OptionSetting
            title="Password"
            type="button"
            onPress={() => console.log('Success')}
          />
          <OptionSetting
            title="Change Password"
            type="button"
            onPress={() => console.log('Success')}
          />
          <OptionSetting
            title="2-Factor Authentication"
            type="button"
            onPress={() => console.log('Success')}
          />
        </ScrollView>
      </View>
    </Main>
  );
};

export default Profile;
