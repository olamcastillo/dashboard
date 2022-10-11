import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, ColumnSeries, DataLabel, Tooltip, Category } from '@syncfusion/ej2-react-charts';

import { barPrimaryXAxis, barPrimaryYAxis, barCustomSeries } from '../../data/dummy';
import { ChartsHeader } from '../../components';
import { useStateContext } from '../../contexts/ContexProvider';

const Bar = () => {
  const { currentMode } = useStateContext()
  return (
		<div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
			<ChartsHeader category='Bar' title='Olympic Medal Counts - RIO'/>
			<div className='w-full'>
				<ChartComponent
				id='charts'
				height='420px'
				primaryXAxis={barPrimaryXAxis}
				primaryYAxis={barPrimaryYAxis}
				chartArea={ { border: { width : 0}} }
				tooltip={ {enable: true} }
				background={ currentMode === 'Dark' ? '#33373E' : '#fff' }
				legendSettings={{ background: 'white' }}
				>
					<Inject services={ [ ColumnSeries, DataLabel, Legend, Tooltip, Category ] }/>
					<SeriesCollectionDirective>
						{barCustomSeries.map( (item, index) => (<SeriesDirective key={index} {...item}/>))}
					</SeriesCollectionDirective>
				</ChartComponent>
			</div>
		</div>
  )
}

export default Bar