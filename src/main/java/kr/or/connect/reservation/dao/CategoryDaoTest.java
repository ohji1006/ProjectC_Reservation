package kr.or.connect.reservation.dao;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import kr.or.connect.reservation.config.ApplicationConfig;
import kr.or.connect.reservation.dto.Category;

public class CategoryDaoTest {

	public static void main(String[] args) {
		ApplicationContext ac = new AnnotationConfigApplicationContext(ApplicationConfig.class);
		
		CategoryDao categoryDao = ac.getBean(CategoryDao.class);
		
		List<Category> categoryList = categoryDao.selectAll();
		
		for(Category category : categoryList) {
			System.out.println(category.toString());
		}
		
//		GuestbookDao guestbookDao =  ac.getBean(GuestbookDao.class);
		
//		Guestbook guestbook = new Guestbook();
//		guestbook.setContent("thist is content");
//		guestbook.setName("FeatCodna");
//		guestbook.setRegdate(new Date());
//		
//		Long id = guestbookDao.insert(guestbook);

//		System.out.print("ID : " + id);
	}

}
