import { Grid, Typography, Avatar } from "@mui/material";


interface TitleProps {
  title: string;
  color: string
  icon: React.ReactNode
}

export default function Title({ title, color, icon }: TitleProps) {
  return (
    <Grid container sx={{ justifyContent: 'center' }}>
      <Grid item xs={8} sx={{ display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: 'center', gap: '2px' }}>
        <Avatar sx={{ background: color }}>
          {icon}
        </Avatar>
        <Typography><strong>{title}</strong></Typography>
      </Grid>
    </Grid>
  );
}
