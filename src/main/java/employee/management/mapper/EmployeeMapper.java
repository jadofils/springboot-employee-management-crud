package employee.management.mapper;

import employee.management.dto.EmployeeDto;
import employee.management.entity.Employee;

public class EmployeeMapper {
    //mapping data of the employee on dto(data transfer objects)
public static EmployeeDto mapToEmployeeDto(Employee employee){
    return new EmployeeDto(
        employee.getId(),
        employee.getFirstName(),
        employee.getLastName(),
        employee.getEmail()
    );
} 
//also map the data from dto to employee table
public static Employee mapToEmployee(EmployeeDto employeeDto){
    return new Employee(
        employeeDto.getId(),
        employeeDto.getFirstname(),
        employeeDto.getLastname(),
        employeeDto.getEmail()
    );
}
}
