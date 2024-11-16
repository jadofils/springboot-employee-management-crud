package employee.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import employee.management.entity.Employee;

public interface EmployRepository extends JpaRepository<Employee,Long>{

}
