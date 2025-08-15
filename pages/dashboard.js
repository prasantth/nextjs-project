import Header from '../components/Header';
import { Grid, Card, CardContent, Typography } from '@mui/material';

export default function Dashboard({ apps }) {
  return (
    <>
      <Header />
      <Grid container spacing={2} padding={2}>
        {apps.map((app) => (
          <Grid item xs={12} sm={6} md={4} key={app}>
            <Card>
              <CardContent>
                <Typography variant="h6">{app}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export async function getStaticProps() {
  const apps = ['App One', 'App Two', 'App Three'];
  return { props: { apps } };
}
