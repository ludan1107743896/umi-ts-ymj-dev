import React, { FC, Suspense, useEffect } from 'react';
import { connect, Dispatch } from 'umi';
import { Loading, DashboardState } from '@/models/connect';
import PageLoading from './components/PageLoading';
import CardComp from './components/cardComp';


const VisitCard = React.lazy(() => import('./components/visitCard'));
interface DashboardProps {
  dispatch: Dispatch;
  dashboard: DashboardState;
  loading?: boolean;
}

const Dashboard: FC<DashboardProps> = ({ dashboard, dispatch, loading }) => {
  const { cardSource } = dashboard;

  useEffect(() => {
    dispatch({
      type: 'dashboard/queryCard',
      payload: {},
    });
  }, []);
  return (
    <div>
      <Suspense fallback={<PageLoading />}>
        <VisitCard totalData={cardSource} loading={loading} />
      </Suspense>
      <CardComp />
    </div>
  );
};

export default connect(
  ({
    dashboard,
    loading,
  }: {
    dashboard: DashboardState;
    loading: Loading;
  }) => ({
    dashboard,
    loading: loading.effects['dashboard/queryCard'],
  }),
)(Dashboard);
