import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
interface Props {
  handleStart: any;
}
const StartPage: React.FC<Props> = ({ handleStart }) => {
  return (
    <Card sx={{ minWidth: 400, padding: 2, textAlign: "center" }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          Start Quiz
        </Typography>
        <Typography variant="h5" component="div"></Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Good luck !
        </Typography>
      </CardContent>
      <Button variant="contained" onClick={handleStart}>
        Start
      </Button>
    </Card>
  );
};
export default StartPage;
