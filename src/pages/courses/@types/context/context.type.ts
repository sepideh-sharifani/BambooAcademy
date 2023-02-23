export type courseContextStateType = {
  courseId: string | "35154887874";
  title: string;
  cost: number;
  endDate: string;
  startDate: string;
  capacity: number;
  teacherId?: string;
  teacherName?: string;
  lessonId?: string;
  lessonName?: string;
};

export type courseContextActionType<T, P> = {
  type: T;
  payload?: P | undefined;
};
