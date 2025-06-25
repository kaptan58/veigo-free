import StatBox from '../components/StatBox';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-2xl font-bold mb-6">Admin Paneli</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatBox title="Toplam Kazanç" value="€0" />
        <StatBox title="Kayıtlı Firma" value="0" />
        <StatBox title="Aktif Şoför" value="0" />
      </div>
    </div>
  );
}
