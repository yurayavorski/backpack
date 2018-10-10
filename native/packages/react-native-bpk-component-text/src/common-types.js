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

import { type Node } from 'react';
import PropTypes from 'prop-types';
import { deprecate } from 'react-is-deprecated';
import { StyleSheet, type StyleObj } from 'react-native';

const emphasizePropType = deprecate(
  PropTypes.bool,
  'The `emphasize` prop is deprectiated. Please use the `weight` prop instead.',
);

export const TEXT_STYLES = [
  'caps',
  'xs',
  'sm',
  'base',
  'lg',
  'xl',
  'xxl',
  'xxxl',
];
export type TextStyle =
  | 'caps'
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl';

export const WEIGHT_STYLES = ['regular', 'emphasized', 'heavy'];
export type Weight = 'regular' | 'emphasized' | 'heavy';

export type Props = {
  children: Node,
  textStyle: TextStyle,
  weight: Weight,
  emphasize: boolean,
  style: ?StyleObj,
};

export const stylePropType = (
  props: Props,
  propName: string,
  componentName: string,
) => {
  const value = StyleSheet.flatten(props[propName]);

  if (value === undefined) return false;

  if (value.fontWeight) {
    return new Error(
      `Invalid prop \`${propName}\` with \`fontWeight\` value \`${
        value.fontWeight
      }\` supplied to \`${componentName}\`. Use \`emphasize\` prop instead.`,
    ); // eslint-disable-line max-len
  }

  return false;
};

export const propTypes = {
  children: PropTypes.node.isRequired,
  textStyle: PropTypes.oneOf(TEXT_STYLES),
  weight: PropTypes.oneOf(WEIGHT_STYLES),
  emphasize: emphasizePropType,
  style: stylePropType,
};

export const defaultProps = {
  textStyle: 'base',
  weight: WEIGHT_STYLES.regular,
  emphasize: false,
  style: null,
};
