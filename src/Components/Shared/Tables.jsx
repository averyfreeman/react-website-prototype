import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';

const Table = ({ className, date, id, order, subject, title }) => {
	return (
		<Fragment>
			<tr key={id} className={className}>
				<th scope='row'>{order}</th>
				<td>{title}</td>
				<td>{subject}</td>
				<td>{date}</td>
			</tr>
		</Fragment>
	);
};

const Tables = ({ tables }) => {
	return (
		<Fragment>
			<div
				className='container'
				// style={{ padding: '20px', margin: 0 }}
			>
				<Fade bottom duration={4000} when={true} appear={true}>
					<button
						className='btn btn-outline-success'
						type='button'
						data-toggle='collapse'
						data-target='#tables'
						aria-expanded='false'
						aria-controls='tables'
					>
						Reveal Tables
					</button>
				</Fade>
				<div className='collapse mt-5' id='tables'>
					<table className='table'>
						<thead>
							<tr className='table-dark'>
								<th scope='col'>Order</th>
								<th scope='col'>Tutorial Name</th>
								<th scope='col'>Focus</th>
								<th scope='col'>Completed</th>
							</tr>
						</thead>
						<tbody>
							{tables.map(tableProps => (
								<Table {...tableProps} key={tableProps.id} />
							))}
						</tbody>
					</table>
				</div>
			</div>
		</Fragment>
	);
};

export default Tables;
