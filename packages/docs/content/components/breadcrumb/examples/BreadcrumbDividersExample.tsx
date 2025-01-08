import React from 'react'
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'

export const BreadcrumbDividersExample = () => {
  return (
    <CBreadcrumb style={{ '--cui-breadcrumb-divider': '">"' } as React.CSSProperties}>
      <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
      <CBreadcrumbItem active>Library</CBreadcrumbItem>
    </CBreadcrumb>
  )
}