import { parseCookies } from '@/helpers/index';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import DashboardEmployee from '@/components/DashboardEmployee';

export default function DashboardPage({ employees, token }) {
  const router = useRouter();

  const deleteEmployee = async (id) => {
    if (confirm('Are you sure?')) {
      const res = await fetch(`${API_URL}/employees/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
      } else {
        router.reload();
      }
    }
  };

  return (
    <Layout title='User Dashboard'>
      <div>
        <h1 className='text-4xl border-b-4 pb-5 font-bold text-gray-600'>
          Dashboard
        </h1>

        {employees.map((emp) => (
          <DashboardEmployee
            key={emp.id}
            emp={emp}
            handleDelete={deleteEmployee}
          />
        ))}
      </div>
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
      token,
    },
  };
}
