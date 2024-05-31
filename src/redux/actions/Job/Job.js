
import axios from 'axios';
import { MAIN_URL } from '../../../URLS/config';
import { getAllJobsRequest, getAllJobsSuccess, getMyJobsRequest, getMyJobsSuccess } from '../../reducers/Job/Job';
export const getAllJobs  = (options ) =>async (dispatch)  => {
  try {
    dispatch(getAllJobsRequest());

    const res = await axios.get(`${MAIN_URL}/job/alljobs`, {
      withCredentials : true
    });


    dispatch(getAllJobsSuccess(res.data.jobs));
  } catch (e) {
    console.log("the error is ", e);
  }
};
export const postJob = async(options) => {
  try {
   
    const res = await axios.post(`${MAIN_URL}/job/postjob`, options, {
      withCredentials: true,
    }); 
    
return res.data
  } catch (e) {

    console.log("the error is ", e);
  }
};
export const getMyJobs = (options) => async (dispatch) => {
  try {
    dispatch(getMyJobsRequest());
    const { data } = await axios.get(`${MAIN_URL}/job/myjobs`, {
      withCredentials : true
    });
    dispatch(getMyJobsSuccess(data.jobs))



  } catch (e) {
    console.log("the error is ", e);
  }
};
export const updateJob = async (options) => {
  try {
    console.log(options)
    const res =
      await axios.put(`${MAIN_URL}/job/update/${options.jobId}`, options, {
       withCredentials: true,
     });
     return res.data;



  } catch (e) {
    console.log("the error is ", e);
  }
};
export const getSingleJob =  async (id) => {
  try {

 const data = await axios.get(`${MAIN_URL}/job/${id}`, {
   withCredentials: true,
 });
    
  } catch (e) {
    console.log("the error is ", e);
  }
};
export const deleteJob = async (id) => {
  try {
    const data = await axios.delete(`${MAIN_URL}/job/${id}`, {
      withCredentials : true
    });

  } catch (e) {
    console.log("the error is ", e);
  }
};
