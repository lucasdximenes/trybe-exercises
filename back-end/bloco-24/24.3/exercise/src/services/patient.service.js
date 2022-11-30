const { Patient, Plan, Surgery } = require("../models");

const getAllPatientsAndPlans = async () => {
  const patients = await Patient.findAll({
    include: { model: Plan, as: "plan" },
  });

  return {
    isError: false,
    data: patients,
  };
};

const getAllPatientsAndSurgeries = async () => {
  const patients = await Patient.findAll({
    include: { model: Surgery, as: "surgeries" },
  });

  return {
    isError: false,
    data: patients,
  };
};

const getAllPatientsAndSurgeriesWithoutDoctors = async () => {
  const patients = await Patient.findAll({
    include: {
      model: Surgery,
      as: "surgeries",
      attributes: {
        exclude: ["doctor"],
      },
    },
  });

  return {
    isError: false,
    data: patients,
  };
};

const getPatientsOnAGivenPlan = async (planId) => {
  const patients = await Patient.findAll({
    where: { plan_id: planId },
    include: { model: Plan, as: "plan" },
  });

  return {
    isError: false,
    data: patients,
  };
};

const verifyIfPlanExists = async (planId) => {
  const planExists = await Plan.findOne({ where: { plan_id: planId } });

  if (!planExists) {
    return {
      isError: true,
      statusCode: 404,
      message: "Plan not found",
    };
  }

  return {
    isError: false,
  };
};

const createPatient = async (fullname, planId) => {
  const response = await verifyIfPlanExists(planId);
  if (response.isError) {
    return response;
  }

  const newPatient = await Patient.create({ fullname, plan_id: planId });

  return {
    isError: false,
    data: newPatient,
  };
};

const findSurgeriesByDoctorName = async (doctorName) => {
  const surgeries = await Surgery.findAll({
    where: {
      doctor: doctorName,
    },
  });

  return {
    isError: false,
    data: surgeries,
  };
};

module.exports = {
  getAllPatientsAndPlans,
  getAllPatientsAndSurgeries,
  getAllPatientsAndSurgeriesWithoutDoctors,
  getPatientsOnAGivenPlan,
  createPatient,
  findSurgeriesByDoctorName,
};
