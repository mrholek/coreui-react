import React from 'react'
import { CFormSelect } from '@coreui/react'

export const FormSelectExample = () => {
  return (
    <CFormSelect
      aria-label="Default select example"
      options={[
        { label: 'Open this select menu' },
        { label: 'One', value: '1' },
        { label: 'Two', value: '2' },
        { label: 'Three', value: '3', disabled: true },
      ]}
    />
  )
}