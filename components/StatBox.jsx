export default function StatBox({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow text-center">
      <h2 className="text-lg text-gray-600">{title}</h2>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}
