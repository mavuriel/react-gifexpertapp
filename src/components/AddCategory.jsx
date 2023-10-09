import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({ target: { value } }) => {
    setInputValue(value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (inputValue.trim().length === 0) return

    onNewCategory(inputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input type='text' value={inputValue} onChange={onInputChange} />
    </form>
  )
}
