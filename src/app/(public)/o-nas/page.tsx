// src/app/public/o-nas/page.tsx


import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from 'next/link'
 
 
      


export const metadata = { title: "O nás | ZoškaSnap" };

export default function AboutUs() {

  return (
    <Container>
      <Typography variant="body1" sx={{ mt: -1 , fontSize: 50, fontWeight: 'medium'}}> O nás </Typography>
      <Typography> Vitajte na stránkach ZoškaSnap! Sme hrdí na našu školu a komunitu na SPŠE Zochova 9 v Bratislave. </Typography>
      <Typography variant="body1" sx={{  display: "flex", justifyContent: "flex-start", alignItems: "flex-start", flexDirection: 'column', fontWeight: 'bold'}}>
        <Link href="https://zochova.sk/">Naša škola</Link>
        <Link href="https://www.facebook.com/spsezochova/">Facebook</Link>
        <Link href="https://www.instagram.com/spsezochova/">Instagram</Link>
      </Typography>
      
    </Container>
    
  );
}
