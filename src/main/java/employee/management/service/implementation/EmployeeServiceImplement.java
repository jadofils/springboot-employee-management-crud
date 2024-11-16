package employee.management.service.implementation;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import employee.management.dto.EmployeeDto;
import employee.management.entity.Employee;
import employee.management.exception.ResourceNotFoundException;
import employee.management.mapper.EmployeeMapper;
import employee.management.repository.EmployRepository;
import employee.management.service.EmployeeService;
import lombok.AllArgsConstructor;
@Service
@AllArgsConstructor

public class EmployeeServiceImplement implements EmployeeService{
   //we not need to use autowired because we have AllArgsConstructor 
    private  EmployRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee=EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee=employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto((savedEmployee));
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
     Employee employee= employeeRepository.findById(employeeId)
     .orElseThrow(()->new ResourceNotFoundException("Employee is not Exist given by id:"+employeeId));

return EmployeeMapper.mapToEmployeeDto(employee);   
 }

   // Method to get all employees
    public List<EmployeeDto> getAllEmployees() {
        // Retrieve all employees from the database
        List<Employee> employees = employeeRepository.findAll();

        // Convert the list of employees to a list of EmployeeDto using stream
        return employees.stream()
                        .map(EmployeeMapper::mapToEmployeeDto) // Mapping each employee entity to DTO
                        .collect(Collectors.toList()); // Collecting the result into a list
    }

    @Override
public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {
    // Find the employee by ID or throw exception if not found
    Employee employee = employeeRepository.findById(employeeId).orElseThrow(
            () -> new ResourceNotFoundException("Employee not found with ID: " + employeeId)
    );
    
    // Update the employee fields with the provided values
    employee.setFirstName(updatedEmployee.getFirstname());
    employee.setLastName(updatedEmployee.getLastname());
    employee.setEmail(updatedEmployee.getEmail());
    
    // Save the updated employee to the database
    Employee updatedEmployeeObj = employeeRepository.save(employee);
    
    // Convert the updated entity to DTO and return
    return EmployeeMapper.mapToEmployeeDto(updatedEmployeeObj);
}
@Override
public void deleteEmployee(Long employeeId) {
    Employee employee = employeeRepository.findById(employeeId)
        .orElseThrow(() -> new ResourceNotFoundException("The Employee with the given ID does not exist: " + employeeId));
    
    // Delete the employee if found
    employeeRepository.delete(employee);
}

}
