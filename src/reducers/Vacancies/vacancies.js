import {
  ADD_VACANCIE_IS_LOADING,
  ADD_VACANCIE_DATA,
  ADD_VACANCIES_ERROR
} from '../../actions/Vacancies/AddVacancyAction';

import {
  VACANCIES_IS_LOADING,
  VACANCIES_DATA,
  VACANCIES_ERROR
} from '../../actions/Vacancies/getVacanciesAction';

import {
  DELETE_VACANCY_IS_LOADING,
  DELETE_VACANCY_DATA,
  DELETE_VACANCY_ERROR
} from '../../actions/Vacancies/DeleteSingleVacancyAction';

import {
  VACANCIES_BY_ACCOUNT_IS_LOADING,
  VACANCIES_BY_ACCOUNT_DATA,
  VACANCIES_BY_ACCOUNT_ERROR
} from '../../actions/Vacancies/GetVacanciesByAccountAction';


import {
  VACANCIES_BY_GROUP_IS_LOADING,
  VACANCIES_BY_GROUP_DATA,
  VACANCIES_BY_GROUP_ERROR
} from '../../actions/Vacancies/GetVacanciesByGroupAction';

import {
  SINGLE_VACANCY_IS_LOADING,
  SINGLE_VACANCY_DATA,
  SINGLE_VACANCY_ERROR
} from '../../actions/Vacancies/GetSingleVacancyAction';

import {
  UPDATE_VACANCY_IS_LOADING,
  UPDATE_VACANCY_DATA,
  UPDATE_VACANCY_ERROR
} from '../../actions/Vacancies/UpdateVacancyAction';

const initialState = {
  vacancies_by_account: [],
  vacancies_by_group:[],
  single_vacancy:[],
  isLoading: false,
  err:false,
  message:'',
  busy:false,
};

export default (state = initialState, action) => {
  switch (action.type) {

    case ADD_VACANCIE_IS_LOADING: {
      return { ...state, isLoading: true, err:action.error};
    }

    case ADD_VACANCIE_DATA: {
      return {  ...state, vacancies_by_group: state.vacancies_by_group.concat(action.result.data) , message:action.message, err:false,};
    }

    case ADD_VACANCIES_ERROR: {
      return { ...state, err: action.err, message:action.message };
    }

    case VACANCIES_BY_GROUP_IS_LOADING: {
      return { ...state, isLoading: true };
    }

    case VACANCIES_BY_GROUP_DATA: {
      const { data } = action.result;
      return { ...state, vacancies_by_group: data, isLoading: false };
    }

    case VACANCIES_BY_GROUP_ERROR: {
      return { ...state, error: action.err };
    }

    case VACANCIES_IS_LOADING: {
      return { ...state, isLoading: true };
    }

    case VACANCIES_BY_ACCOUNT_DATA: {
      const { data } = action.result;
      return { ...state, vacancies_by_account: data };
    }

    case VACANCIES_BY_ACCOUNT_ERROR: {
      return { ...state, error: action.err };
    }

    case DELETE_VACANCY_IS_LOADING: {
      return { ...state, isLoading: true };
    }

    case DELETE_VACANCY_DATA: {
      return { ...state, ...state.vacancies_by_group.filter((data, i) => data._id !== action.id)  ,success: true, err:true, message:'succesfully deleted vacancy' };
    }

    case DELETE_VACANCY_ERROR: {
      return { ...state, error: action.error, message:'Something went wrong , try again!' };
    }


    case SINGLE_VACANCY_IS_LOADING: {
      return { ...state, isLoading: true };
    }

    case SINGLE_VACANCY_DATA: {
      const { data } = action.result;
      return { ...state, isLoading:false, single_vacancy: data };
    }

    case SINGLE_VACANCY_ERROR: {
      return { ...state, error: action.err };
    }

    case UPDATE_VACANCY_IS_LOADING: {
      return { ...state, isLoading: true };
    }

    case UPDATE_VACANCY_DATA: {
      return { ...state, success: true, err:false, message:'succesfully updated vacancy' };
    }

    case UPDATE_VACANCY_ERROR: {
      return { ...state, error: action.error, message:'Something went wrong , try again!' };
    }

    default:
      return state;
  }
};
