import React from 'react';

import { AppBar, Toolbar, TextField, MenuItem } from "@material-ui/core";


function ToolBar({
  style = "None",
  size = "medium",
  color = "black",
  handleStyleChange,
  handleSizeChange,
  handleColorChange,
}) {

  return (
    <AppBar position="static" className="Toolbar">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <TextField sytle={{ margin: "10%" }}
          select
          label="Style"
          value={style}
          onChange={handleStyleChange}
        >
          <MenuItem key="None" value="None"> None </MenuItem>
          <MenuItem key="Bold" value="Bold"> Bold </MenuItem>
          <MenuItem key="Italic" value="Italic"> Italic </MenuItem>
          <MenuItem key="Underline" value="Underline"> Underline </MenuItem>
        </TextField>
        <TextField sytle={{ margin: "10%" }}
          select
          label="Size"
          value={size}
          onChange={handleSizeChange}
        >
          <MenuItem key="small" value="small"> small </MenuItem>
          <MenuItem key="medium" value="medium"> medium </MenuItem>
          <MenuItem key="large" value="large"> large </MenuItem>
          <MenuItem key="larger" value="larger"> larger </MenuItem>
        </TextField>
        <TextField sytle={{ margin: "10%" }}
          select
          label="Color"
          value={color}
          onChange={handleColorChange}
        >
          <MenuItem key="black" value="black"> black </MenuItem>
          <MenuItem key="red" value="red"> red </MenuItem>
          <MenuItem key="blue" value="blue"> blue </MenuItem>
          <MenuItem key="green" value="green"> green </MenuItem>
        </TextField>
      </Toolbar>
    </AppBar>
  )
}


export default ToolBar;