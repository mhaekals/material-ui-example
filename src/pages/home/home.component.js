import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
  CardActions,
  Collapse,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { GlobalButton } from "../../components/button/button.component";

export const Home = () => {
  const [data, setData] = useState([]);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    fetch("https://finalspaceapi.com/api/v0/character/?limit=12")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleExpand = () => {
    setExpand(!expand);
  };
  return (
    <>
      <Grid container>
        {data.map((characters) => (
          <Grid item spacin={3} key={characters.id} xs="12" sm="6" md="3">
            <Card style={{ margin: 20 }}>
              <CardMedia style={{ height: 200 }} image={characters.img_url} />
              <CardContent>
                <Typography color="primary" variant="h6">
                  Name: {characters.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="secondary"
                  style={{ padding: 20 }}
                  noWrap
                >
                  Species:{" "}
                  {characters.species === undefined
                    ? "no data available"
                    : characters.species}
                </Typography>
              </CardContent>
              <CardActions style={{ padding: 20 }}>
                <GlobalButton variant="contained" onClick={handleExpand}>
                  show more
                </GlobalButton>
                <GlobalButton variant="contained" color="secondary" disabled>
                  disabled
                </GlobalButton>
              </CardActions>
              <Collapse in={expand} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography
                    variant="subtitle1"
                    color="secondary"
                    style={{ padding: 20 }}
                  >
                    Status: {characters.status}
                    <br />
                    Gender: {characters.gender}
                    <br />
                    Hair: {characters.hair}
                    <br />
                    Alias:{" "}
                    {characters.alias.length === 0
                      ? "no alias"
                      : characters.alias.join(", ")}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
