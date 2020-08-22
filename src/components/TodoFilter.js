import React from "react"
import {
  Paper,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Grid,
  Radio,
  Button,
} from "@material-ui/core"

function FilterTodo() {
  return (
    <Paper style={{ margin: "1rem 0", padding: "1rem", position: "relative" }}>
      <Grid container alignItems="center" justify="space-between">
        <Grid item xs={2}>
          <Typography>4 items left</Typography>
        </Grid>
        <Grid item xs={6}>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="gender"
              name="todoShowing"
              // value={value}
              // onChange={handleChange}
            >
              <FormControlLabel value="all" control={<Radio />} label="All" />
              <FormControlLabel
                value="active"
                control={<Radio />}
                label="Active"
              />
              <FormControlLabel
                value="completed"
                control={<Radio />}
                label="Completed"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
            <Button size="small">Clear completed</Button>
          </Grid>
      </Grid>
    </Paper>
  )
}

export default FilterTodo
