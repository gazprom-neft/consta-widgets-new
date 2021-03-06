import React, { FC, ReactNode } from 'react'

import { Text } from '@consta/uikit/Text'

import { cn } from '@/__private__/utils/bem'

import { Size, titleSizes } from '../helpers'

import './StatsTitle.css'

const cnStatsTitle = cn('StatsTitle')

type Props = {
  size: Size
  icon?: ReactNode
  title?: string
  className?: string
  children?: never
}

export const StatsTitle: FC<Props> = ({ size, icon, title, className }) => {
  return (
    <Text
      className={cnStatsTitle(null, [className])}
      as="div"
      size={titleSizes[size]}
      view="primary"
    >
      {icon && (
        <div className={cnStatsTitle('Cell')}>
          <div className={cnStatsTitle('Icon', { size })}>{icon}</div>
        </div>
      )}
      <div className={cnStatsTitle('Cell')}>{title}</div>
    </Text>
  )
}
