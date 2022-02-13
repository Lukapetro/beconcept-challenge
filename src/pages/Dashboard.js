import React from 'react'

import ChartCard from '../components/Chart/ChartCard'
import { Doughnut } from 'react-chartjs-2'
import ChartLegend from '../components/Chart/ChartLegend'
import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'

import VitalsTable from '../components/Vitals/FilterTable'

import {
  doughnutOptions,
  doughnutLegends,
} from '../utils/demo/chartsData'
import { useTranslation } from 'react-i18next';
import UptimeChart from '../utils/demo/UptimeChart'
import InfoCard from '../components/Cards/InfoCard'

function Dashboard() {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('vitals_title')}</PageTitle>
      <SectionTitle>{t('vitals_section_title_1')}</SectionTitle>

      {/* <!-- Activity time --> */}
      <div className="mb-12">
        <UptimeChart />
      </div>

      {/* <!-- Loading Time --> */}
      <VitalsTable />

      {/* <!-- Lighthouse score --> */}
      <SectionTitle>{t('vitals_section_title_3')}</SectionTitle>
      <div className="grid gap-6 mb-12 md:grid-cols-2">
        <div>
          <ChartCard title="">
            <Doughnut {...doughnutOptions} />
            <ChartLegend legends={doughnutLegends} />
          </ChartCard>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard title="Largest Contentful Paint" value="1.14 s" />
          <InfoCard title="First Contentful Paint" value="1.71 s" />
          <InfoCard title="Comulative Layout Shift" value="0.42 s" />
          <InfoCard title="First Input Delay" value="0.19 s" />
        </div>
      </div>
    </>
  )
}

export default Dashboard
