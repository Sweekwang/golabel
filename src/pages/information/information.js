import { useParams } from 'react-router-dom';

import MainLayout from '../../components/layout/mainLayout/Main';
import Layout from '../../components/layout/componentLayout/Layout';

const Information = () => {
  const params = useParams();
  const goId = params.info.replace(/\s+/g, '');
  return (
    <MainLayout>
      <Layout>
        <p>{goId}</p>
      </Layout>
    </MainLayout>
  );
};

export default Information;
