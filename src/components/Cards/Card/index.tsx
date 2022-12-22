import { Paper, Grid, Avatar, Button } from "@mui/material";
import { CardProps } from "./types";

const Card = ({ children, idx }: CardProps) => {
  return (
    <Paper
      style={{
        width: 275,
        height: 350,
        padding: 15,
        overflow: "hidden",
      }}
      elevation={1}
      key={idx}
    >
      <Grid container direction="column">
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          style={{ marginBottom: 30 }}
        >
          <Grid item>
            <Avatar
              style={{ width: 50, height: 50 }}
              alt="Remy Sharp"
              src="data:image/jpeg;base64,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"
            />
          </Grid>
          <Grid item>
            <h4>Desenvolvedor frontend</h4>
            <span>Opah It Consulting</span>
          </Grid>
        </Grid>

        <Grid spacing={2} container direction="column">
          <Grid item>
            <span>Projeto: Plataforma Única de Negócios</span>
          </Grid>
          <Grid item>
            <span>Cargo: Desenvolvedor react JR</span>
          </Grid>
          <Grid item>
            <span>Inicio: 11/11/11111</span>
          </Grid>
          <Grid item>
            <span>Termino: 11/11/1111</span>
          </Grid>
          <Grid item>
            <span>Cidade: São Paulo</span>
          </Grid>
          <Grid item>
            <span>Estado: São Paulo</span>
          </Grid>
          <Grid item>
            <span>País: Brasil</span>
          </Grid>
          <Grid item>
            <Button fullWidth variant="outlined">
              Acessar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Card;
