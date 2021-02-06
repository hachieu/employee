package com.serviceiplm;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.data.EmployeeRepository;
import com.entity.Employee;
import com.service.EmployeeService;

@Service
public class EmployeeServiceIplm implements EmployeeService{
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Override
	public Employee save(Employee employee) {
		return employeeRepository.save(employee);
	}

	@Override
	public List<Employee> findAll() {
		return employeeRepository.findAll();
	}

	@Override
	public Optional<Employee> findById(int id) {
		return employeeRepository.findById(id);
	}

	@Override
	public Employee update(String id, Employee employee) {
		employee.setId(Integer.parseInt(id));
		return employeeRepository.save(employee);
	}

	@Override
	public void deleteById(int id) {
		employeeRepository.deleteById(id);
		
	}

}
