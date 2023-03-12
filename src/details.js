import { Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Details = ({ item, setOpen, data, setData, setNewId, newId }) => {
  const [name, setName] = useState(item.name);
  const [link, setLink] = useState(item.link);
  const handleSubmit = (e) => {
    e.preventDefault();
    var newItem = {
      id: e.target[0].value,
      name: e.target[2].value,
      link: e.target[4].value,
    };
    var newData = data;
    var found = false;
    newData = data.map((itm) => {
      if (itm.id === newItem.id) {
        found = true;
        return newItem;
      } else {
        return itm;
      }
    });
    if (!found) {
      newData.push(newItem);
      setNewId(newId + 1);
    }
    setData(newData);
    console.log("newData");
    console.log(data);
    setOpen(false);
  };

  return (
    <Stack
      className="card"
      sx={{ marginX: 40, marginY: 9 }}
      spacing={3}
      height={"80vh"}
      width={"50vw"}
    >
      <Typography variant="h4" m={3} textAlign={"center"}>
        Enter Details
      </Typography>
      <form
        id="registerForm"
        autoComplete="off"
        noValidate
        onSubmit={(e) => handleSubmit(e)}
      >
        <Stack sx={{ width: "100%" }}>
          <TextField
            sx={{ margin: 3 }}
            value={item.id}
            disabled
            onChange={(event) => {
              setLink(event.target.value);
            }}
            size="small"
            label="ID"
            type="text"
          />
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <TextField
            sx={{ margin: 3 }}
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            size="small"
            label="Name"
            type="text"
          />
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <TextField
            sx={{ margin: 3 }}
            defaultValue={item.link}
            value={link}
            onChange={(event) => {
              setLink(event.target.value);
            }}
            size="small"
            label="Link"
            type="text"
          />
        </Stack>
        <Stack direction={"row"} spacing={67}>
          <Button type="submit">Done</Button>
          <Button
            color="error"
            onClick={() => {
              setOpen(false);
            }}
            sx={{
              cursor: "pointer",
            }}
          >
            Close
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default Details;
