export enum LessonActionTypes {
	Get_All_Lessons = 'Get_All_Lessons',
	// Filter_Contact = 'Filter_Contact',
}

export type LessonState = {
	result: lessonDetailItem[];
};

export type lessonDetailItem = {
	createDate: string;
	description: string;
	image: string;
	lessonName: string;
	_id: string;
	courses: {
		title: string;
		cost: string;
	};
};

export type ContextAppState = {
	Lessons: LessonState;
};

export type ContextAction<T, K> = {
	type: T;
	payload?: K;
};
