import Card from "../Components/ui/Card";
import Input from "../Components/ui/Input";
import Button from "../Components/ui/Button";

export default function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <Card>
        <h2 className="text-3xl font-bold mb-6 text-center">
          Login
        </h2>

        <Input
          label="Email"
          placeholder="Enter email"
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter password"
        />

        <Button>
          Login
        </Button>
      </Card>
    </div>
  );
}