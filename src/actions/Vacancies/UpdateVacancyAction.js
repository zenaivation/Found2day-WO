import axios from 'axios';
import { toast } from "react-toastify";
import {bearer} from '../../helpers/Bearer';
const header = bearer();
export const UPDATE_VACANCY_IS_LOADING = 'update_vacancy_is_loading';
export const UPDATE_VACANCY_DATA = 'update_vacancy_data';
export const UPDATE_VACANCY_ERROR = 'update_vacancy_error';

export const updateVacancy = (
  vacancyId,
  title,
  description,
  content,
  image,
  jobTitle,
  branch,
  education,
  experience,
  employmentType,
  weekHours,
  distance,
  postalcode
) => async dispatch => {
  try {
    dispatch({ type: UPDATE_VACANCY_IS_LOADING });
    const result = await axios.put(
      `http://127.0.0.1:5000/vacancies/${vacancyId}`,
      {
        title: title,
        description: description,
        content:content,
        image:image,
        jobTitle: jobTitle,
        branch: branch,
        education: education,
        experience: experience,
        employmentType: employmentType,
        weekHours: weekHours,
        distance: distance,
        postalcode: postalcode
      },
      header
    );
    return dispatch({ type: UPDATE_VACANCY_DATA, result });
  } catch (err) {
    return dispatch({
      type: UPDATE_VACANCY_ERROR,
      payload: err
    });
  }
};
