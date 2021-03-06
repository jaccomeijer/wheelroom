import React from 'react'
import { Wheel, Box, Action, ActionModel } from '@wheelroom/core'
import { TopicInfo } from '../../lib/get-topic-info'
import { TopicModel } from './model'
import { TopicNcssTree } from './ncss-tree'
import { TopicOptions } from '../../lib/get-topic-options'

export interface TopicContentActionsWheel extends Wheel {
  style: TopicNcssTree
}

export interface TopicContentActionsProps {
  /** Styling wheel */
  wheel: TopicContentActionsWheel
  /** Full Topic is wrapped in a link and the inside link becomes a span */
  fullTopicAsLink?: boolean
  /** Accept max number of Actions, ignore all others */
  maxActions?: number
  /** All topic props */
  topic: TopicModel
  /** Topic info object */
  topicInfo: TopicInfo
  /** Topic options */
  topicOptions: TopicOptions
}

export const TopicContentActions = (props: TopicContentActionsProps) => {
  const actions = props.topic.actions

  if (!actions) {
    return null
  }

  return (
    <Box
      is="div"
      wheel={{ ...props.wheel, style: props.wheel.style.actionGroup }}
    >
      {actions
        .slice(0, props.maxActions)
        .map((action: ActionModel, index: number) => {
          const modifiedAction = { ...action }

          // If the full topic is a link, the button inside the topic must be span
          modifiedAction.url = props.fullTopicAsLink ? undefined : action.url
          modifiedAction.page = props.fullTopicAsLink ? undefined : action.page

          return (
            <Action
              key={index}
              wheel={{ ...props.wheel, style: props.wheel.style.action }}
              {...modifiedAction}
            />
          )
        })}
    </Box>
  )
}
