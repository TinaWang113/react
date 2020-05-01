const employees = [
    {
        id: "1",
        name: "Bob",
        role: "Software Engineer"
    },
    {
        id: "2",
        name: "Sarah",
        role: "CEO"
    },
    {
        id: "3",
        name: "Tina",
        role: "Software Engineer"
    }

];

export const getAllEmployees = () => {
    return employees;
};

export const getEmployeesById = (id) =>{
    //if matching, it will append to a list.
    return employees.filter(employees =>{
        return employees.id === id;
    });
};