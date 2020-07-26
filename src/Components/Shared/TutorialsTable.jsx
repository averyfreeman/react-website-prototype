import React, { Fragment } from 'react';
import Tables from 'Lists/tutorials';
import { CenteredRow } from 'Styles/Shared/PageStyles';

const TutorialsTable = props => (
	<Fragment>
		<button
			className='btn btn-outline-success'
			type='button'
			data-toggle='collapse'
			data-target='#tutorials-table'
			aria-expanded='false'
			aria-controls='tutorials-table'
		>
			Reveal Tables
		</button>
		<CenteredRow heightMargin={'3rem'}>
			<div className='collapse mt-5' id='tutorials-table'>
				<table class='table'>
					<thead>
						<tr className='table-dark'>
							<th scope='col'>Order</th>
							<th scope='col'>Tutorial Name</th>
							<th scope='col'>Focus</th>
							<th scope='col'>Completed</th>
						</tr>
					</thead>
					<tbody>
						<Tables />
					</tbody>
				</table>
			</div>
		</CenteredRow>
	</Fragment>
);

export default TutorialsTable;
