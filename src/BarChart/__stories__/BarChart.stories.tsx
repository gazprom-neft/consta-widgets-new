import React from 'react'

import { object, text } from '@storybook/addon-knobs'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'

import { createMetadata, createStory } from '@/__private__/storybook'
import { BarChart } from '@/BarChart'

import { minimalData, withNegativeValueData, withThreeColumnsData } from '../data.mock'

import docs from './BarChart.mdx'

const getCommonProps = (initialUnit: string) => {
  const unit = text('unit', initialUnit)

  return {
    formatValueForTooltip: (v: number) => `${v} ${unit}`,
    unit,
    showGuide: true,
    showGroupsLabels: true,
    showGrid: true,
  } as const
}

export const WithThreeColumns = createStory(
  () => (
    <BarChart
      {...getCommonProps(withThreeColumnsData.unit)}
      colors={object('colors', withThreeColumnsData.colors)}
      groups={withThreeColumnsData.groups}
    />
  ),
  { name: 'с группами по три столбца' }
)

export const WithNegativeValue = createStory(
  () => (
    <BarChart
      {...getCommonProps(withNegativeValueData.unit)}
      colors={object('colors', withNegativeValueData.colors)}
      groups={withNegativeValueData.groups}
      isHorizontal={true}
      showValues={true}
    />
  ),
  { name: 'с отрицательными значениями' }
)

export const WithShowValuesOnTopBar = createStory(
  () => (
    <BarChart
      {...getCommonProps(minimalData.unit)}
      colors={object('colors', minimalData.colors)}
      groups={minimalData.groups}
      isHorizontal={false}
      showValues={true}
    />
  ),
  { name: 'с подписью над столбцами' }
)

export const Minimalistic = createStory(
  () => (
    <BarChart
      {...getCommonProps(minimalData.unit)}
      colors={object('colors', minimalData.colors)}
      groups={minimalData.groups}
      isHorizontal={true}
      showValues={false}
    />
  ),
  { name: 'минималистичный' }
)

export const WithThreshold = createStory(
  () => (
    <BarChart
      {...getCommonProps(minimalData.unit)}
      colors={object('colors', minimalData.colors)}
      groups={minimalData.groups}
      threshold={object('threshold', minimalData.threshold)}
      isXAxisLabelsSlanted
    />
  ),
  { name: 'с предельным значением' }
)

export default createMetadata({
  title: 'Компоненты|/BarChart',
  id: 'components/BarChart',
  decorators: [withSmartKnobs({ ignoreProps: ['title'] })],
  parameters: {
    docs: {
      page: docs,
    },
    environment: {
      style: {
        width: '60vw',
        height: '80vh',
      },
    },
  },
})
