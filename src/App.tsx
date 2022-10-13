import { Envelope, Lock } from "phosphor-react";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";
import { Heading } from "./components/Heading";
import { Text } from "./components/text";
import { TextInput } from "./components/TextField";
import "./styles/global.css";

function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="text-center">
        <Heading size="lg" className="mt-4">
          Ignite lab
        </Heading>

        <Text size="lg" asChild className="text-gray-400 mt-1">
          <p>Faça login e comece a usar!</p>
        </Text>
      </header>

      <form
        className="flex flex-col items-stretch gap-4 w-full max-w-sm mt-10"
        action=""
      >
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input
              id="password"
              type="password"
              placeholder="*******"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button className="mt-4">Entrar na plataforma</Button>

        <footer className="flex flex-col items-center gap-4 mt-8">
          <Text asChild size="sm">
            <a href="" className="text-gray-400 underline hover:text-gray-200">
              Esqueceu sua senha?
            </a>
          </Text>
          <Text asChild size="sm">
            <a href="" className="text-gray-400 underline hover:text-gray-200">
              Não possui conta? Crie uma agora!
            </a>
          </Text>
        </footer>
      </form>
    </div>
  );
}

export default App;
