package com.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParseException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.entity.Employee;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.service.EmployeeService;
import com.service.FileUploadService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "/employee", produces = "application/json")
public class EmployeeController {
	
	private EmployeeService employeeService;
	private FileUploadService fileUploadService;
	
	@Autowired
	public EmployeeController(EmployeeService employeeService, FileUploadService fileUploadService) {
		this.employeeService = employeeService;
		this.fileUploadService = fileUploadService;
	}
	
	@PostMapping
	public Employee save(@RequestParam("employee") String employee, @RequestParam("file") MultipartFile file)
	throws JsonParseException , JsonMappingException , Exception {
		Employee employeeData = new ObjectMapper().readValue(employee, Employee.class);

		employeeService.save(employeeData);
		fileUploadService.saveFile(file);

		return employeeData;
	}
	
	@GetMapping("/current")
	public List<Employee> findAll(){
		return employeeService.findAll();
	}
	
	@GetMapping("/detail/{id}")
	public Employee findById(@PathVariable int id) {
		Optional<Employee> employee = employeeService.findById(id);
		
		return employee.get();
	}
	
	@PutMapping("/update/{id}")
	public Employee update(@PathVariable String id, @RequestBody Employee employee) {
		return employeeService.update(id, employee);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteById(@PathVariable int id) {
		employeeService.deleteById(id);
	}
}
