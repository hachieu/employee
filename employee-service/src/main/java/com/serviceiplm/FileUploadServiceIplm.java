package com.serviceiplm;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.service.FileUploadService;

@Service
public class FileUploadServiceIplm implements FileUploadService {

	private final Path root = Paths.get("uploads");

	@Override
	public void saveFile(MultipartFile file) {
		try {
			if (Files.notExists(root)) {
				Files.createDirectory(root);
			}

			if (Files.notExists(Paths.get("uploads/".concat(file.getOriginalFilename())))) {
				Files.copy(file.getInputStream(), this.root.resolve(file.getOriginalFilename()));
			} else {
				Files.delete(Paths.get("uploads/".concat(file.getOriginalFilename())));
				Files.copy(file.getInputStream(), this.root.resolve(file.getOriginalFilename()));
			}
		} catch (Exception e) {
			System.out.println("Error File service");
		}

	}

}
