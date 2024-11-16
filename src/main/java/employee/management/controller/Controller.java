package employee.management.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import employee.management.dto.EmployeeDto;
import employee.management.service.EmployeeService;
import lombok.AllArgsConstructor;

@CrossOrigin
@AllArgsConstructor
@RestController
@RequestMapping("/api/employees")
public class Controller {
//build add Employee RestAPi
private EmployeeService service;

@PostMapping
public ResponseEntity<EmployeeDto>createEmployee(@RequestBody EmployeeDto employeeDto){
    EmployeeDto savedEmployee=service.createEmployee(employeeDto);
    return new ResponseEntity<>(savedEmployee,HttpStatus.CREATED);
}

 @GetMapping("/{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long employeeId) {
        EmployeeDto employeeDto = service.getEmployeeById(employeeId);
        return ResponseEntity.ok(employeeDto);
    }
//get all employees here
@GetMapping
public ResponseEntity<List<EmployeeDto>>getAllEmployees(){
    List<EmployeeDto>employees=service.getAllEmployees();
    return ResponseEntity.ok(employees);
}

// Update the specific employee
@PutMapping("/{id}")
public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") Long employeeId, 
                                                   @RequestBody EmployeeDto updatedEmployee) {
    // Call the service method to update the employee
    EmployeeDto employeeDto = service.updateEmployee(employeeId, updatedEmployee);

    // Return a successful response with the updated employee DTO
    return ResponseEntity.ok(employeeDto);
}

//delete theuser
@DeleteMapping("/{id}")
public ResponseEntity<String>deleteEmployee(@PathVariable("id") Long employeeId){
    service.deleteEmployee(employeeId);
    return ResponseEntity.ok("Employee DEleted Successfully!!!");
}

}
