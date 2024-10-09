import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";

import { useForm } from "@mantine/form";

import classes from "./Login.module.css";

export default function Login() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
      remember_user: false,
    },
  });

  return (
    <div className={classes.wrapper}>
      <Container size={420} mx={"auto"} pt={60}>
        <Title ta="center">Bienvenido de Vuelta!</Title>
        <Text size="sm" ta="center" mt={5}>
          Para continuar con la aplicación inicie sesión.
        </Text>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput
              label="Email"
              placeholder="usuario@app.com"
              required
              key={form.key("email")}
              {...form.getInputProps("email")}
            />
            <PasswordInput
              label="Contraseña"
              placeholder="Contraseña"
              required
              mt="md"
              key={form.key("password")}
              {...form.getInputProps("password")}
            />
            <Group justify="space-between" mt="lg">
              <Checkbox
                label="Recuerdame"
                key={form.key("remember_user")}
                {...form.getInputProps("remember_user", { type: "checkbox" })}
              />
              <Anchor component="button" size="sm">
                Olvidé mi contraseña
              </Anchor>
            </Group>
            <Button fullWidth mt="xl" type="submit">
              Iniciar Sesión
            </Button>
          </form>

          <Text c="dimmed" size="sm" ta="center" mt={5}>
            Aún no tienes cuenta?{" "}
            <Anchor size="sm" component="button">
              Crear una cuenta
            </Anchor>
          </Text>
        </Paper>
      </Container>
    </div>
  );
}
