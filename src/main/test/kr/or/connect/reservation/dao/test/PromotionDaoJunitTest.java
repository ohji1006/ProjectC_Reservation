package kr.or.connect.reservation.dao.test;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import org.junit.Assert;
import kr.or.connect.reservation.config.ApplicationConfig;
import kr.or.connect.reservation.dao.PromotionDao;
import kr.or.connect.reservation.dto.Promotion;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = { ApplicationConfig.class })
public class PromotionDaoJunitTest {
	@Autowired
	private PromotionDao promotionDao;

	@Test
	public void testSelectAll() {
		List<Promotion> testPromotionList = new ArrayList<>();
		testPromotionList.add(new Promotion((long) 1, (long) 1, "img/1_th_1.png"));
		testPromotionList.add(new Promotion((long) 2, (long) 5, "img/5_th_13.png"));
		testPromotionList.add(new Promotion((long) 3, (long) 6, "img/6_th_18.png"));
		testPromotionList.add(new Promotion((long) 4, (long) 9, "img/9_th_24.png"));
		testPromotionList.add(new Promotion((long) 5, (long) 11, "img/11_th_30.png"));
		testPromotionList.add(new Promotion((long) 6, (long) 12, "img/12_th_32.png"));
		testPromotionList.add(new Promotion((long) 7, (long) 18, "img/18_th_46.png"));
		testPromotionList.add(new Promotion((long) 8, (long) 22, "img/22_th_55.png"));
		testPromotionList.add(new Promotion((long) 9, (long) 34, "img/34_th_85.png"));
		testPromotionList.add(new Promotion((long) 10, (long) 41, "img/41_th_105.png"));
		testPromotionList.add(new Promotion((long) 11, (long) 44, "img/44_th_112.png"));

		List<Promotion> actualPromotionList = promotionDao.selectAll();

		for (int i = 0; i < actualPromotionList.size(); i++) {
			Assert.assertEquals(testPromotionList.get(i).getId(), actualPromotionList.get(i).getId());
			Assert.assertEquals(testPromotionList.get(i).getProductId(), actualPromotionList.get(i).getProductId());
			Assert.assertEquals(testPromotionList.get(i).getProductImageUrl(),
					actualPromotionList.get(i).getProductImageUrl());
		}

	}

}
