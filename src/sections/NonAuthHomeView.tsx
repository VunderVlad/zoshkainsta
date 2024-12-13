// src/sections/NonAuthHomeView.tsx

import { Container, Typography } from "@mui/material";

export default function NonAuthHomeView() {
  return (
    <Container>
      <Typography variant="body1" sx={{ mt: -1 , fontSize: 50, fontWeight: 'medium'}}>
        Domovská stránka - Neprihlásený user
      </Typography>
      <Typography sx={{ color: "red" }}>
        Registrujte sa, aby ste mohli pridať príspevky a zobraziť profil.
      </Typography>
    </Container>
  );
}