import { Fragment, FunctionComponent } from 'react'

export interface ParseContentProps {
  content: Array<{text: string, bold: boolean}>
}

export const ParseContent: FunctionComponent<ParseContentProps> = (props) => {
  const { content } = props

  if (content == null) {
    return <></>
  }

  return <>{content.map((item: {'text': string, 'bold': boolean}, index) => (
    item.bold
      ? <Fragment key={index}><strong>{item.text}</strong></Fragment>
      : <Fragment key={index}>{item.text}</Fragment>
  ))}</>
}
