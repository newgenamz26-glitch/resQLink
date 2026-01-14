let allCases = JSON.parse(localStorage.getItem('resq_cases')) || [];

const saveAll = () => {
  localStorage.setItem('resq_cases', JSON.stringify(allCases));
};
