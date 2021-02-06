package com.service;

import java.util.List;
import java.util.Optional;

import com.entity.Employee;

public interface EmployeeService {
	
	public Employee save(Employee employee);
	
	public List<Employee> findAll();
	
	public  Optional<Employee> findById(int id);
	
	public Employee update(String id, Employee employee);
	
	public void deleteById(int id);
}
