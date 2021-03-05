import React, { useState } from 'react'
import classes from './App.module.scss'
import { Button, Input } from '@material-ui/core'
import Card from './Compnents/Card/Card'


function App() {


  const [tags, setTags] = useState(['red', 'blue', 'green'])
  const [inputValue, setInputValue] = useState('')




  const location = document.location

  if (location.href.includes('#tags=')) {

    const decodedUrl = decodeURI(location.href)

    const newTags = decodedUrl.split('#tags=')[1].split(',').filter((x) => x)
    //Check if the previous values in arrays are equal
    const equal = JSON.stringify(newTags) === JSON.stringify(tags)

    //If new values,replace with new values
    if (!equal) {
      setTags(newTags)
      location.replace(`${location.pathname}#tags=${[...newTags]}`)

      //Default values,go on with default
    } else {
      location.replace(`${location.pathname}#tags=${[...tags]}`)
    }
    //Replce if there is no '#tags' in Url
  } else {
    location.replace(`${location.pathname}#tags=${[...tags]}`)
  }





  //Handle Click on Add button (Add tag)
  const handleAddingTag = () => {
    if (inputValue) {
      const newTags = [...tags]
      newTags.push(inputValue)
      setTags(newTags)
      setInputValue('')
      location.replace(`${location.pathname}#tags=${[...newTags]}`)
    }
  }
  //Handle Click on Tags (Delete tag)
  const handleOnTagClick = (indexOfTag) => {

    const newTags = tags.filter((_, i) => i !== indexOfTag)
    setTags(newTags)
    location.replace(`${location.pathname}#tags=${[...newTags]}`)

  }

  //Add to state value of input
  const handleInputChange = (e) => {
    let value = e.target.value
    const newValue = value.replace(/[,]/g, ' ')
    setInputValue(newValue)
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
