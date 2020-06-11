/** @jsx jsx */
import { Action } from '../action/action'
import { ActionProps } from '../action/model-types'
import { Any } from '../../elements/any'
import { Box } from '../../elements/grid'
import { Dd, Dl, Dt, Table as TableElement, Th, Tr } from '../../elements/self'
import { Fragment } from 'react'
import { Icon } from '../../elements/icon'
import { jsx } from '@emotion/core'
import { TableProps } from './model-types'
import { TableRow } from '../../wheels/model/table-row/table-row'
import { TableRowProps } from '../table-row/model-types'
import { TableWheelStyle } from './table-preset'
import { TopicOptions } from '../../lib/get-topic-options'
import { Wheel } from '../../types/wheel'

export interface TableWheel extends Wheel {
  style: TableWheelStyle
}

export interface TableWheelProps {
  /** Styling wheel */
  wheel: TableWheel
  /** The topic to render */
  tables?: TableProps[]
  /** Topic options */
  topicOptions: TopicOptions
}

export const Table = (props: TableWheelProps) => {
  const tables = props.tables
  if (!tables) {
    return null
  }

  return (
    <Box wheel={{ ...props.wheel, style: props.wheel.style }}>
      <TableElement wheel={{ ...props.wheel, style: props.wheel.style.table }}>
        <tbody>
          {tables.map((table: TableProps, index: number) => {
            const tableRows = table.tableRows || []
            let columnCount = 0
            tableRows.forEach((tableRow: TableRowProps) => {
              if (tableRow.topics && tableRow.topics.length > columnCount) {
                columnCount = tableRow.topics.length
              }
            })
            return (
              <Fragment key={index}>
                {table.heading && (
                  <Tr wheel={{ ...props.wheel, style: props.wheel.style.tr }}>
                    <Th
                      wheel={{ ...props.wheel, style: props.wheel.style.th }}
                      colspan={columnCount + 1}
                    >
                      {table.icon && (
                        <Icon
                          icon={table.icon}
                          wheel={{
                            ...props.wheel,
                            style: props.wheel.style.icon,
                          }}
                        />
                      )}
                      <Dl
                        wheel={{
                          ...props.wheel,
                          style: props.wheel.style.dl,
                        }}
                      >
                        {table.heading && (
                          <Dt
                            wheel={{
                              ...props.wheel,
                              style: props.wheel.style.dt,
                            }}
                          >
                            {table.heading}
                          </Dt>
                        )}
                        {table.abstract && (
                          <Dd
                            wheel={{
                              ...props.wheel,
                              style: props.wheel.style.dd,
                            }}
                          >
                            {table.abstract?.abstract}
                          </Dd>
                        )}
                      </Dl>
                      {table.actions && (
                        <Any
                          is="div"
                          wheel={{
                            ...props.wheel,
                            style: props.wheel.style.actions,
                          }}
                        >
                          {table.actions.map(
                            (action: ActionProps, index: number) => (
                              <Action
                                key={index}
                                url={action.url}
                                page={action.page}
                                icon={action.icon}
                                wheel={{
                                  ...props.wheel,
                                  style: props.wheel.style.actions.action,
                                }}
                                {...action}
                              />
                            )
                          )}
                        </Any>
                      )}
                    </Th>
                  </Tr>
                )}
                {table.tableRows?.map(
                  (tableRow: TableRowProps, index: number) => {
                    return (
                      <TableRow
                        key={index}
                        tableRow={tableRow}
                        topicOptions={props.topicOptions}
                        wheel={{ ...props.wheel, style: props.wheel.style.row }}
                      />
                    )
                  }
                )}
              </Fragment>
            )
          })}
        </tbody>
      </TableElement>
    </Box>
  )
}
