import React from 'react';

import { connect } from 'react-redux';

// import { Container } from './styles';

import * as CourseActions from '../../Store/actions/course'
import { bindActionCreators } from 'redux';

const Sidebar = ({ modules, toggleLesson }) => (
	<aside>
		{ modules.map(module => (
			<div key={module.id}>
				<strong>{module.title}</strong>
				<ul>
					{ module.lessons.map(lesson => (
						<li key={lesson.id}>
							{lesson.title}
							<button onClick={() => toggleLesson(module, lesson)}>Select</button>
						</li>
					)) }
				</ul>
			</div>
		))}
	</aside>
);

const mapStateToProps = state => ({
	modules: state.course.modules
});

const mapDispatchToProps = dispatch => 
	bindActionCreators(CourseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);