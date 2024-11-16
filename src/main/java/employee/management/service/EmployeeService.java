package employee.management.service;

import java.util.List;

import employee.management.dto.EmployeeDto;

public interface EmployeeService {
    //the interface of creating the employee
EmployeeDto createEmployee(EmployeeDto employeeDto);

//method interface for getting all employee by id
EmployeeDto getEmployeeById(Long employeeId);
//get list of all employees
List<EmployeeDto> getAllEmployees();
//the method interface update
EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee);
//delete specific user
void deleteEmployee (Long empoyeeId);
}
