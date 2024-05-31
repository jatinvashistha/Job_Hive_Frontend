 import axios from "axios";
import { MAIN_URL } from "../../../URLS/config";
import {
  EmployeeApplicationFailure,
  employeeApplicationRequest,
  employeeApplicationSuccess,
  jobSeekerGetAllApplicationFailure,
  jobSeekerGetAllApplicationRequest,
  jobSeekerGetAllApplicationSuccess,
} from "../../reducers/Application/Application";

const instance = axios.create({
  baseURL: MAIN_URL,
  withCredentials: true,
});
const token = localStorage.getItem("token");

export const postApplication = async (options) => {
  try {
    const {name,email,phone, coverLetter,address,city ,country,jobId,resume} = options
    console.log("the application is", options);
    const data = await instance.post("/application/postapplication", {
      name,
      email,
      phone,
      coverLetter,
      address,
      city,
      country,
      jobId,
      resume,
      token
    });
    return data.data;
  } catch (e) {
    console.log("the error is ", e);
  }
};

export const employeeGetAllApplication = (options) => async (dispatch) => {
  try {
    dispatch(employeeApplicationRequest());
    const res = await instance.put("/application/employeeapplications", {
      token
    });
    dispatch(employeeApplicationSuccess(res.data.applications));
  } catch (e) {
    dispatch(EmployeeApplicationFailure(e.message));
    console.log("the error is ", e);
  }
};

export const jobSeekerGetAllApplication = (options) => async (dispatch) => {
  try {
    dispatch(jobSeekerGetAllApplicationRequest());
    const res = await instance.put("/application/jobseekerapplications", {
      token
    });
    dispatch(jobSeekerGetAllApplicationSuccess(res.data.applications));
  } catch (e) {
    dispatch(jobSeekerGetAllApplicationFailure(e.message));
    console.log("the error is ", e);
  }
};

export const jobSeekerDeleteApplication = async (id) => {
  try {
    const data = await instance.put(`/application/deleteapplication/${id}`, {
      token
    });
    return data.data;
  } catch (e) {
    console.log("the error is ", e);
  }
};
