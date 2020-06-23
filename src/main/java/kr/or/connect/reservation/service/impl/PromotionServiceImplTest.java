package kr.or.connect.reservation.service.impl;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import kr.or.connect.reservation.config.ApplicationConfig;
import kr.or.connect.reservation.dto.Category;
import kr.or.connect.reservation.dto.Promotion;
import kr.or.connect.reservation.service.CategoryService;
import kr.or.connect.reservation.service.PromotionService;

public class PromotionServiceImplTest {
	public static void main(String[] args) {
		ApplicationContext ac = new AnnotationConfigApplicationContext(ApplicationConfig.class);
		PromotionService promotionService = ac.getBean(PromotionService.class);
		List<Promotion> promotionList = promotionService.getPromotionList();

		for (Promotion promotion : promotionList) {
			System.out.println(promotion.toString());
		}
	}
}
