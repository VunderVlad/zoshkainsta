// src/app/public/layout.tsx

import { Container } from "@mui/material";

export const metadata = { title: "Public | SnapZoska",};

export default function RootLayout({ children }: { children: React.ReactNode;}) {
  return (
    <Container >
        {children} {/*Render pubic pages*/}
    </Container>
  );
}
