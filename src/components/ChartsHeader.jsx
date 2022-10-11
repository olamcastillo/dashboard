import React from 'react'

const ChartsHeader = ( {category, title}) => {
	return (
		<div className='mb-10'>
			<div>
				<p className='text-lg text-gray-400'>Chart</p>
				<p className='text-3xl text-slate-900 font-extrabold tracking-light dark:text-gray-200'>{category}</p>
			</div>
			<p className='text-xl text-center mb-2 mt-3 dark:text-gray-200'>{title}</p>
		</div>
	)
}

export default ChartsHeader