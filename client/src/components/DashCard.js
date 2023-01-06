import React from "react";
import { NavLink } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function DashCard({ forum }) {
  return (
    <div className="Card">
      <Card sx={{ maxWidth: "70%", m: "10px", textAlign: "left", ml: "15%" }}>
        <CardActionArea>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
                Topic:  
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
                <NavLink to={`/${forum.id}`}>{forum.topic}</NavLink>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Tag: {forum.subject}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

