package kr.or.connect.reservation.service.impl;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import kr.or.connect.reservation.config.ApplicationConfig;
import kr.or.connect.reservation.dto.Category;
import kr.or.connect.reservation.service.CategoryService;

public class CategoryServiceImplTest {
	public static void main(String[] args) {
		ApplicationContext ac = new AnnotationConfigApplicationContext(ApplicationConfig.class);
		CategoryService categoryService = ac.getBean(CategoryService.class);
		List<Category>categoryList =  categoryService.getCategoryList();
		
		for(Category category : categoryList) {
			System.out.println(category.toString());
		}
	}
}
