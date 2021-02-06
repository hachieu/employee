package com.service;

import org.springframework.web.multipart.MultipartFile;

public interface FileUploadService {
	void saveFile(MultipartFile file);
}
