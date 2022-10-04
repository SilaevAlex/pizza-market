import React from 'react'
import { useState } from 'react'

const Categories = () => {

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
  ]

const [activeCategories, setActiveCategories] = useState (0)

const onClickCategori = (index) => {
  setActiveCategories(index)
}

  return (
    <div className="categories">
    <ul>
         {
  categories.map((value, index) => {
    return <li onClick={() => onClickCategori(index)} className={activeCategories === index ? "active" : '' }>{value}</li>
  })
}
    </ul>
  </div>
  )
}

export default Categories