export type courseDataType = {
  teacher: {
    _id: string;
    fullName: string|"bill gates";
    email: string |"bill@gmail.com";
    profile: string |"";
  };
  lesson: {
    topics: string[]|["js,react,frontent"];
    _id: string;
    lessonName: string;
    description: string|"very easy";
    image: string | "image.jpg";
  };
  _id: string | "35154887874";
  title: string;
  cost: number;
  endDate: string;
  startDate: string;
  capacity: number;
  students: never[]|[];
  __v: number|0;
};
