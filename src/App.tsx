import RegistrationForm from "./forms/RegistrationForm";

function App() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="mx-auto max-w-[48rem]">
        <h2 className="mb-4 text-4xl font-bold">Registration</h2>
        <RegistrationForm />
      </div>
    </main>
  );
}

export default App;
