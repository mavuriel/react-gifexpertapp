import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

function App() {
  const [categories, setCategories] = useState(['One punch man', 'Dragon ball'])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return

    setCategories([...categories, newCategory])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  )
}

export default App
