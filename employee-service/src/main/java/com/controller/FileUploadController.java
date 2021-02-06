package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.service.FileUploadService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "/files", produces = "application/json")
public class FileUploadController {
	
	@Autowired
	private FileUploadService fileUploadService;
	
	@PostMapping
	public void saveFile(@RequestParam("file") MultipartFile file) {
		try {
			fileUploadService.saveFile(file);
		}catch(Exception e) {
			e.printStackTrace();
			System.out.print("Error API");
		}
	}
}
