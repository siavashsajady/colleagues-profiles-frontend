import { parseCookies } from '@/helpers/index';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';

export default function DashboardPage({ employees }) {
  console.log(employees);
  return (
    <Layout title='User Dashboard'>
      <h1>Dashboard</h1>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  const res = await fetch(`${API_URL}/employees/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const employees = await res.json();

  return {
    props: {
      employees,
    },
  };
}
