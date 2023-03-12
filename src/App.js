import "./App.css";
import { Stack } from "@mui/system";
import { Button, Card, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Details from "./details";
function App() {
  const [open, setOpen] = useState(false);
  const [newId, setNewId] = useState(1);
  const [itemm, setItemm] = useState({
    id: newId,
    name: null,
    link: null,
  });
  const [data, setData] = useState([]);
  const handleDelete = (e) => {
    var newItem = {
      link: e.link,
      name: e.name,
      id: e.id,
    };
    var newData = data;
    newData = data.filter((itm) => {
      if (itm.id !== newItem.id) {
        return itm;
      }
    });
    setData(newData);
  };
  const resetValues = () => {
    setItemm({
      id: newId,
      name: null,
      link: null,
    });
  };
  useEffect(() => {
    resetValues();
  }, [newId]);

  return (
    <>
      <Stack position="fixed" direction="row" margin={2} width={"100vw"}>
        <Button
          onClick={() => {
            resetValues();
            setOpen(true);
          }}
          color="success"
          variant="contained"
        >
          Add
        </Button>
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        margin={2}
      >
        <Stack
          direction="column"
          sx={{ clear: "left" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          marginX={"24vw"}
        >
          {data.map((item) => {
            return (
              <Card className="card" margin={2}>
                <Stack
                  direction="column"
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                  margin={2}
                  height={"70vh"}
                >
                  {/* <Typography textAlign={"center"} width={"40vw"} variant="h5">
                    {item.id}
                  </Typography> */}
                  <Typography textAlign={"center"} width={"40vw"} variant="h5">
                    {item.name}
                  </Typography>
                  <iframe
                    width="100%"
                    height="100%"
                    src={item.link}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                  <Stack direction="row" spacing={48}>
                    <Button
                      onClick={() => {
                        setItemm(item);
                        setOpen(true);
                      }}
                      color="info"
                      variant="contained"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => {
                        handleDelete(item);
                      }}
                      color="error"
                      variant="contained"
                    >
                      Delete
                    </Button>
                  </Stack>
                </Stack>
              </Card>
            );
          })}
        </Stack>
      </Stack>
      <Stack>
        <Modal open={open}>
          <Details
            setNewId={setNewId}
            newId={newId}
            setOpen={setOpen}
            data={data}
            setData={setData}
            item={itemm}
          />
        </Modal>
      </Stack>
    </>
  );
}

export default App;
