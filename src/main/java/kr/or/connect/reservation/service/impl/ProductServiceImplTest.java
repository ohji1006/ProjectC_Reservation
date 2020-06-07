package kr.or.connect.reservation.service.impl;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import kr.or.connect.reservation.config.ApplicationConfig;
import kr.or.connect.reservation.dto.Product;
import kr.or.connect.reservation.service.ProductService;
import static kr.or.connect.reservation.service.ProductService.*;

public class ProductServiceImplTest {
	public static void main(String[] args) {
		ApplicationContext ac = new AnnotationConfigApplicationContext(ApplicationConfig.class);
		ProductService productService = ac.getBean(ProductService.class);

//		//전체 리스트, 갯수 구하기.
//		List<Product> productList = productService.getProductList(0, SELECT_COUNT_LIMIT);
//		for (Product product : productList) {
//			System.out.println(product.toString());
//		}
//
//		long productCount = productService.getProductCount();
//		System.out.println("Product count = " + productCount);
//
		// 특정 category 의 리스트, 갯수 구하기.
		long categoryId = 2;
		List<Product> productCategoryIdList = productService.getProductListAtCategory(categoryId, 0);

		for (Product product : productCategoryIdList) {
			System.out.println(product.toString());
		}

		long productCategoryIdCount = productService.getProductCountAtCategory(categoryId);
		System.out.println("Product count = " + productCategoryIdCount);
	}
}
