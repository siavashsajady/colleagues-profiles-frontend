import Layout from '@/components/Layout';
import EmployeeItem from '@/components/EmployeeItem';
import { API_URL } from '@/config/index';

export default function EmployeesPage({ employees }) {
  return (
    <Layout>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 '>
        {employees.length === 0 && <h3>No employees to show</h3>}

        {employees.map((emp) => (
          <EmployeeItem key={emp.id} emp={emp} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/employees?_sort=name`);
  const employees = await res.json();

  return {
    props: { employees },
    revalidate: 1,
  };
}
