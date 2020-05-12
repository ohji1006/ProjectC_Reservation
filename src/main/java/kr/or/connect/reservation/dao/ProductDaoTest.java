package kr.or.connect.reservation.dao;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import kr.or.connect.reservation.config.ApplicationConfig;
import kr.or.connect.reservation.dto.Product;


public class ProductDaoTest {
	public static void main(String[] args) {
		ApplicationContext ac = new AnnotationConfigApplicationContext(ApplicationConfig.class);
		ProductDao productDao = ac.getBean(ProductDao.class);
		
//		List<Product> productList = productDao.selectAll(1, 5);
//		for(Product pd : productList) {
//			System.out.println(pd.toString());
//		}
//		
//		long count = productDao.selectCount();
//		System.out.println("Count : " +  count);
		
		long categoryId = 3;
		
		List<Product> productList2 = productDao.selectAllAtCategory(categoryId, 0, 4);
		for(Product pd : productList2) {
			System.out.println(pd.toString());
		}
		
		long count2 = productDao.selectCountAtCategory(categoryId);
		System.out.println("Count : " +  count2);
	}
}
