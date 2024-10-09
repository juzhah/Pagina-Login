import {
  Paper,
  Title,
  Text,
  Container
} from "@mantine/core";

import LoginForm from "../Components/LoginForm"



import classes from "./Login.module.css";

export default function Login() {


  return (
    <div className={classes.wrapper}>
      <Container size={420} mx={"auto"} pt={60}>
        <Title ta="center">Bienvenido de Vuelta!</Title>
        <Text size="sm" ta="center" mt={5}>
          Para continuar con la aplicación inicie sesión.
        </Text>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">

          <LoginForm/>


        </Paper>
      </Container>
    </div>
  );
}
