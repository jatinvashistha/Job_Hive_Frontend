
import axios from 'axios';
import { MAIN_URL } from '../../../URLS/config';
import { getAllJobsRequest, getAllJobsSuccess, getMyJobsRequest, getMyJobsSuccess } from '../../reducers/Job/Job';
const token = localStorage.getItem("token");
export const getAllJobs  = (options ) =>async (dispatch)  => {
  try {
    dispatch(getAllJobsRequest());

    const res = await axios.put(`${MAIN_URL}/job/alljobs`, {
      token
    },{
      withCredentials : true
    });


    dispatch(getAllJobsSuccess(res.data.jobs));
  } catch (e) {
    console.log("the error is ", e);
  }
};
export const postJob = async(options) => {
  try {
    const {
      title,
      description,
      category,
      city,
      location,
      fixedSalary,
      expired,
      country,
      salaryFrom,
      salaryTo
    } = options;
   
    const res = await axios.post(
      `${MAIN_URL}/job/postjob`,
      {
        title,
        description,
        category,
        city,
        location,
        fixedSalary,
        expired,
        country,
        salaryFrom,
        salaryTo,
        token,
      },
      {
        withCredentials: true,
      }
    ); 
    
return res.data
  } catch (e) {

    console.log("the error is ", e);
  }
};
export const getMyJobs = (options) => async (dispatch) => {
  try {
    dispatch(getMyJobsRequest());
    const { data } = await axios.put(`${MAIN_URL}/job/myjobs`, {
      token
    } ,{
      withCredentials : true
    });
    dispatch(getMyJobsSuccess(data.jobs))



  } catch (e) {
    console.log("the error is ", e);
  }
};
export const updateJob = async (options) => {
  try {
     const {
       title,
       description,
       category,
       city,
       location,
       fixedSalary,
       expired,
       country,
       salaryFrom,
       salaryTo,
     } = options;
   
    const res =
      await axios.put(`${MAIN_URL}/job/update/${options.jobId}`, { title,
       description,
       category,
       city,
       location,
       fixedSalary,
       expired,
       country,
       salaryFrom,
       salaryTo,token}, {
       withCredentials: true,
     });
     return res.data;



  } catch (e) {
    console.log("the error is ", e);
  }
};
export const getSingleJob =  async (id) => {
  try {

    const data = await axios.put(`${MAIN_URL}/job/${id}`, {
   token
 },{
   withCredentials: true,
 });
    
  } catch (e) {
    console.log("the error is ", e);
  }
};
export const deleteJob = async (id) => {
  try {
    const data = await axios.put(`${MAIN_URL}/job/${id}`, {
      token
    },{
      withCredentials : true
    });

  } catch (e) {
    console.log("the error is ", e);
  }
};
