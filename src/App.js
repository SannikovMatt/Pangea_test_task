import React, { useState } from 'react'
import classes from './App.module.scss'
import { Button, Input } from '@material-ui/core'
import Card from './Compnents/Card/Card'

function App() {




  const [tags, setTags] = useState(['red', 'blue', 'green'])
  const [inputValue, setInputValue] = useState('')


  const location = document.location

  //Asiggn to url we need from the start
  location.assign(`${origin}/#ref=${[...tags]}`)
  console.log(location,'LOCATION');



  //Handle Click on Add button (Add tag)
  const handleAddingTag = () => {
    if (inputValue) {
      const newTags = [...tags]
      newTags.push(inputValue)
      setTags(newTags)
      setInputValue('')
    }
  }
  //Handle Click on Tags (Delete tag)
  const handleOnTagClick = (indexOfTag) => {

    const newTags = tags.filter((_, i) => i !== indexOfTag)
    setTags(newTags)

  }

  //Add to state value of input
  const handleInputChange = (e) => {
    const value = e.target.value
    setInputValue(value)
  }

  return (
    <div className={classes.App}>

      <div className={classes.Header}>
        <Input
          placeholder={'Set new Tag'}
          value={inputValue || ''}
          onChange={handleInputChange}
          color={'primary'}
        />
        <Button
          onClick={handleAddingTag}
          color='secondary' variant='contained' >Add</Button>
      </div>
      <div className={classes.Cards}>
        <Card handleOnTagClick={handleOnTagClick} tags={tags} />
        <Card handleOnTagClick={handleOnTagClick} tags={tags} />
        <Card handleOnTagClick={handleOnTagClick} tags={tags} />
      </div>
    </div>
  );
}

export default App;
