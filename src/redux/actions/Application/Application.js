import { MAIN_URL } from "../../../URLS/config";
import { EmployeeApplicationFailure, employeeApplicationRequest, employeeApplicationSuccess, jobSeekerGetAllApplicationFailure, jobSeekerGetAllApplicationRequest, jobSeekerGetAllApplicationSuccess } from "../../reducers/Application/Application";
import axios from 'axios'
export const postApplication = async (options )=> {
  try {
    console.log('the application is', options)
    const data = await axios.post(`${MAIN_URL}/application/postapplication`, 
      options
    ,{
      withCredentials : true
    });
      
    return data.data
    
    } catch (e) {
       console.log("the error is ", e);
    }
}
export const employeeGetAllApplication = (options) => async (dispatch) => {
  try {
    dispatch(employeeApplicationRequest());
    const res = await axios.get(
      `${MAIN_URL}/application/employeeapplications`,
      {
        withCredentials: true,
      }
    );
    

    dispatch(employeeApplicationSuccess(res.data.applications));
  } catch (e) {
    dispatch(EmployeeApplicationFailure(e.message));
    console.log("the error is ", e);
  }
};
export const jobSeekerGetAllApplication = (options) => async (dispatch) => {
  try {
    dispatch(jobSeekerGetAllApplicationRequest());
    const res = await axios.get(
      `${MAIN_URL}/application/jobseekerapplications`, {
        withCredentials : true
      }
    );
    dispatch(jobSeekerGetAllApplicationSuccess(res.data.applications));
  } catch (e) {
    dispatch(jobSeekerGetAllApplicationFailure(e.message));
    console.log("the error is ", e);
  }
};
export const jobSeekerDeleteApplication = async (id) => {
  try {

    const data = await axios.delete(
      `${MAIN_URL}/application/deleteapplication/${id}`, {
        withCredentials : true
      }
    );

return data.data



  } catch (e) {
    console.log('the error is ',e);
  }
};