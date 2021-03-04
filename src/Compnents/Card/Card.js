import { Card as UiCard, CardContent, Chip, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react'


//Card Styles
const useStyles = makeStyles(theme => ({

  card: {

    padding: '10px',
    maxWidth: 300
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(1)
  }



}))
const Card = (props) => {

  const classes = useStyles()

  return (
    <UiCard className={classes.card}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si qua in iis corrigere voluit,
          deteriora fecit. Nec tamen ille erat sapiens quis enim hoc aut quando aut ubi aut unde?
          </Typography>
      </CardContent>

      <Paper className={classes.root}
        component='ul'
      >
        {props.tags.map((tag, index) => {

          return <li

            key={index}>

            <Chip

              label={`#${tag}`}
              onDelete={() => {
                props.handleOnTagClick(index)
              }}
              className={classes.chip}
            />

          </li>
        })}

      </Paper>
    </UiCard>
  )
}

export default Card
