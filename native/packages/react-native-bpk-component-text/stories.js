/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2018 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */

/* eslint-disable */

import React from 'react';
import {
  colorRed300,
  colorRed500,
  colorBlue700,
  colorGray500,
  colorGreen500,
  colorYellow500,
  colorPink500,
} from 'bpk-tokens/tokens/base.react.native';
import { View, Platform } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import BpkImage from 'react-native-bpk-component-image';
import CenterDecorator from '../../storybook/CenterDecorator';

import BpkText from './index';

// Note this is half the image width when exported from sketch for a 2x device
const sketchWidthAndroid = 698 / 2;
const sketchHeightAndroid = (sketchWidthAndroid * 392) / 698;
const sketchWidthIos = 712 / 2;
const sketchHeightIos = (sketchWidthIos * 424) / 712;

storiesOf('react-native-bpk-component-text', module)
  .addDecorator(CenterDecorator)
  .add('docs:default', () => (
    <View>
      <BpkText textStyle="xxxl">Flights to Edinburgh</BpkText>
      <BpkText textStyle="xxl">Flights to Edinburgh</BpkText>
      <BpkText textStyle="xl">Flights to Edinburgh</BpkText>
      <BpkText textStyle="lg">Flights to Edinburgh</BpkText>
      <BpkText textStyle="base">Flights to Edinburgh</BpkText>
      <BpkText textStyle="sm">Flights to Edinburgh</BpkText>
      <BpkText textStyle="xs">Flights to Edinburgh</BpkText>
      <BpkText textStyle="caps">FLIGHTS TO EDINBURGH</BpkText>
    </View>
  ))
  .add('docs:emphasize', () => (
    <View>
      <BpkText textStyle="xxxl" weight="emphasized">
        Flights to Edinburgh
      </BpkText>
      <BpkText textStyle="xxl" weight="emphasized">
        Flights to Edinburgh
      </BpkText>
      <BpkText textStyle="xl" weight="emphasized">
        Flights to Edinburgh
      </BpkText>
      <BpkText textStyle="lg" weight="emphasized">
        Flights to Edinburgh
      </BpkText>
      <BpkText textStyle="base" weight="emphasized">
        Flights to Edinburgh
      </BpkText>
      <BpkText textStyle="sm" weight="emphasized">
        Flights to Edinburgh
      </BpkText>
      <BpkText textStyle="xs" weight="emphasized">
        Flights to Edinburgh
      </BpkText>
      <BpkText textStyle="caps" weight="emphasized">
        FLIGHTS TO EDINBURGH
      </BpkText>
    </View>
  ))
  .add('docs:heavy', () => (
    <View>
      <BpkText textStyle="xxxl" weight="heavy">
        Flights to Edinburgh
      </BpkText>
      <BpkText textStyle="xxl" weight="heavy">
        Flights to Edinburgh
      </BpkText>
      <BpkText textStyle="xl" weight="heavy">
        Flights to Edinburgh
      </BpkText>
    </View>
  ))
  .add('Colours', () => (
    <View>
      <BpkText textStyle="xxxl" style={{ color: colorBlue700 }}>
        Flights to Edinburgh
      </BpkText>
      <BpkText textStyle="xxl" style={{ color: colorRed500 }}>
        Flights to Edinburgh
      </BpkText>
      <BpkText textStyle="xl" style={{ color: colorGreen500 }}>
        Flights to Edinburgh
      </BpkText>
      <BpkText textStyle="lg" style={{ color: colorYellow500 }}>
        Flights to Edinburgh
      </BpkText>
      <BpkText textStyle="base" style={{ color: colorPink500 }}>
        Flights to Edinburgh
      </BpkText>
      <BpkText textStyle="sm" style={{ color: colorBlue700 }}>
        Flights to Edinburgh
      </BpkText>
      <BpkText textStyle="xs" style={{ color: colorGray500 }}>
        Flights to Edinburgh
      </BpkText>
      <BpkText textStyle="caps" style={{ color: colorRed500 }}>
        FLIGHTS TO EDINBURGH
      </BpkText>
    </View>
  ))
  .add('Sketchy 😉', () => (
    <View>
      {Platform.OS === 'ios' && (
        <BpkImage
          source={require('./sketch_ios.png')}
          alt="debugging image"
          style={{
            position: 'absolute',
            opacity: 0.5,
            width: sketchWidthIos,
            height: sketchHeightIos,
            left: 0,
            top: 8,
          }}
        />
      )}
      {Platform.OS === 'android' && (
        <BpkImage
          source={require('./sketch_android.png')}
          alt="debugging image"
          style={{
            position: 'absolute',
            opacity: 0.5,
            width: sketchWidthAndroid,
            height: sketchHeightAndroid,
            left: 0,
            top: 7,
          }}
        />
      )}
      <BpkText
        textStyle="xxxl"
        weight={Platform.OS === 'android' ? 'emphasized' : 'regular'}
        style={{ color: colorRed300 }}
      >
        Flights to Edinburg
      </BpkText>
      <BpkText
        textStyle="xxl"
        weight={Platform.OS === 'android' ? 'emphasized' : 'regular'}
        style={{ color: colorRed300 }}
      >
        Flights to Edinburgh
      </BpkText>
      <BpkText textStyle="xl" style={{ color: colorRed300 }}>
        Flights to Edinburgh
      </BpkText>
      <BpkText textStyle="lg" style={{ color: colorRed300 }}>
        Flights to Edinburgh
      </BpkText>
      <BpkText textStyle="base" style={{ color: colorRed300 }}>
        Flights to Edinburgh
      </BpkText>
      <BpkText textStyle="sm" style={{ color: colorRed300 }}>
        Flights to Edinburgh
      </BpkText>
      <BpkText textStyle="xs" style={{ color: colorRed300 }}>
        Flights to Edinburgh
      </BpkText>
      <BpkText textStyle="caps" style={{ color: colorRed300 }}>
        FLIGHTS TO EDINBURGH
      </BpkText>
    </View>
  ));
