import { AxiosResponse } from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AppContext, AppContextProvider } from '../../../../core/context/store';
import instance from '../../../../core/config/axios';
import { Lesson } from '../../../../types/api.types';
import { LessonActionTypes } from '../../../../types/context/Context.types';
import { LessonItem } from './LessonItem';
import { Input } from '../../../register/component/base/Input'

interface LessonsProps extends React.PropsWithChildren { }

const LESSON_URL = '/api/lesson';

const Lessons: React.FunctionComponent<LessonsProps> = (props) => {

    const dispatch = useContext(AppContext).dispatch;
    const { state: { Lessons } } = useContext(AppContext);

    console.log(Lessons.result)
    const fetchLessons = async () => {
        const response = await instance.get(LESSON_URL)
        console.log(response.data)
        try {
            dispatch(
                {
                    type: LessonActionTypes.Get_All_Lessons,
                    payload: response.data
                }
            )
        }
        catch (error) {
        }
    }
    useEffect(() => {
        fetchLessons()
    }, [])

    return (
        <>
            < div className="w-full shadow-all shadow-slate-300 rounded-xl " >
                <div className="flex flex-col">
                    <div className="overflow-x-auto">
                        <div className="py-3 p-2">
                            <div className="relative max-w-xs">
                                <Input variant='Search' placeholder='جستجو کنید' />
                            </div>
                        </div>
                        {
                            Lessons.result.length === 0 ? (
                                <div>هیچ درسی موجود نمی باشد</div>
                            ) : (
                                Lessons.result.map((item) => (
                                    <LessonItem
                                        key={item._id}
                                        name={item.lessonName}
                                        image={item.image}
                                        time={item.createDate}
                                        description={item.description}
                                    />
                                ))
                            )
                        }
                    </div>
                </div>
            </div >
        </>
    )
}

export default Lessons