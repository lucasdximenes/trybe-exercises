const patientService = require("../services/patient.service");

const getAllPatientsAndPlans = async (_req, res) => {
  const response = await patientService.getAllPatientsAndPlans();
  if (response.isError) {
    const { statusCode, message } = response;
    return res.status(statusCode).json({ message });
  }

  return res.status(200).json(response.data);
};

const getAllPatientsAndSurgeries = async (req, res) => {
  const { showDoctors } = req.query;
  let response;

  if (showDoctors === "true") {
    response = await patientService.getAllPatientsAndSurgeries();
  } else {
    response = await patientService.getAllPatientsAndSurgeriesWithoutDoctors();
  }

  if (response.isError) {
    const { statusCode, message } = response;
    return res.status(statusCode).json({ message });
  }

  return res.status(200).json(response.data);
};

const getPatientsOnAGivenPlan = async (req, res) => {
  const { planId } = req.params;
  const response = await patientService.getPatientsOnAGivenPlan(planId);
  if (response.isError) {
    const { statusCode, message } = response;
    return res.status(statusCode).json({ message });
  }

  return res.status(200).json(response.data);
};

const createPatient = async (req, res) => {
  const { fullname, planId } = req.body;
  if (!fullname || !planId) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const response = await patientService.createPatient(fullname, planId);
  if (response.isError) {
    const { statusCode, message } = response;
    return res.status(statusCode).json({ message });
  }

  return res.status(201).json(response.data);
};

const findSurgeriesByDoctorName = async (req, res) => {
  const { doctorName } = req.params;
  console.log(doctorName);
  const response = await patientService.findSurgeriesByDoctorName(doctorName);
  if (response.isError) {
    const { statusCode, message } = response;
    return res.status(statusCode).json({ message });
  }

  return res.status(200).json(response.data);
};

module.exports = {
  getAllPatientsAndPlans,
  getAllPatientsAndSurgeries,
  getPatientsOnAGivenPlan,
  createPatient,
  findSurgeriesByDoctorName,
};
