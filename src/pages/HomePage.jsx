import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CourseList from "../components/CourseList";
import {
  asyncGetCourses,
  asyncDeleteCourse,
  deleteCourseActionCreator,
} from "../states/courses/action";

function HomePage() {
  const { courses = [], isDeleteCourse = false } = useSelector(
    (states) => states
  );

  const is_me = 1;

  const dispatch = useDispatch();

  useEffect(() => {
    if (isDeleteCourse) {
      // eslint-disable-next-line no-undef
      Swal.fire({
        icon: "success",
        title: "Todo berhasil dihapus!",
        showConfirmButton: false,
        timer: 700,
      });
      dispatch(deleteCourseActionCreator(false));
    }
    dispatch(asyncGetCourses(is_me));
  }, [dispatch, isDeleteCourse, is_me]);

  const onDeleteTodo = (id) => {
    dispatch(asyncDeleteCourse(id));
  };

  return (
    <section>
      <div className="container pt-1">
        <CourseList courses={courses} onDeleteTodo={onDeleteTodo}></CourseList>
      </div>
    </section>
  );
}

export default HomePage;
