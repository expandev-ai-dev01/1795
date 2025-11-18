export function WelcomePage() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Car Catalog</h1>
      <p className="text-lg text-gray-600">The application foundation is ready.</p>
      <p className="text-lg text-gray-600">
        Start by creating your domain features inside the <code>src/domain</code> directory.
      </p>
    </div>
  );
}
